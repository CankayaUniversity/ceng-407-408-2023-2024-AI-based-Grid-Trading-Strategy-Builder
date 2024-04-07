package com.gridy.strategybuilder.dto;

import java.util.Date;
import lombok.Data;

@Data
public class OrderPairTemplateDTO {

  private Long id;
  private StrategyDTO strategy;
  private OrderTemplateDTO buyOrderTemplate;
  private OrderTemplateDTO sellOrderTemplate;
  private Date createdAt;
  private Date updatedAt;
}
