package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.SimulationOrderDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import java.util.List;

public interface SimulationOrderService {

  ResponsePayload<SimulationOrderDTO> save(SimulationOrderDTO simulationOrderDTO);

  ResponsePayload<List<SimulationOrderDTO>> saveAll(List<SimulationOrderDTO> simulationOrderDTOList);

  ResponsePayload<List<SimulationOrderDTO>> findAllBySimulationId(Long simulationId);
}
