package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.OrderPairTemplateDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.mapper.OrderPairTemplateMapper;
import com.gridy.strategybuilder.repository.OrderPairTemplateRepository;
import com.gridy.strategybuilder.service.OrderPairTemplateService;
import java.util.List;
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
}
