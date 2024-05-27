package com.gridy.strategybuilder.controller;

import com.gridy.strategybuilder.dto.OrderTemplateDTO;
import com.gridy.strategybuilder.dto.StrategyDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.service.OrderTemplateService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/orderTemplate")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class OrderTemplateController {

  private final OrderTemplateService orderTemplateService;

  @PostMapping("/save")
  public ResponsePayload<OrderTemplateDTO> save(@RequestBody OrderTemplateDTO orderTemplateDTO) {
    return orderTemplateService.save(orderTemplateDTO);
  }
}

