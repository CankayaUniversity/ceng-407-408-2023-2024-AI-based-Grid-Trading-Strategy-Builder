package com.gridy.strategybuilder.controller;

import com.gridy.strategybuilder.dto.CandleDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.service.CandleService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/candle")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CandleController {

  private final CandleService candleService;

  @PostMapping("/save")
  public ResponsePayload<CandleDTO> save(@RequestBody CandleDTO candleDTO) {
    return candleService.save(candleDTO);
  }

  @GetMapping("/findLastByChartId")
  public ResponsePayload<CandleDTO> findLastByChartId(@RequestParam Long chartId){
    return candleService.findLastCandleByChartId(chartId);
  }
}

