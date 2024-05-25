package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.CandleChartDTO;
import com.gridy.strategybuilder.dto.CandleDTO;
import com.gridy.strategybuilder.dto.SimulationDTO;
import com.gridy.strategybuilder.dto.StrategyDTO;
import com.gridy.strategybuilder.dto.StrategyGenerationParamsDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.enumeration.SimulationStatusEnum;
import com.gridy.strategybuilder.enumeration.StrategyTimePeriodEnum;
import com.gridy.strategybuilder.enumeration.ResponseMessageEnum;
import com.gridy.strategybuilder.entity.StrategyGenerationParams;
import com.gridy.strategybuilder.mapper.StrategyGenerationParamsMapper;
import com.gridy.strategybuilder.repository.StrategyGenerationParamsRepository;
import com.gridy.strategybuilder.service.CandleChartService;
import com.gridy.strategybuilder.service.CandleService;
import com.gridy.strategybuilder.service.SimulationService;
import com.gridy.strategybuilder.service.StrategyGenerationParamsService;
import com.gridy.strategybuilder.service.StrategyService;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class StrategyGenerationParamsServiceImpl implements StrategyGenerationParamsService {

  private final StrategyGenerationParamsRepository strategyGenerationParamsRepository;
  private final StrategyGenerationParamsMapper strategyGenerationParamsMapper;
  private final StrategyService strategyService;
  private final CandleChartService candleChartService;
  private final CandleService candleService;
  private final SimulationService simulationService;

  @Override
  public ResponsePayload<StrategyGenerationParamsDTO> save(StrategyGenerationParamsDTO strategyGenerationParamsDTO) {
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
    for (StrategyDTO strategyDTO : randomStrategies) {
      SimulationDTO simulationDTO = new SimulationDTO();
      simulationDTO.setStrategy(strategyDTO);
      simulationDTO.setStatus(SimulationStatusEnum.NEW);
      simulationDTO.setStartingDate(startingDate);
      simulationDTO.setEndingDate(endingDate);
      simulationDTO.setLastExecutedAt(new Date(0));
      simulationDTOList.add(simulationDTO);
    }


    ResponsePayload<List<SimulationDTO>> listResponsePayload = simulationService.saveAll(
        simulationDTOList);
    List<SimulationDTO> executedSimulations = new ArrayList<>();

    List<Future<SimulationDTO>> futures = new ArrayList<>();
    for (SimulationDTO simulationDTO : listResponsePayload.getData()) {
      Future<SimulationDTO> future = Executors.newSingleThreadExecutor()
          .submit((Callable<SimulationDTO>) () -> simulationService
              .execute(simulationDTO.getId(), candleChartDTO.getId()).getData());
      futures.add(future);

      if(futures.size() == 5) {
        for(Future<SimulationDTO> future1 : futures) {
          try {
            executedSimulations.add(future1.get());
          } catch (Exception e) {
            e.printStackTrace();
          }
        }
        futures.clear();
      }

    }
    for(Future<SimulationDTO> future : futures) {
      try {
        executedSimulations.add(future.get());
      } catch (Exception e) {
        e.printStackTrace();
      }
    }
    executedSimulations.sort((o1, o2) -> o2.getProfitLoss().compareTo(o1.getProfitLoss()));

    return new ResponsePayload<>(strategyGenerationParamsDTO);
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
  public ResponsePayload<List<StrategyGenerationParamsDTO>> getStrategiesByDateRange(Date startDate, Date endDate) {
    List<StrategyGenerationParams> strategies = strategyGenerationParamsRepository.findByCreatedAtBetween(startDate, endDate);
    List<StrategyGenerationParamsDTO> strategyDTOs = strategies.stream()
            .map(strategyGenerationParamsMapper::convertToDTO)
            .collect(Collectors.toList());
    return new ResponsePayload<>("", true, strategyDTOs);
  }
}


