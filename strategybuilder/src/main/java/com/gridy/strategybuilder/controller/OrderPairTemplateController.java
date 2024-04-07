package com.gridy.strategybuilder.controller;

import com.gridy.strategybuilder.dto.OrderPairTemplateDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.service.OrderPairTemplateService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/orderPairTemplate")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class OrderPairTemplateController {

  private final OrderPairTemplateService orderPairTemplateService;

  @PostMapping("/save")
  public ResponsePayload<OrderPairTemplateDTO> save(
      @RequestBody OrderPairTemplateDTO orderPairTemplateDTO) {
    return orderPairTemplateService.save(orderPairTemplateDTO);
  }
}

