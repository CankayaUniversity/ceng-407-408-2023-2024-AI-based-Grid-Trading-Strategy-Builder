package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.OrderPairTemplateDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;

public interface OrderPairTemplateService {

  ResponsePayload<OrderPairTemplateDTO> save(OrderPairTemplateDTO orderPairTemplateDTO);
}
