package com.gridy.strategybuilder.dto;

import com.gridy.strategybuilder.enumeration.OrderSideEnum;
import com.gridy.strategybuilder.enumeration.OrderStatusEnum;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SimulationOrderDTO {

  private Long id;
  private SimulationDTO simulation;
  private OrderTemplateDTO orderTemplate;
  private OrderStatusEnum status;
  private OrderSideEnum side;
  private Date filledAt;
  private Date createdAt;
  private Date updatedAt;
}
