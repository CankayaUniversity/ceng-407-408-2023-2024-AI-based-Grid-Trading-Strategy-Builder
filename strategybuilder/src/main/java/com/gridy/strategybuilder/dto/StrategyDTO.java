package com.gridy.strategybuilder.dto;

import com.gridy.strategybuilder.entity.StrategyGenerationParams;
import com.gridy.strategybuilder.entity.User;
import com.gridy.strategybuilder.enumeration.StrategyTimePeriodEnum;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import java.math.BigDecimal;
import java.util.Date;
import lombok.Data;

@Data
public class StrategyDTO {

  private Long id;
  private StrategyGenerationParams strategyGenerationParams;
  private User user;
  private BigDecimal minPrice;
  private BigDecimal maxPrice;
  private Long grids;
  private BigDecimal investment;
  private Date createdAt;
  private Date updatedAt;
}
