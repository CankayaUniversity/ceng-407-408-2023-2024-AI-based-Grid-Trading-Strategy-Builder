package com.gridy.strategybuilder.dto.filter;

import java.util.Date;
import lombok.Data;

@Data
public class CandleFilter {
  private Long candleChartId;
  private Date minOpenTime;
  private Date maxOpenTime;
  private Date minCloseTime;
  private Date maxCloseTime;
}
