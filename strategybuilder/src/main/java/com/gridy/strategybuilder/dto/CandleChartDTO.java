package com.gridy.strategybuilder.dto;

import com.gridy.strategybuilder.enumeration.CandleChartTimeIntervalEnum;
import java.util.Date;
import java.util.UUID;
import lombok.Data;

@Data
public class CandleChartDTO {

  private Long id;
  private CurrencyPairDTO currencyPair;
  private CandleChartTimeIntervalEnum timeInterval;
  private Date createdAt;
  private Date updatedAt;
}
