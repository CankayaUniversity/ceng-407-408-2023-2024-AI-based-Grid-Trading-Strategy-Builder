package com.gridy.strategybuilder.controller;

import com.gridy.strategybuilder.dto.CurrencyDTO;
import com.gridy.strategybuilder.dto.CurrencyPairDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.service.CurrencyPairService;
import com.gridy.strategybuilder.service.CurrencyService;
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
@RequestMapping("api/v1/currencyPair")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CurrencyPairController {

  private final CurrencyPairService currencyPairService;

  @PostMapping("/save")
  public ResponsePayload<CurrencyPairDTO> save(@RequestBody CurrencyPairDTO currencyPairDTO) {
    return currencyPairService.save(currencyPairDTO);
  }

  @GetMapping("/getBySymbol")
  public ResponsePayload<CurrencyPairDTO> getBySymbol(@RequestParam String symbol){
    return currencyPairService.getBySymbol(symbol);
  }
}

