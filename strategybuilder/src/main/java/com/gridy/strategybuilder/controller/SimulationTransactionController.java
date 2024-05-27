package com.gridy.strategybuilder.controller;

import com.gridy.strategybuilder.dto.SimulationOrderDTO;
import com.gridy.strategybuilder.dto.SimulationTransactionDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.service.SimulationOrderService;
import com.gridy.strategybuilder.service.SimulationTransactionService;
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
@RequestMapping("api/v1/simulationTransaction")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SimulationTransactionController {

  private final SimulationTransactionService simulationTransactionService;

  @PostMapping("/save")
  public ResponsePayload<SimulationTransactionDTO> save(
      @RequestBody SimulationTransactionDTO simulationTransactionDTO) {
    return simulationTransactionService.save(simulationTransactionDTO);
  }

  @PostMapping("/saveAll")
  public ResponsePayload<List<SimulationTransactionDTO>> saveAll(
      @RequestBody List<SimulationTransactionDTO> simulationTransactionDTOS) {
    return simulationTransactionService.saveAll(simulationTransactionDTOS);
  }
}

