package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.CandleChartDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;

public interface CandleChartService {

  ResponsePayload<CandleChartDTO> save(CandleChartDTO candleChartDTO);
}
