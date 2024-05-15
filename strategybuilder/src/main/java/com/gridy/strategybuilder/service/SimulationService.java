package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.CandleChartDTO;
import com.gridy.strategybuilder.dto.SimulationDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import java.math.BigDecimal;

public interface SimulationService {

  ResponsePayload<SimulationDTO> save(SimulationDTO simulationDTO);

  ResponsePayload<SimulationDTO> findById(Long id);

  ResponsePayload<SimulationDTO> execute(Long simulationId, Long candleChartId);

  ResponsePayload<BigDecimal> getProfit(Long simulationId);
}
