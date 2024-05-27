package com.gridy.strategybuilder.mapper;

import com.gridy.strategybuilder.dto.CandleChartDTO;
import com.gridy.strategybuilder.dto.CurrencyPairDTO;
import com.gridy.strategybuilder.entity.CandleChart;
import com.gridy.strategybuilder.entity.CurrencyPair;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface CandleChartMapper extends BaseMapper<CandleChart, CandleChartDTO> {
}
