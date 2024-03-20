package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.CandleChartDTO;
import com.gridy.strategybuilder.dto.CandleDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import java.util.List;
import java.util.UUID;

public interface CandleService {

  ResponsePayload<CandleDTO> save(CandleDTO candleDTO);

  ResponsePayload<CandleDTO> findById(Long id);

  ResponsePayload<CandleDTO> convertFromApiList(List<Object> apiList, CandleChartDTO candleChartDTO);

  ResponsePayload<CandleDTO> findLastCandleByChartId(Long candleChartId);
}
