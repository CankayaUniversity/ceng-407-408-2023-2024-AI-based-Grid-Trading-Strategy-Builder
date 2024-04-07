package com.gridy.strategybuilder.dto;

import java.math.BigDecimal;
import java.util.Date;
import lombok.Data;

@Data
public class OrderTemplateDTO {

  private Long id;
  private BigDecimal price;
  private BigDecimal quantity;
  private Date createdAt;
  private Date updatedAt;
}
