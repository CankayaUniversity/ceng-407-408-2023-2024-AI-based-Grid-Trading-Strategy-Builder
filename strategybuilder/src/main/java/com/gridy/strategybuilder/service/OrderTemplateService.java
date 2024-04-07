package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.OrderTemplateDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;

public interface OrderTemplateService {
//save
  ResponsePayload<OrderTemplateDTO> save(OrderTemplateDTO orderTemplateDTO);
}
