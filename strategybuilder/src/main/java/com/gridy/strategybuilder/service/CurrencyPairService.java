package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.CurrencyPairDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;

public interface CurrencyPairService {

  ResponsePayload<CurrencyPairDTO> save(CurrencyPairDTO currencyPairDTO);

  ResponsePayload<CurrencyPairDTO> getBySymbol(String symbol);
}
