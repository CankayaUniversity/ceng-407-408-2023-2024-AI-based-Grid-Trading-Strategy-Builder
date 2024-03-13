package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.CandleChartDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.mapper.CandleChartMapper;
import com.gridy.strategybuilder.repository.CandleChartRepository;
import com.gridy.strategybuilder.service.CandleChartService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CandleChartServiceImpl implements CandleChartService {

  private final CandleChartRepository candleChartRepository;
  private final CandleChartMapper candleChartMapper;

  @Override
  public ResponsePayload<CandleChartDTO> save(CandleChartDTO candleChartDTO) {
    return new ResponsePayload<>(candleChartMapper.convertToDTO(
        candleChartRepository.save(candleChartMapper.convertToEntity(candleChartDTO))));
  }
}
