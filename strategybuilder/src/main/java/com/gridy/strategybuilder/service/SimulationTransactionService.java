package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.SimulationTransactionDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import java.util.List;

public interface SimulationTransactionService {

  ResponsePayload<SimulationTransactionDTO> save(SimulationTransactionDTO simulationTransactionDTO);

  ResponsePayload<List<SimulationTransactionDTO>> saveAll(List<SimulationTransactionDTO> simulationTransactionDTOS);
}
