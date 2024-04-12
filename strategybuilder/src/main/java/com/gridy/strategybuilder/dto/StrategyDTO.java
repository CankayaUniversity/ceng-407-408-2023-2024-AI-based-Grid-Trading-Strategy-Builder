package com.gridy.strategybuilder.dto;

import com.gridy.strategybuilder.entity.User;
import java.math.BigDecimal;
import java.util.Date;
import lombok.Data;

@Data
public class StrategyDTO {

  private Long id;
  private StrategyGenerationParamsDTO strategyGenerationParams;
  private User user;
  private BigDecimal minPrice;
  private BigDecimal maxPrice;
  private Long grids;
  private BigDecimal investment;
  private Date createdAt;
  private Date updatedAt;
}
