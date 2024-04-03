package com.gridy.strategybuilder.mapper;

import com.gridy.strategybuilder.dto.CandleChartDTO;
import com.gridy.strategybuilder.dto.CandleDTO;
import com.gridy.strategybuilder.entity.Candle;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;

@Mapper
public interface CandleMapper extends BaseMapper<Candle, CandleDTO> {

  default CandleDTO fromAPIList(List<Object> apiArray, CandleChartDTO candleChartDTO) {
    CandleDTO candleDTO = new CandleDTO();
    candleDTO.setCandleChart(candleChartDTO);
    candleDTO.setOpenTime(new Date((Long) apiArray.get(0)));
    candleDTO.setOpenPrice(new BigDecimal(String.valueOf(apiArray.get(1))));
    candleDTO.setHighPrice(new BigDecimal(String.valueOf(apiArray.get(2))));
    candleDTO.setLowPrice(new BigDecimal(String.valueOf(apiArray.get(3))));
    candleDTO.setClosePrice(new BigDecimal(String.valueOf(apiArray.get(4))));
    candleDTO.setCloseTime(new Date((Long) apiArray.get(6)));
    return candleDTO;
  }
}
