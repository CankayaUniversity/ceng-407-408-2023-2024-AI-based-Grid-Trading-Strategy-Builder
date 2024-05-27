package com.gridy.strategybuilder.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

public interface BaseMapper<Entity,EntityDTO> {

  BaseMapper MAPPER = Mappers.getMapper(BaseMapper.class);

  EntityDTO convertToDTO(Entity entity);

  Entity convertToEntity(EntityDTO entityDTO);
}
