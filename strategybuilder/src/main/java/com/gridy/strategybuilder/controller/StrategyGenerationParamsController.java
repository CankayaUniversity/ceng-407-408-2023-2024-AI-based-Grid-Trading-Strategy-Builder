package com.gridy.strategybuilder.controller;

import com.gridy.strategybuilder.dto.StrategyGenerationParamsDTO;
import com.gridy.strategybuilder.dto.UserDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.service.StrategyGenerationParamsService;
import com.gridy.strategybuilder.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/strategyGenerationParams")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class StrategyGenerationParamsController {

  private final StrategyGenerationParamsService strategyGenerationParamsService;

  @PostMapping("/save")
  public ResponsePayload<StrategyGenerationParamsDTO> save(@RequestBody StrategyGenerationParamsDTO strategyGenerationParamsDTO) {
    return strategyGenerationParamsService.save(strategyGenerationParamsDTO);
  }
}

