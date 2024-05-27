package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.CandleChartDTO;
import com.gridy.strategybuilder.dto.CandleDTO;
import com.gridy.strategybuilder.dto.CurrencyDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.dto.filter.CandleFilter;
import com.gridy.strategybuilder.dto.filter.CurrencyFilter;
import com.gridy.strategybuilder.entity.Candle;
import com.gridy.strategybuilder.enumeration.ResponseMessageEnum;
import com.gridy.strategybuilder.mapper.CandleMapper;
import com.gridy.strategybuilder.repository.CandleRepository;
import com.gridy.strategybuilder.service.CandleService;
import com.gridy.strategybuilder.specification.CandleSpec;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CandleServiceImpl implements CandleService {

  private final CandleRepository candleRepository;
  private final CandleMapper candleMapper;


  @Override
  public ResponsePayload<CandleDTO> save(CandleDTO candleDTO) {
    return new ResponsePayload<>(candleMapper.convertToDTO(
        candleRepository.save(candleMapper.convertToEntity(candleDTO))));
  }

  @Override
  public ResponsePayload<CandleDTO> findById(Long id) {
    Optional<Candle> byId = candleRepository.findById(id);
    return byId.map(
            candleChart -> new ResponsePayload<>(candleMapper.convertToDTO(candleChart)))
        .orElseGet(
            () -> new ResponsePayload<>(ResponseMessageEnum.RECORD_DOES_NOT_EXISTS.getMessage()));
  }

  @Override
  public ResponsePayload<CandleDTO> convertFromApiList(List<Object> apiList,
      CandleChartDTO candleChartDTO) {
    try {
      return new ResponsePayload<>(candleMapper.fromAPIList(apiList, candleChartDTO));
    } catch (Exception e) {
      System.out.println(e.getMessage());
      e.printStackTrace();

      return new ResponsePayload<>(ResponseMessageEnum.UNEXPECTED_ERROR.getMessage());
    }
  }

  @Override
  public ResponsePayload<CandleDTO> findLastCandleByChartId(Long candleChartId) {
    Optional<Candle> candleOptional =
        candleRepository.findTopByCandleChart_IdOrderByOpenTimeDesc(candleChartId);
    return candleOptional.map(
        candle -> new ResponsePayload<>(candleMapper.convertToDTO(
            candle
        ))).orElseGet(
        () -> new ResponsePayload<>(ResponseMessageEnum.RECORD_DOES_NOT_EXISTS.getMessage()));
  }

  @Override
  public ResponsePayload<Page<CandleDTO>> filter(CandleFilter candleFilter, Pageable pageable) {
    Specification<Candle> byFilter = CandleSpec.findByFilter(candleFilter);

    return new ResponsePayload<>(
        candleRepository.findAll(byFilter, pageable).map(candleMapper::convertToDTO));
  }
}
