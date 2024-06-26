package com.gridy.strategybuilder.dto;

import com.gridy.strategybuilder.enumeration.SimulationStatusEnum;
import java.math.BigDecimal;
import java.util.Date;
import lombok.Data;

@Data
public class SimulationDTO {

  private Long id;
  private SimulationStatusEnum status;
  private StrategyDTO strategy;
  private BigDecimal profitLoss;
  private Date startingDate;
  private Date endingDate;
  private Date lastExecutedAt;
  private Date createdAt;
  private Date updatedAt;
}
