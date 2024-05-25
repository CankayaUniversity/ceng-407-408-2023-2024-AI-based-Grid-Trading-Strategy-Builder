package com.gridy.strategybuilder.controller;

import com.gridy.strategybuilder.dto.SimulationDTO;
import com.gridy.strategybuilder.dto.SimulationOrderDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.service.SimulationOrderService;
import com.gridy.strategybuilder.service.SimulationService;
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
@RequestMapping("api/v1/simulationOrder")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SimulationOrderController {

  private final SimulationOrderService simulationOrderService;

  @PostMapping("/save")
  public ResponsePayload<SimulationOrderDTO> save(@RequestBody SimulationOrderDTO simulationOrderDTO) {
    return simulationOrderService.save(simulationOrderDTO);
  }

  @PostMapping("/saveAll")
  public ResponsePayload<SimulationOrderDTO> saveAll(@RequestBody SimulationOrderDTO simulationOrderDTO) {
    return simulationOrderService.save(simulationOrderDTO);
  }

  @GetMapping("/findAllBySimulationId")
  public ResponsePayload<List<SimulationOrderDTO>> findAllBySimulationId(@RequestParam Long simulationId) {
    return simulationOrderService.findAllBySimulationId(simulationId);
  }

  @GetMapping("/findAllFilledBySimulationId")
  public ResponsePayload<List<SimulationOrderDTO>> findAllFilledBySimulationId(@RequestParam Long simulationId) {
    return simulationOrderService.findAllFilledBySimulationId(simulationId);
  }

}

