package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.StrategyGenerationParamsDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import java.util.Date;
import java.util.List;

public interface StrategyGenerationParamsService {

  ResponsePayload<StrategyGenerationParamsDTO> save(
      StrategyGenerationParamsDTO strategyGenerationParamsDTO);

  ResponsePayload<StrategyGenerationParamsDTO> findById(Long id);

  ResponsePayload<StrategyGenerationParamsDTO> findBestStrategy(Long id);

  ResponsePayload<List<StrategyGenerationParamsDTO>> getStrategiesByDateRange(Date startDate, Date endDate);
}
