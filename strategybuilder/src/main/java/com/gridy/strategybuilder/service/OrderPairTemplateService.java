package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.OrderPairTemplateDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import java.util.List;

public interface OrderPairTemplateService {

  ResponsePayload<OrderPairTemplateDTO> save(OrderPairTemplateDTO orderPairTemplateDTO);

  ResponsePayload<List<OrderPairTemplateDTO>> saveAll(List<OrderPairTemplateDTO> orderPairTemplateDTOList);

  ResponsePayload<List<OrderPairTemplateDTO>> findAllByStrategyId(Long strategyId);
}
