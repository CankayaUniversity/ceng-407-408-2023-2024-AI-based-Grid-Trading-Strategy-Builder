package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.OrderTemplateDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import java.util.List;

public interface OrderTemplateService {
  ResponsePayload<OrderTemplateDTO> save(OrderTemplateDTO orderTemplateDTO);

  List<OrderTemplateDTO> saveAll(List<OrderTemplateDTO> orderTemplateDTOList);
}
