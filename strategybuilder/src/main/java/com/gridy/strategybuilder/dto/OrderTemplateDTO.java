package com.gridy.strategybuilder.dto;

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
public class OrderTemplateDTO {

  private Long id;
  private BigDecimal price;
  private BigDecimal quantity;
  private Date createdAt;
  private Date updatedAt;
}
