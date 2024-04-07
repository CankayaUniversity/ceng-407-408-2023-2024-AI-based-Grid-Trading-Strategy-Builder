package com.gridy.strategybuilder.dto;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderPairTemplateDTO {

  private Long id;
  private StrategyDTO strategy;
  private OrderTemplateDTO buyOrderTemplate;
  private OrderTemplateDTO sellOrderTemplate;
  private Date createdAt;
  private Date updatedAt;
}
