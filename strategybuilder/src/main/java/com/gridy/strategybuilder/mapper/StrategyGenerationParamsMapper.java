package com.gridy.strategybuilder.mapper;

import com.gridy.strategybuilder.dto.StrategyGenerationParamsDTO;
import com.gridy.strategybuilder.entity.StrategyGenerationParams;
import org.mapstruct.Mapper;

@Mapper
public interface StrategyGenerationParamsMapper extends
    BaseMapper<StrategyGenerationParams, StrategyGenerationParamsDTO> {

}
