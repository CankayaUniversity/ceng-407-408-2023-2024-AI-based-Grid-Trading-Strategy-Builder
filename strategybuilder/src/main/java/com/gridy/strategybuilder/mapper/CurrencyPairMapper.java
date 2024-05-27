package com.gridy.strategybuilder.mapper;

import com.gridy.strategybuilder.dto.CurrencyPairDTO;
import com.gridy.strategybuilder.entity.CurrencyPair;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface CurrencyPairMapper {

  CurrencyPairMapper MAPPER = Mappers.getMapper(CurrencyPairMapper.class);

  CurrencyPairDTO convertToDTO(CurrencyPair currencyPair);

  CurrencyPair convertToEntity(CurrencyPairDTO currencyPairDTO);
}
