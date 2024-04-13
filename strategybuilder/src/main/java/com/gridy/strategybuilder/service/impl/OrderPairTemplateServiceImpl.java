package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.OrderPairTemplateDTO;
import com.gridy.strategybuilder.dto.OrderTemplateDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.enumeration.ResponseMessageEnum;
import com.gridy.strategybuilder.mapper.OrderPairTemplateMapper;
import com.gridy.strategybuilder.repository.OrderPairTemplateRepository;
import com.gridy.strategybuilder.service.OrderPairTemplateService;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class OrderPairTemplateServiceImpl implements OrderPairTemplateService {

  private final OrderPairTemplateMapper orderPairTemplateMapper;
  private final OrderPairTemplateRepository orderPairTemplateRepository;

  @Override
  public ResponsePayload<OrderPairTemplateDTO> save(
      OrderPairTemplateDTO orderPairTemplateDTO) {

    OrderPairTemplateDTO savedDTO = orderPairTemplateMapper.convertToDTO(
        orderPairTemplateRepository.save(
            orderPairTemplateMapper.convertToEntity(orderPairTemplateDTO)));
    return new ResponsePayload<>(savedDTO);
  }

  @Override
  public ResponsePayload<List<OrderPairTemplateDTO>> saveAll(
      List<OrderPairTemplateDTO> orderPairTemplateDTOList) {
    return new ResponsePayload<>(orderPairTemplateRepository.saveAll(
            orderPairTemplateDTOList.stream().map(orderPairTemplateMapper::convertToEntity).toList())
        .stream().map(orderPairTemplateMapper::convertToDTO).toList());
  }

  @Override
  public ResponsePayload<List<OrderPairTemplateDTO>> findAllByStrategyId(Long strategyId) {
    return new ResponsePayload<>(orderPairTemplateRepository.findAllByStrategyId(strategyId)
        .stream().map(orderPairTemplateMapper::convertToDTO).toList());
  }

  @Override
  public ResponsePayload<OrderTemplateDTO> findCounterSellOrderTemplateByBuyOrderTemplateId(
      Long orderTemplateId) {
    Optional<OrderTemplateDTO> orderTemplateDTO = orderPairTemplateRepository.findByBuyOrderTemplateId(
            orderTemplateId)
        .map(orderPairTemplateMapper::convertToDTO)
        .map(OrderPairTemplateDTO::getSellOrderTemplate);
    return orderTemplateDTO.map(ResponsePayload::new)
        .orElseGet(
            () -> new ResponsePayload<>(ResponseMessageEnum.RECORD_DOES_NOT_EXISTS.getMessage()));
  }

  @Override
  public ResponsePayload<OrderTemplateDTO> findCounterBuyOrderTemplateBySellOrderTemplateId(
      Long orderTemplateId) {
    Optional<OrderTemplateDTO> orderTemplateDTO = orderPairTemplateRepository.findBySellOrderTemplateId(
            orderTemplateId)
        .map(orderPairTemplateMapper::convertToDTO)
        .map(OrderPairTemplateDTO::getBuyOrderTemplate);
    return orderTemplateDTO.map(ResponsePayload::new)
        .orElseGet(
            () -> new ResponsePayload<>(ResponseMessageEnum.RECORD_DOES_NOT_EXISTS.getMessage()));
  }
}
