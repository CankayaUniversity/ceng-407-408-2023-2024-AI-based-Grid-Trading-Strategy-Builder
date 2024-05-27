package com.gridy.strategybuilder.mapper;

import com.gridy.strategybuilder.dto.OrderTemplateDTO;
import com.gridy.strategybuilder.entity.OrderTemplate;
import org.mapstruct.Mapper;

@Mapper
public interface OrderTemplateMapper extends
    BaseMapper<OrderTemplate, OrderTemplateDTO> {

}
