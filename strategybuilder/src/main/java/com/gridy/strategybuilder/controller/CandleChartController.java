package com.gridy.strategybuilder.controller;

import com.gridy.strategybuilder.dto.CandleChartDTO;
import com.gridy.strategybuilder.dto.CurrencyPairDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.service.CandleChartService;
import com.gridy.strategybuilder.service.CurrencyPairService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/candleChart")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CandleChartController {

  private final CandleChartService candleChartService;

  @PostMapping("/save")
  public ResponsePayload<CandleChartDTO> save(@RequestBody CandleChartDTO candleChartDTO) {
    return candleChartService.save(candleChartDTO);
  }
}

