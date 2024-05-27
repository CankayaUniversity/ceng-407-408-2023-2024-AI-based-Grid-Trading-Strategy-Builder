package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.CurrencyDTO;
import com.gridy.strategybuilder.dto.UserDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.dto.filter.CurrencyFilter;
import com.gridy.strategybuilder.entity.Currency;
import com.gridy.strategybuilder.enumeration.ResponseMessageEnum;
import com.gridy.strategybuilder.mapper.CurrencyMapper;
import com.gridy.strategybuilder.mapper.UserMapper;
import com.gridy.strategybuilder.repository.CurrencyRepository;
import com.gridy.strategybuilder.repository.UserRepository;
import com.gridy.strategybuilder.service.CurrencyService;
import com.gridy.strategybuilder.service.UserService;
import com.gridy.strategybuilder.specification.CurrencySpec;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
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

  @Override
  public ResponsePayload<CurrencyDTO> findById(Long id) {
    Optional<Currency> byId = currencyRepository.findById(id);
    return byId.map(currency -> new ResponsePayload<>(currencyMapper.convertToDTO(currency)))
        .orElseGet(
            () -> new ResponsePayload<>(ResponseMessageEnum.RECORD_DOES_NOT_EXISTS.getMessage()));
  }

  @Override
  public ResponsePayload<CurrencyDTO> findByName(String name) {
    Optional<Currency> byName = currencyRepository.findByName(name);
    return byName.map(currency -> new ResponsePayload<>(currencyMapper.convertToDTO(currency)))
        .orElseGet(
            () -> new ResponsePayload<>(ResponseMessageEnum.RECORD_DOES_NOT_EXISTS.getMessage()));
  }

  @Override
  public ResponsePayload<CurrencyDTO> findBySymbol(String symbol) {
    Optional<Currency> bySymbol = currencyRepository.findBySymbol(symbol);
    return bySymbol.map(currency -> new ResponsePayload<>(currencyMapper.convertToDTO(currency)))
        .orElseGet(
            () -> new ResponsePayload<>(ResponseMessageEnum.RECORD_DOES_NOT_EXISTS.getMessage()));
  }

  @Override
  public ResponsePayload<CurrencyDTO> update(CurrencyDTO currencyDTO) {
    ResponsePayload<CurrencyDTO> byId = findById(currencyDTO.getId());
    if (byId.getSuccess()) {
      return new ResponsePayload<>(currencyMapper.convertToDTO(
          currencyRepository.save(currencyMapper.convertToEntity(currencyDTO))));
    } else {
      return byId;
    }
  }

  @Override
  public ResponsePayload<CurrencyDTO> delete(Long id) {
    ResponsePayload<CurrencyDTO> byId = findById(id);
    if (byId.getSuccess()) {
      currencyRepository.deleteById(id);
    }
    return byId;
  }

  @Override
  public ResponsePayload<List<CurrencyDTO>> filter(CurrencyFilter currencyFilter) {
    Specification<Currency> byFilter = CurrencySpec.findByFilter(currencyFilter);
    return new ResponsePayload<>(
        currencyMapper.convertToDTOList(currencyRepository.findAll(byFilter)));
  }
}
