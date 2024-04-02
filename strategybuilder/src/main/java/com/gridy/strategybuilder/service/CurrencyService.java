package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.CurrencyDTO;
import com.gridy.strategybuilder.dto.UserDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.dto.filter.CurrencyFilter;
import java.util.List;

public interface CurrencyService {

  ResponsePayload<CurrencyDTO> save(CurrencyDTO currencyDTO);

  ResponsePayload<CurrencyDTO> findById(Long id);

  ResponsePayload<CurrencyDTO> findByName(String name);

  ResponsePayload<CurrencyDTO> findBySymbol(String symbol);

  ResponsePayload<CurrencyDTO> update(CurrencyDTO currencyDTO);

  ResponsePayload<CurrencyDTO> delete(Long id);

  ResponsePayload<List<CurrencyDTO>> filter(CurrencyFilter currencyDTO);
}
