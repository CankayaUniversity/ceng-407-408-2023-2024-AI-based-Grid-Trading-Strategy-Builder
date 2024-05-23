package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.StrategyGenerationParamsDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import java.util.Date;
import java.util.List;

public interface StrategyGenerationParamsService {

  ResponsePayload<StrategyGenerationParamsDTO> save(StrategyGenerationParamsDTO strategyGenerationParamsDTO);

  ResponsePayload<List<StrategyGenerationParamsDTO>> getStrategiesByDateRange(Date startDate, Date endDate);
}
