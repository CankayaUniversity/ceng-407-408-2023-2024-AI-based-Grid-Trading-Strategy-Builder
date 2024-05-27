package com.gridy.strategybuilder.mapper;

import com.gridy.strategybuilder.dto.SimulationDTO;
import com.gridy.strategybuilder.entity.Simulation;
import org.mapstruct.Mapper;

@Mapper
public interface SimulationMapper extends BaseMapper<Simulation, SimulationDTO> {

}
