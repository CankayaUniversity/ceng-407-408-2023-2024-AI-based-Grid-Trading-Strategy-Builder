package com.gridy.strategybuilder.mapper;

import com.gridy.strategybuilder.dto.SimulationTransactionDTO;
import com.gridy.strategybuilder.entity.SimulationTransaction;
import org.mapstruct.Mapper;

@Mapper
public interface SimulationTransactionMapper extends BaseMapper<SimulationTransaction, SimulationTransactionDTO> {

}
