package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.CurrencyDTO;
import com.gridy.strategybuilder.dto.UserDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;

public interface CurrencyService {

  ResponsePayload<CurrencyDTO> save(CurrencyDTO currencyDTO);
}
