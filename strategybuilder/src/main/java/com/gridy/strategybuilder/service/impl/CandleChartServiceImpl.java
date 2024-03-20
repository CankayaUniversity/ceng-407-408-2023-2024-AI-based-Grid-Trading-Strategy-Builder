package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.CandleChartDTO;
import com.gridy.strategybuilder.dto.CandleDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.entity.CandleChart;
import com.gridy.strategybuilder.enumeration.CandleChartTimeIntervalEnum;
import com.gridy.strategybuilder.enumeration.ResponseMessageEnum;
import com.gridy.strategybuilder.mapper.CandleChartMapper;
import com.gridy.strategybuilder.mapper.CandleMapper;
import com.gridy.strategybuilder.repository.CandleChartRepository;
import com.gridy.strategybuilder.service.CandleChartService;
import com.gridy.strategybuilder.service.CandleService;
import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicReference;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CandleChartServiceImpl implements CandleChartService {

  private final CandleChartRepository candleChartRepository;
  private final CandleChartMapper candleChartMapper;
  private final CandleService candleService;

  @Override
  public ResponsePayload<CandleChartDTO> save(CandleChartDTO candleChartDTO) {
    return new ResponsePayload<>(candleChartMapper.convertToDTO(
        candleChartRepository.save(candleChartMapper.convertToEntity(candleChartDTO))));
  }

  @Override
  public ResponsePayload<CandleChartDTO> findById(Long id) {
    Optional<CandleChart> byId = candleChartRepository.findById(id);
    return byId.map(
            candleChart -> new ResponsePayload<>(candleChartMapper.convertToDTO(candleChart)))
        .orElseGet(
            () -> new ResponsePayload<>(ResponseMessageEnum.RECORD_DOES_NOT_EXISTS.getMessage()));
  }

  @Override
  public ResponsePayload<CandleChartDTO> fetchCandles(CandleChartDTO candleChartDTO) {
    ResponsePayload<CandleChartDTO> byId = findById(candleChartDTO.getId());
    if (!byId.getSuccess()) {
      return byId;
    }
    CandleChartDTO finalCandleChartDTO = byId.getData();
    Executors.newSingleThreadExecutor().submit(() -> {
      ResponsePayload<CandleDTO> lastCandleByChartId = candleService.findLastCandleByChartId(
          finalCandleChartDTO.getId());
      long startTime =
          lastCandleByChartId.getSuccess() ? lastCandleByChartId.getData().getCloseTime().getTime()
              : 1000L;
      while(true){
        RestTemplate rt = new RestTemplate();
        URI uri = UriComponentsBuilder.fromHttpUrl("https://api.binance.com/api/v3/klines")
            .queryParam("startTime", startTime)
            .queryParam("symbol", finalCandleChartDTO.getCurrencyPair().getSymbol())
            .queryParam("interval", finalCandleChartDTO.getTimeInterval().getName())
            .queryParam("limit", 1000)
            .build().toUri();
        System.out.println(uri);
        ResponseEntity<List<List<Object>>> exchange = rt.exchange(
            new RequestEntity<>(HttpMethod.GET, uri),
            new ParameterizedTypeReference<>() {
            });
        List<List<Object>> response = exchange.getBody();
        if(response == null) break;
        for (List<Object> objects : response) {
          ResponsePayload<CandleDTO> candleDTOResponsePayload = candleService.convertFromApiList(
              objects, candleChartDTO);
          if (!candleDTOResponsePayload.getSuccess()) {
            continue;
          }
          CandleDTO candleDTO = candleDTOResponsePayload.getData();
          startTime = candleDTO.getCloseTime().getTime();
          candleService.save(candleDTO);
        }
      }
    });
    return byId;
  }
}
