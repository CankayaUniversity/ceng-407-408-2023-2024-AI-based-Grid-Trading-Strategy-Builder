package com.gridy.strategybuilder.dto;

import com.gridy.strategybuilder.enumeration.SimulationStatusEnum;
import com.gridy.strategybuilder.enumeration.StrategyTimePeriodEnum;
import java.math.BigDecimal;
import java.util.Date;
import lombok.Data;

@Data
public class StrategyGenerationParamsDTO {

  private Long id;
  private UserDTO user;
  private CurrencyPairDTO currencyPair;
  private SimulationStatusEnum status;
  private StrategyTimePeriodEnum timePeriod;
  private BigDecimal minPrice;
  private BigDecimal maxPrice;
  private Long minGrids;
  private Long maxGrids;
  private BigDecimal minProfitGrids;
  private BigDecimal maxProfitGrids;
  private BigDecimal investment;
  private Date createdAt;
  private Date updatedAt;
}
