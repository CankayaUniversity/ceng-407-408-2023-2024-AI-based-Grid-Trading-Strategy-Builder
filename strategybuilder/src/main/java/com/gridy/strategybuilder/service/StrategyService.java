package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.OrderPairTemplateDTO;
import com.gridy.strategybuilder.dto.StrategyDTO;
import com.gridy.strategybuilder.dto.StrategyGenerationParamsDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.entity.Strategy;
import java.util.List;

public interface StrategyService {

  ResponsePayload<StrategyDTO> save(StrategyDTO strategyDTO);

  ResponsePayload<List<OrderPairTemplateDTO>> generateOrderPairTemplates(StrategyDTO strategyDTO);

  ResponsePayload<StrategyDTO> findBestStrategy(StrategyGenerationParamsDTO strategyGenerationParamsDTO);
}
