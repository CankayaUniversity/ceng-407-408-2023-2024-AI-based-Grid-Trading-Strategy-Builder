package com.gridy.strategybuilder.controller;

import com.gridy.strategybuilder.dto.OrderPairTemplateDTO;
import com.gridy.strategybuilder.dto.SimulationDTO;
import com.gridy.strategybuilder.dto.StrategyDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.service.SimulationService;
import com.gridy.strategybuilder.service.StrategyService;
import java.math.BigDecimal;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/simulation")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SimulationController {

  private final SimulationService simulationService;

  @PostMapping("/save")
  public ResponsePayload<SimulationDTO> save(@RequestBody SimulationDTO simulationDTO) {
    return simulationService.save(simulationDTO);
  }

  @GetMapping("/findById")
  public ResponsePayload<SimulationDTO> findById(@RequestParam Long id) {
    return simulationService.findById(id);
  }

  @PostMapping("/execute")
  public ResponsePayload<SimulationDTO> execute(@RequestParam Long simulationId, @RequestParam Long candleChartId) {
    return simulationService.execute(simulationId, candleChartId);
  }

  @GetMapping("/getProfit")
  public ResponsePayload<BigDecimal> getProfit(@RequestParam Long simulationId) {
    return simulationService.getProfit(simulationId);
  }

}

