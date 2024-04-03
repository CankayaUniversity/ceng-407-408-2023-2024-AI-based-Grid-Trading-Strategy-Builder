package com.gridy.strategybuilder.controller;

import com.gridy.strategybuilder.dto.CurrencyDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.dto.filter.CurrencyFilter;
import com.gridy.strategybuilder.service.CurrencyService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

  @PutMapping("/update")
  public ResponsePayload<CurrencyDTO> update(@RequestBody CurrencyDTO currencyDTO) {
    return currencyService.update(currencyDTO);
  }

  @DeleteMapping("/delete")
  public ResponsePayload<CurrencyDTO> delete(@RequestParam Long id) {
    return currencyService.delete(id);
  }

  @GetMapping("/findById")
  public ResponsePayload<CurrencyDTO> findById(@RequestParam Long id) {
    return currencyService.findById(id);
  }

  @GetMapping("/findByName")
  public ResponsePayload<CurrencyDTO> findByName(@RequestParam String name) {
    return currencyService.findByName(name);
  }

  @GetMapping("/findBySymbol")
  public ResponsePayload<CurrencyDTO> findBySymbol(@RequestParam String symbol) {
    return currencyService.findBySymbol(symbol);
  }

  @PostMapping("/filter")
  public ResponsePayload<List<CurrencyDTO>> filter(@RequestBody CurrencyFilter currencyFilter) {
    return currencyService.filter(currencyFilter);
  }

}

