package com.gridy.strategybuilder.dto;

import com.gridy.strategybuilder.entity.OrderTemplate;
import com.gridy.strategybuilder.entity.Simulation;
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
  private Date createdAt;
  private Date updatedAt;
}
