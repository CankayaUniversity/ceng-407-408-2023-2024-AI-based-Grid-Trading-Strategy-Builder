package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.StrategyDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.entity.Strategy;

public interface StrategyService {

  ResponsePayload<StrategyDTO> save(StrategyDTO strategyDTO);
}
