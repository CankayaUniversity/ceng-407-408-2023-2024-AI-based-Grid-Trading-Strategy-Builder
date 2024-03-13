package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.CurrencyPairDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.entity.CurrencyPair;
import com.gridy.strategybuilder.enumeration.ResponseMessageEnum;
import com.gridy.strategybuilder.mapper.CurrencyPairMapper;
import com.gridy.strategybuilder.repository.CurrencyPairRepository;
import com.gridy.strategybuilder.service.CurrencyPairService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CurrencyPairServiceImpl implements CurrencyPairService {

  private final CurrencyPairRepository currencyPairRepository;
  private final CurrencyPairMapper currencyPairMapper;

  @Override
  public ResponsePayload<CurrencyPairDTO> save(CurrencyPairDTO currencyPairDTO) {
    return new ResponsePayload<>(currencyPairMapper.convertToDTO(
        currencyPairRepository.save(currencyPairMapper.convertToEntity(currencyPairDTO))));
  }

  @Override
  public ResponsePayload<CurrencyPairDTO> getBySymbol(String symbol) {
    CurrencyPair currencyPair = currencyPairRepository.findBySymbol(symbol).orElse(null);
    if(currencyPair == null){
      return new ResponsePayload<>(ResponseMessageEnum.RECORD_DOES_NOT_EXISTS.getMessage());
    }else
      return new ResponsePayload<>(currencyPairMapper.convertToDTO(currencyPair));
  }
}
