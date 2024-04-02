package com.gridy.strategybuilder.mapper;

import com.gridy.strategybuilder.dto.StrategyDTO;
import com.gridy.strategybuilder.dto.StrategyGenerationParamsDTO;
import com.gridy.strategybuilder.entity.Strategy;
import com.gridy.strategybuilder.entity.StrategyGenerationParams;
import org.mapstruct.Mapper;

@Mapper
public interface StrategyMapper extends
    BaseMapper<Strategy, StrategyDTO> {

}
