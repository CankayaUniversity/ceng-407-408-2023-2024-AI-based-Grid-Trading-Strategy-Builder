package com.gridy.strategybuilder.dto;

import com.gridy.strategybuilder.enumeration.OrderStatusEnum;
import java.math.BigDecimal;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SimulationTransactionDTO {

  private Long id;
  private SimulationOrderDTO simulationOrder;
  private OrderStatusEnum status;
  private BigDecimal filledAmount;
  private BigDecimal filledPrice;
  private Date createdAt;
  private Date updatedAt;
}
