package com.gridy.strategybuilder.controller;

import com.gridy.strategybuilder.dto.OrderPairTemplateDTO;
import com.gridy.strategybuilder.dto.StrategyDTO;
import com.gridy.strategybuilder.dto.StrategyGenerationParamsDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.service.StrategyGenerationParamsService;
import com.gridy.strategybuilder.service.StrategyService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/strategy")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class StrategyController {

  private final StrategyService strategyService;

  @PostMapping("/save")
  public ResponsePayload<StrategyDTO> save(@RequestBody StrategyDTO strategyDTO) {
    return strategyService.save(strategyDTO);
  }

  @PostMapping("/generateOrderPairTemplates")
  public ResponsePayload<List<OrderPairTemplateDTO>> generateOrderPairTemplates(
      @RequestBody StrategyDTO strategyDTO) {
    return strategyService.generateOrderPairTemplates(strategyDTO);
  }

  @GetMapping("/findBestStrategy")
  public ResponsePayload<StrategyDTO> findBestStrategy(@RequestBody StrategyGenerationParamsDTO strategyGenerationParamsDTO) {
    return strategyService.findBestStrategy(strategyGenerationParamsDTO);
  }
}

