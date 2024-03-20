package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.StrategyGenerationParamsDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;

public interface StrategyGenerationParamsService {

  ResponsePayload<StrategyGenerationParamsDTO> save(
      StrategyGenerationParamsDTO strategyGenerationParamsDTO);
}
