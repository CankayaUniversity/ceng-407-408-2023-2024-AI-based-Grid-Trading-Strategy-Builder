package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.CurrencyDTO;
import com.gridy.strategybuilder.dto.UserDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.enumeration.ResponseMessageEnum;
import com.gridy.strategybuilder.mapper.CurrencyMapper;
import com.gridy.strategybuilder.mapper.UserMapper;
import com.gridy.strategybuilder.repository.CurrencyRepository;
import com.gridy.strategybuilder.repository.UserRepository;
import com.gridy.strategybuilder.service.CurrencyService;
import com.gridy.strategybuilder.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CurrencyServiceImpl implements CurrencyService {

  private final CurrencyRepository currencyRepository;
  private final CurrencyMapper currencyMapper;

  @Override
  public ResponsePayload<CurrencyDTO> save(CurrencyDTO currencyDTO) {
    return new ResponsePayload<>(currencyMapper.convertToDTO(
        currencyRepository.save(currencyMapper.convertToEntity(currencyDTO))));
  }
}
