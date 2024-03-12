package com.gridy.strategybuilder.mapper;

import com.gridy.strategybuilder.dto.UserDTO;
import com.gridy.strategybuilder.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {

  UserMapper MAPPER = Mappers.getMapper(UserMapper.class);

  @Mapping(target = "password", ignore = true)
  UserDTO convertToDTO(User user);

  User convertToEntity(UserDTO userDTO);
}
