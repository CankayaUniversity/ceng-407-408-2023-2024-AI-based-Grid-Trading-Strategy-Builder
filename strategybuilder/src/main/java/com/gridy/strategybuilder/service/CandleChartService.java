package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.CandleChartDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import java.awt.color.ICC_Profile;
import java.util.UUID;

public interface CandleChartService {

  ResponsePayload<CandleChartDTO> save(CandleChartDTO candleChartDTO);

  ResponsePayload<CandleChartDTO> findById(Long id);

  ResponsePayload<CandleChartDTO> fetchCandles(CandleChartDTO candleChartDTO);

  ResponsePayload<CandleChartDTO> findByCurrencyPairId(Long currenyPairID);
}
