package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.OrderTemplateDTO;
import com.gridy.strategybuilder.dto.StrategyDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.mapper.OrderTemplateMapper;
import com.gridy.strategybuilder.mapper.StrategyMapper;
import com.gridy.strategybuilder.repository.OrderTemplateRepository;
import com.gridy.strategybuilder.repository.StrategyRepository;
import com.gridy.strategybuilder.service.OrderTemplateService;
import com.gridy.strategybuilder.service.StrategyService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class OrderTemplateServiceImpl implements OrderTemplateService {

  private final OrderTemplateMapper orderTemplateMapper;
  private final OrderTemplateRepository orderTemplateRepository;

  @Override
  public ResponsePayload<OrderTemplateDTO> save(
      OrderTemplateDTO orderTemplateDTO) {

    OrderTemplateDTO savedDTO = orderTemplateMapper.convertToDTO(
        orderTemplateRepository.save(
            orderTemplateMapper.convertToEntity(orderTemplateDTO)));
    return new ResponsePayload<>(savedDTO);
  }

  @Override
  public List<OrderTemplateDTO> saveAll(List<OrderTemplateDTO> orderTemplateDTOList) {
    return orderTemplateRepository.saveAll(
            orderTemplateDTOList.stream().map(orderTemplateMapper::convertToEntity).toList())
        .stream().map(orderTemplateMapper::convertToDTO).toList();
  }
}
