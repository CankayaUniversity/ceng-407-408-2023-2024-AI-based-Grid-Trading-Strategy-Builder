package com.gridy.strategybuilder.mapper;

import com.gridy.strategybuilder.dto.CurrencyDTO;
import com.gridy.strategybuilder.dto.UserDTO;
import com.gridy.strategybuilder.entity.Currency;
import com.gridy.strategybuilder.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface CurrencyMapper {

  CurrencyMapper MAPPER = Mappers.getMapper(CurrencyMapper.class);

  CurrencyDTO convertToDTO(Currency currency);

  Currency convertToEntity(CurrencyDTO currencyDTO);
}
