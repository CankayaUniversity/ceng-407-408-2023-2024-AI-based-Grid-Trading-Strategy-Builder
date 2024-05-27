package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.CandleChartDTO;
import com.gridy.strategybuilder.dto.CandleDTO;
import com.gridy.strategybuilder.dto.CurrencyPairDTO;
import com.gridy.strategybuilder.dto.OrderPairTemplateDTO;
import com.gridy.strategybuilder.dto.OrderTemplateDTO;
import com.gridy.strategybuilder.dto.SimulationDTO;
import com.gridy.strategybuilder.dto.SimulationOrderDTO;
import com.gridy.strategybuilder.dto.SimulationTransactionDTO;
import com.gridy.strategybuilder.dto.StrategyDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.dto.filter.CandleFilter;
import com.gridy.strategybuilder.entity.Simulation;
import com.gridy.strategybuilder.entity.SimulationOrder;
import com.gridy.strategybuilder.enumeration.OrderSideEnum;
import com.gridy.strategybuilder.enumeration.OrderStatusEnum;
import com.gridy.strategybuilder.enumeration.ResponseMessageEnum;
import com.gridy.strategybuilder.enumeration.SimulationStatusEnum;
import com.gridy.strategybuilder.mapper.SimulationMapper;
import com.gridy.strategybuilder.repository.SimulationRepository;
import com.gridy.strategybuilder.service.CandleChartService;
import com.gridy.strategybuilder.service.CandleService;
import com.gridy.strategybuilder.service.OrderPairTemplateService;
import com.gridy.strategybuilder.service.SimulationOrderService;
import com.gridy.strategybuilder.service.SimulationService;
import com.gridy.strategybuilder.service.SimulationTransactionService;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.PriorityQueue;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SimulationServiceImpl implements SimulationService {

  private final SimulationRepository simulationRepository;
  private final SimulationMapper simulationMapper;
  private final OrderPairTemplateService orderPairTemplateService;
  private final SimulationOrderService simulationOrderService;
  private final CandleChartService candleChartService;
  private final CandleService candleService;
  private final SimulationTransactionService simulationTransactionService;

  @Override
  public ResponsePayload<SimulationDTO> save(SimulationDTO simulationDTO) {
    SimulationDTO savedDTO = simulationMapper.convertToDTO(
        simulationRepository.save(simulationMapper.convertToEntity(simulationDTO)));
    return new ResponsePayload<>(savedDTO);
  }

  @Override
  public ResponsePayload<List<SimulationDTO>> saveAll(List<SimulationDTO> simulationDTOList) {
    return new ResponsePayload<>(simulationRepository.saveAll(
            simulationDTOList.stream().map(simulationMapper::convertToEntity).toList())
        .stream().map(simulationMapper::convertToDTO).toList());
  }

  @Override
  public ResponsePayload<SimulationDTO> findById(Long id) {
    Optional<Simulation> byId = simulationRepository.findById(id);
    return byId.map(simulation -> new ResponsePayload<>(simulationMapper.convertToDTO(simulation)))
        .orElseGet(
            () -> new ResponsePayload<>(ResponseMessageEnum.RECORD_DOES_NOT_EXISTS.getMessage()));
  }

  @Override
  public ResponsePayload<SimulationDTO> execute(Long simulationId, Long candleChartId) {

    ResponsePayload<SimulationDTO> byId = findById(simulationId);
    if (!byId.getSuccess()) {
      return byId;
    }
    SimulationDTO simulationDTO = byId.getData();
    if (simulationDTO.getStatus().equals(SimulationStatusEnum.NEW)) {
      StrategyDTO strategyDTO = simulationDTO.getStrategy();
      ResponsePayload<List<OrderPairTemplateDTO>> allByStrategyId = orderPairTemplateService.findAllByStrategyId(
          strategyDTO.getId());

      List<OrderPairTemplateDTO> orderPairTemplateDTOList = allByStrategyId.getData();
      if (orderPairTemplateDTOList != null && !orderPairTemplateDTOList.isEmpty()) {
        List<SimulationOrderDTO> simulationOrderDTOList = new ArrayList<>();
        for (OrderPairTemplateDTO orderPairTemplateDTO : orderPairTemplateDTOList) {
          SimulationOrderDTO simulationOrderDTO = SimulationOrderDTO.builder()
              .simulation(simulationDTO)
              .orderTemplate(orderPairTemplateDTO.getBuyOrderTemplate())
              .status(OrderStatusEnum.NEW)
              .side(OrderSideEnum.BUY)
              .build();
          simulationOrderDTOList.add(simulationOrderDTO);
        }
        ResponsePayload<List<SimulationOrderDTO>> saveAll = simulationOrderService.saveAll(
            simulationOrderDTOList);
      }
      simulationDTO.setStatus(SimulationStatusEnum.READY);
      save(simulationDTO);
    } else if (simulationDTO.getStatus().equals(SimulationStatusEnum.COMPLETED)) {
      return new ResponsePayload<>(ResponseMessageEnum.SIMULATION_ALREADY_COMPLETED.getMessage());
    }

    PriorityQueue<SimulationOrderDTO> buyOrders = new PriorityQueue<>(
        (o1, o2) -> o2.getOrderTemplate().getPrice()
            .compareTo(o1.getOrderTemplate().getPrice()));

    PriorityQueue<SimulationOrderDTO> sellOrders = new PriorityQueue<>(
        Comparator.comparing(o -> o.getOrderTemplate().getPrice()));

    List<OrderPairTemplateDTO> allOrderPairTemplates = orderPairTemplateService.findAllByStrategyId(
        simulationDTO.getStrategy().getId()).getData();

    simulationOrderService.findAllBySimulationId(simulationId).getData()
        .forEach(simulationOrderDTO -> {
          if (simulationOrderDTO.getStatus().equals(OrderStatusEnum.FILLED)) {
            return;
          }
          if (simulationOrderDTO.getSide().equals(OrderSideEnum.BUY)) {
            buyOrders.add(simulationOrderDTO);
          } else {
            sellOrders.add(simulationOrderDTO);
          }
        });

    ResponsePayload<CandleChartDTO> candleChartDTOResponsePayload = candleChartService.findById(
        candleChartId);
    if (!candleChartDTOResponsePayload.getSuccess()) {
      return new ResponsePayload<>(candleChartDTOResponsePayload.getMessage());
    }
    List<SimulationOrderDTO> filledOrders = new ArrayList<>();
    List<SimulationTransactionDTO> simulationTransactionDTOList = new ArrayList<>();
    BigDecimal lastPrice = BigDecimal.ZERO;
    while (true) {
      CandleFilter candleFilter = new CandleFilter();
      candleFilter.setCandleChartId(candleChartId);
      candleFilter.setMinOpenTime(
          simulationDTO.getStartingDate().after(simulationDTO.getLastExecutedAt()) ?
              simulationDTO.getStartingDate() : simulationDTO.getLastExecutedAt());
      candleFilter.setMaxCloseTime(simulationDTO.getEndingDate());
      ResponsePayload<Page<CandleDTO>> pageResponsePayload = candleService.filter(candleFilter,
          Pageable.ofSize(10000).withPage(0));

      Page<CandleDTO> data = pageResponsePayload.getData();
      if (data.isEmpty()) {
        break;
      }
      List<CandleDTO> candleDTOList = data.getContent();
      for (CandleDTO candleDTO : candleDTOList) {
        BigDecimal highPrice = candleDTO.getHighPrice();
        BigDecimal lowPrice = candleDTO.getLowPrice();

        while (!buyOrders.isEmpty()
            && buyOrders.peek().getOrderTemplate().getPrice().compareTo(lowPrice) >= 0) {
          SimulationOrderDTO poll = buyOrders.poll();
          OrderTemplateDTO data1 = allOrderPairTemplates.stream()
              .filter(orderPairTemplateDTO -> orderPairTemplateDTO.getBuyOrderTemplate().getId()
                  .equals(poll.getOrderTemplate().getId()))
              .map(OrderPairTemplateDTO::getSellOrderTemplate)
              .findFirst().orElse(null);
          SimulationOrderDTO simulationOrderDTO = SimulationOrderDTO.builder()
              .simulation(simulationDTO).orderTemplate(data1).status(OrderStatusEnum.NEW)
              .side(OrderSideEnum.SELL).build();
          sellOrders.add(simulationOrderDTO);
          poll.setStatus(OrderStatusEnum.FILLED);
          poll.setFilledAt(candleDTO.getOpenTime());
          filledOrders.add(poll);
        }
        while (!sellOrders.isEmpty()
            && sellOrders.peek().getOrderTemplate().getPrice().compareTo(highPrice) <= 0) {
          SimulationOrderDTO poll = sellOrders.poll();
          OrderTemplateDTO data1 = allOrderPairTemplates.stream()
              .filter(orderPairTemplateDTO -> orderPairTemplateDTO.getSellOrderTemplate().getId()
                  .equals(poll.getOrderTemplate().getId()))
              .map(OrderPairTemplateDTO::getBuyOrderTemplate)
              .findFirst().orElse(null);
          SimulationOrderDTO simulationOrderDTO = SimulationOrderDTO.builder()
              .simulation(simulationDTO).orderTemplate(data1).status(OrderStatusEnum.NEW)
              .side(OrderSideEnum.BUY).build();
          buyOrders.add(simulationOrderDTO);
          poll.setStatus(OrderStatusEnum.FILLED);
          poll.setFilledAt(candleDTO.getOpenTime());
          filledOrders.add(poll);
        }
        simulationDTO.setLastExecutedAt(candleDTO.getCloseTime());
      }
      lastPrice = candleDTOList.get(candleDTOList.size() - 1).getClosePrice();
      //save(simulationDTO);
    }
    simulationDTO.setStatus(SimulationStatusEnum.COMPLETED);
    save(simulationDTO);


    ResponsePayload<List<SimulationOrderDTO>> listResponsePayload = simulationOrderService.saveAll(
        filledOrders);
    for (SimulationOrderDTO order : listResponsePayload.getData()) {
      SimulationTransactionDTO simulationTransactionDTO = SimulationTransactionDTO.builder()
          .simulationOrder(order)
          .filledPrice(order.getOrderTemplate().getPrice())
          .filledAmount(order.getOrderTemplate().getQuantity())
          .status(OrderStatusEnum.FILLED)
          .build();
      simulationTransactionDTOList.add(simulationTransactionDTO);
    }
    simulationTransactionService.saveAll(simulationTransactionDTOList);
    simulationOrderService.saveAll(buyOrders.stream().toList());
    simulationOrderService.saveAll(sellOrders.stream().toList());

    BigDecimal profitLoss = getProfit(simulationId, lastPrice).getData()
        .subtract(simulationDTO.getStrategy()
            .getInvestment());
    simulationDTO.setProfitLoss(profitLoss);
    save(simulationDTO);
    return new ResponsePayload<>(simulationDTO);
  }

  @Override
  public ResponsePayload<BigDecimal> getProfit(Long simulationId, BigDecimal lastPrice) {
    ResponsePayload<SimulationDTO> byId = findById(simulationId);
    if (!byId.getSuccess()) {
      return new ResponsePayload<>(byId.getMessage());
    }
    SimulationDTO simulationDTO = byId.getData();
    if (!simulationDTO.getStatus().equals(SimulationStatusEnum.COMPLETED)) {
      return new ResponsePayload<>(ResponseMessageEnum.SIMULATION_NOT_COMPLETED.getMessage());
    }
    BigDecimal investment = simulationDTO.getStrategy().getInvestment();
    BigDecimal quantity = BigDecimal.ZERO;
    List<SimulationTransactionDTO> allBySimulationId = simulationTransactionService.findAllBySimulationId(
        simulationId).getData();
    for (SimulationTransactionDTO simulationTransactionDTO : allBySimulationId) {
      if (simulationTransactionDTO.getSimulationOrder().getSide().equals(OrderSideEnum.BUY)) {
        quantity = quantity.add(simulationTransactionDTO.getFilledAmount());
        investment = investment.subtract(
            simulationTransactionDTO.getFilledAmount()
                .multiply(simulationTransactionDTO.getFilledPrice()));
      } else {
        quantity = quantity.subtract(simulationTransactionDTO.getFilledAmount());
        investment = investment.add(
            simulationTransactionDTO.getFilledAmount()
                .multiply(simulationTransactionDTO.getFilledPrice()));
      }
    }

    return new ResponsePayload<>(investment.add(quantity.multiply(lastPrice)));

  }
}
