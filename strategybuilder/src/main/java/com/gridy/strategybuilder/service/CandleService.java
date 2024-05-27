package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.CandleChartDTO;
import com.gridy.strategybuilder.dto.CandleDTO;
import com.gridy.strategybuilder.dto.CurrencyDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.dto.filter.CandleFilter;
import com.gridy.strategybuilder.dto.filter.CurrencyFilter;
import java.util.List;
import java.util.UUID;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CandleService {

  ResponsePayload<CandleDTO> save(CandleDTO candleDTO);

  ResponsePayload<CandleDTO> findById(Long id);

  ResponsePayload<CandleDTO> convertFromApiList(List<Object> apiList, CandleChartDTO candleChartDTO);

  ResponsePayload<CandleDTO> findLastCandleByChartId(Long candleChartId);

  ResponsePayload<Page<CandleDTO>> filter(CandleFilter candleFilter, Pageable pageable);
}
