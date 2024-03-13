package com.gridy.strategybuilder.controller;

import com.gridy.strategybuilder.dto.CurrencyDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.service.CurrencyService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/currency")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CurrencyController {

  private final CurrencyService currencyService;

  @PostMapping("/save")
  public ResponsePayload<CurrencyDTO> save(@RequestBody CurrencyDTO currencyDTO) {
    return currencyService.save(currencyDTO);
  }
}

