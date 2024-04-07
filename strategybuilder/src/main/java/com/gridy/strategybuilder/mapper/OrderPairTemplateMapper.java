package com.gridy.strategybuilder.mapper;

import com.gridy.strategybuilder.dto.OrderPairTemplateDTO;
import com.gridy.strategybuilder.entity.OrderPairTemplate;
import org.mapstruct.Mapper;

@Mapper
public interface OrderPairTemplateMapper extends
    BaseMapper<OrderPairTemplate, OrderPairTemplateDTO> {

}
