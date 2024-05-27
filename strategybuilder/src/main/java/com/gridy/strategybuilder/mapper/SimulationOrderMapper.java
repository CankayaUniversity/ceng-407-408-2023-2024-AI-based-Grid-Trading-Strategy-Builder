package com.gridy.strategybuilder.mapper;

import com.gridy.strategybuilder.dto.SimulationOrderDTO;
import com.gridy.strategybuilder.entity.SimulationOrder;
import org.mapstruct.Mapper;

@Mapper
public interface SimulationOrderMapper extends BaseMapper<SimulationOrder, SimulationOrderDTO> {

  default SimulationOrderDTO convertToDTOWithoutSimulation(SimulationOrder simulationOrder) {
    SimulationOrderDTO simulationOrderDTO = convertToDTO(simulationOrder);
    simulationOrderDTO.setSimulation(null);
    return simulationOrderDTO;
  }
}
