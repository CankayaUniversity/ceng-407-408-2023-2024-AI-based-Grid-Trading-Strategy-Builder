package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.SimulationOrderDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import java.math.BigDecimal;
import java.util.List;

public interface SimulationOrderService {

  ResponsePayload<SimulationOrderDTO> save(SimulationOrderDTO simulationOrderDTO);

  ResponsePayload<List<SimulationOrderDTO>> saveAll(
      List<SimulationOrderDTO> simulationOrderDTOList);

  ResponsePayload<List<SimulationOrderDTO>> findAllBySimulationId(Long simulationId);

  ResponsePayload<List<SimulationOrderDTO>> findBuyOrdersBySimulationIdAndPriceGreaterThan(Long simulationId,
      BigDecimal price);
}
