package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.CandleChartDTO;
import com.gridy.strategybuilder.dto.CandleDTO;
import com.gridy.strategybuilder.dto.SimulationDTO;
import com.gridy.strategybuilder.dto.StrategyDTO;
import com.gridy.strategybuilder.dto.StrategyGenerationParamsDTO;
import com.gridy.strategybuilder.dto.UserDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.entity.User;
import com.gridy.strategybuilder.enumeration.SimulationStatusEnum;
import com.gridy.strategybuilder.enumeration.StrategyTimePeriodEnum;
import com.gridy.strategybuilder.entity.StrategyGenerationParams;
import com.gridy.strategybuilder.mapper.StrategyGenerationParamsMapper;
import com.gridy.strategybuilder.mapper.UserMapper;
import com.gridy.strategybuilder.repository.StrategyGenerationParamsRepository;
import com.gridy.strategybuilder.service.CandleChartService;
import com.gridy.strategybuilder.service.CandleService;
import com.gridy.strategybuilder.service.SimulationService;
import com.gridy.strategybuilder.service.StrategyGenerationParamsService;
import com.gridy.strategybuilder.service.StrategyService;
import com.gridy.strategybuilder.service.UserService;
import java.math.BigDecimal;
import java.math.MathContext;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class StrategyGenerationParamsServiceImpl implements StrategyGenerationParamsService {

  private final StrategyGenerationParamsRepository strategyGenerationParamsRepository;
  private final StrategyGenerationParamsMapper strategyGenerationParamsMapper;
  private final StrategyService strategyService;
  private final CandleChartService candleChartService;
  private final CandleService candleService;
  private final SimulationService simulationService;
  private final UserService userService;

  @Override
  public ResponsePayload<StrategyGenerationParamsDTO> save(
      StrategyGenerationParamsDTO strategyGenerationParamsDTO, UserDetails user) {
    String username = user.getUsername();
    ResponsePayload<UserDTO> byEmail = userService.findByEmail(username);

    strategyGenerationParamsDTO.setUser(byEmail.getData());
    StrategyGenerationParamsDTO savedDTO = strategyGenerationParamsMapper.convertToDTO(
        strategyGenerationParamsRepository.save(
            strategyGenerationParamsMapper.convertToEntity(strategyGenerationParamsDTO)));
    return new ResponsePayload<>("", true, savedDTO);
  }

  @Override
  public ResponsePayload<StrategyGenerationParamsDTO> save(
      StrategyGenerationParamsDTO strategyGenerationParamsDTO) {
    StrategyGenerationParamsDTO savedDTO = strategyGenerationParamsMapper.convertToDTO(
        strategyGenerationParamsRepository.save(
            strategyGenerationParamsMapper.convertToEntity(strategyGenerationParamsDTO)));
    return new ResponsePayload<>("", true, savedDTO);
  }

  @Override
  public ResponsePayload<StrategyGenerationParamsDTO> findById(Long id) {

    return strategyGenerationParamsRepository.findById(id)
        .map(strategyGenerationParams -> new ResponsePayload<>(
            strategyGenerationParamsMapper.convertToDTO(strategyGenerationParams)))
        .orElseGet(() -> new ResponsePayload<>("Record does not exist"));
  }

  @Override
  public ResponsePayload<StrategyGenerationParamsDTO> findBestStrategy(Long id) {
    StrategyGenerationParamsDTO strategyGenerationParamsDTO = findById(id).getData();
    if (!strategyGenerationParamsDTO.getStatus().equals(SimulationStatusEnum.NEW)) {
      return new ResponsePayload<>(strategyGenerationParamsDTO);
    }

    Executors.newSingleThreadExecutor().submit(() -> {
      strategyGenerationParamsDTO.setStatus(SimulationStatusEnum.STARTED);
      save(strategyGenerationParamsDTO);
      int populationSize = 20;
      List<StrategyDTO> randomStrategies = new ArrayList<>();
      for (int i = 0; i < populationSize; i++) {
        randomStrategies.add(
            strategyService.generateRandomStrategy(strategyGenerationParamsDTO).getData());
      }

      for (StrategyDTO strategyDTO : randomStrategies) {
        strategyService.generateOrderPairTemplates(strategyDTO);
      }

      Long currenyPairID = strategyGenerationParamsDTO.getCurrencyPair().getId();

      CandleChartDTO candleChartDTO = candleChartService.findByCurrencyPairId(currenyPairID)
          .getData();

      ResponsePayload<CandleDTO> lastCandleByChartId = candleService.findLastCandleByChartId(
          candleChartDTO.getId());

      Date endingDate = lastCandleByChartId.getData().getOpenTime();
      StrategyTimePeriodEnum timePeriod = strategyGenerationParamsDTO.getTimePeriod();

      Date startingDate = findStartingDate(endingDate, timePeriod);

      // create simulation for all strategies
      List<SimulationDTO> simulationDTOList = new ArrayList<>();
      getSimulaitons(randomStrategies, endingDate, startingDate, simulationDTOList);

      ResponsePayload<List<SimulationDTO>> listResponsePayload = simulationService.saveAll(
          simulationDTOList);
      List<SimulationDTO> executedSimulations;
      List<BigDecimal> lastThreeBestProfitLosses = new ArrayList<>();
      int generationCount = 0;
      int maxGenerations = 100; // maximum number of generations
      BigDecimal improvementThreshold = new BigDecimal(
          "0.01"); // minimum relative improvement to continue

      loop:
      while (generationCount < maxGenerations) {
        executedSimulations = new ArrayList<>();
        List<Future<SimulationDTO>> futures = new ArrayList<>();
        for (SimulationDTO simulationDTO : listResponsePayload.getData()) {
          Future<SimulationDTO> future = Executors.newSingleThreadExecutor()
              .submit((Callable<SimulationDTO>) () -> simulationService
                  .execute(simulationDTO.getId(), candleChartDTO.getId()).getData());
          futures.add(future);

          if (futures.size() == 5) {
            for (Future<SimulationDTO> future1 : futures) {
              try {
                executedSimulations.add(future1.get());
              } catch (Exception e) {
                e.printStackTrace();
              }
            }
            futures.clear();
          }

        }
        for (Future<SimulationDTO> future : futures) {
          try {
            executedSimulations.add(future.get());
          } catch (Exception e) {
            e.printStackTrace();
          }
        }
        executedSimulations.sort((o1, o2) -> o2.getProfitLoss().compareTo(o1.getProfitLoss()));

        BigDecimal bestProfitLoss = executedSimulations.get(0).getProfitLoss();

        if (lastThreeBestProfitLosses.size() > 10) {
          // sort last three best profit losses and remove the lowest one
          lastThreeBestProfitLosses.sort(BigDecimal::compareTo);
          lastThreeBestProfitLosses.remove(0);
          BigDecimal lowestProfitLoss = lastThreeBestProfitLosses.stream()
              .reduce(BigDecimal.valueOf(Long.MAX_VALUE), BigDecimal::min);

          if ((bestProfitLoss.subtract(lowestProfitLoss)).divide(bestProfitLoss,
                  MathContext.DECIMAL32)
              .compareTo(improvementThreshold) < 0) {
            break loop; // stop if there is no significant improvement
          }
        }
        lastThreeBestProfitLosses.add(bestProfitLoss);

        // select the top 5 strategies
        List<StrategyDTO> bestStrategies = executedSimulations.subList(0, 5)
            .stream()
            .map(SimulationDTO::getStrategy)
            .toList();

        // create a new generation by mutating the best strategies
        randomStrategies = new ArrayList<>();
        for (StrategyDTO strategy : bestStrategies) {
          for (int i = 0; i < 4; i++) {
            StrategyDTO mutatedStrategy = mutateStrategy(strategy);
            randomStrategies.add(mutatedStrategy);
          }
        }
        for (StrategyDTO strategyDTO : randomStrategies) {
          strategyService.generateOrderPairTemplates(strategyDTO);
        }

        // create simulation for all strategies
        simulationDTOList = new ArrayList<>();
        getSimulaitons(randomStrategies, endingDate, startingDate, simulationDTOList);
        listResponsePayload = simulationService.saveAll(simulationDTOList);

        generationCount++;
      }

      strategyGenerationParamsDTO.setStatus(SimulationStatusEnum.COMPLETED);
      save(strategyGenerationParamsDTO);
    });

    return new ResponsePayload<>(strategyGenerationParamsDTO);
  }

  private void getSimulaitons(List<StrategyDTO> randomStrategies, Date endingDate,
      Date startingDate, List<SimulationDTO> simulationDTOList) {
    for (StrategyDTO strategyDTO : randomStrategies) {
      SimulationDTO simulationDTO = new SimulationDTO();
      simulationDTO.setStrategy(strategyDTO);
      simulationDTO.setStatus(SimulationStatusEnum.NEW);
      simulationDTO.setStartingDate(startingDate);
      simulationDTO.setEndingDate(endingDate);
      simulationDTO.setLastExecutedAt(new Date(0));
      simulationDTOList.add(simulationDTO);
    }
  }

  private StrategyDTO mutateStrategy(StrategyDTO strategy) {

    StrategyDTO mutatedStrategy = new StrategyDTO();
    mutatedStrategy.setUser(strategy.getUser());
    mutatedStrategy.setStrategyGenerationParams(strategy.getStrategyGenerationParams());

    BigDecimal randomMinPrice = strategy.getMinPrice().multiply(
        BigDecimal.valueOf(1 + randomMutationRate()));
    if (randomMinPrice.compareTo(strategy.getStrategyGenerationParams().getMinPrice()) < 0) {
      randomMinPrice = strategy.getStrategyGenerationParams().getMinPrice();
    }
    mutatedStrategy.setMinPrice(randomMinPrice);

    BigDecimal randomMaxPrice = strategy.getMaxPrice().multiply(
        BigDecimal.valueOf(1 + randomMutationRate()));
    if (randomMaxPrice.compareTo(strategy.getStrategyGenerationParams().getMaxPrice()) > 0) {
      randomMaxPrice = strategy.getStrategyGenerationParams().getMaxPrice();
    }
    mutatedStrategy.setMaxPrice(randomMaxPrice);

    if (mutatedStrategy.getMinPrice().compareTo(mutatedStrategy.getMaxPrice()) > 0) {
      BigDecimal temp = mutatedStrategy.getMinPrice();
      mutatedStrategy.setMinPrice(mutatedStrategy.getMaxPrice());
      mutatedStrategy.setMaxPrice(temp);
    }

    long randomGrids = strategy.getGrids() + (long) (Math.random() * 5 - 2);

    long maxGridsFromSpread = (long) (Math.log(mutatedStrategy.getMaxPrice()
        .divide(mutatedStrategy.getMinPrice(), MathContext.DECIMAL32).doubleValue()) /
        Math.log(1.001));

    long maxGridsFromInvestment = mutatedStrategy.getStrategyGenerationParams().getInvestment()
        .divide(BigDecimal.valueOf(5), MathContext.DECIMAL32).longValue();

    randomGrids = Math.min(Math.min(maxGridsFromSpread, maxGridsFromInvestment), randomGrids);

    if (randomGrids < strategy.getStrategyGenerationParams().getMinGrids()) {
      randomGrids = strategy.getStrategyGenerationParams().getMinGrids();
    }
    if (randomGrids > strategy.getStrategyGenerationParams().getMaxGrids()) {
      randomGrids = strategy.getStrategyGenerationParams().getMaxGrids();
    }
    mutatedStrategy.setGrids(randomGrids);

    mutatedStrategy.setInvestment(strategy.getInvestment());

    return strategyService.save(mutatedStrategy).getData();
  }

  private double randomMutationRate() {
    return Math.random() * 0.1 - 0.05;
  }

  private Date findStartingDate(Date endingDate, StrategyTimePeriodEnum timePeriod) {
    return switch (timePeriod) {
      case ONE_WEEK -> new Date(endingDate.getTime() - 604800000);
      case ONE_MONTH -> new Date(endingDate.getTime() - 2592000000L);
      case SIX_MONTHS -> new Date(endingDate.getTime() - 15552000000L);
      case ONE_YEAR -> new Date(endingDate.getTime() - 31104000000L);
      default -> new Date(0);
    };
  }

  @Override
  public ResponsePayload<List<StrategyGenerationParamsDTO>> getStrategiesByDateRange(Date startDate,
      Date endDate) {
    List<StrategyGenerationParams> strategies = strategyGenerationParamsRepository.findByCreatedAtBetween(
        startDate, endDate);
    List<StrategyGenerationParamsDTO> strategyDTOs = strategies.stream()
        .map(strategyGenerationParamsMapper::convertToDTO)
        .collect(Collectors.toList());
    return new ResponsePayload<>("", true, strategyDTOs);
  }

  @Override
  public ResponsePayload<Page<StrategyGenerationParamsDTO>> findMyStrategies(UserDetails user,
      Pageable pageable) {

    String username = user.getUsername();
    ResponsePayload<UserDTO> byEmail = userService.findByEmail(username);
    Page<StrategyGenerationParams> strategies = strategyGenerationParamsRepository
        .findByUserId(byEmail.getData().getId(), pageable);
    Page<StrategyGenerationParamsDTO> strategyDTOs = strategies.map(
        strategyGenerationParamsMapper::convertToDTO);
    return new ResponsePayload<>(strategyDTOs);
  }

  @Override
  public ResponsePayload<Boolean> delete(Long id) {
    strategyGenerationParamsRepository.deleteById(id);
    return new ResponsePayload<>("", true, true);
  }
}


