package com.gridy.strategybuilder.dto;

import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;
import lombok.Data;

@Data
public class CandleDTO {

  private Long id;
  private CandleChartDTO candleChart;
  private BigDecimal openPrice;
  private BigDecimal highPrice;
  private BigDecimal lowPrice;
  private BigDecimal closePrice;
  private Date openTime;
  private Date closeTime;
  private Date createdAt;
  private Date updatedAt;
}
