package com.gridy.strategybuilder.dto;

import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;
import lombok.Data;

@Data
public class CurrencyDTO {

  private UUID id;
  private String name;
  private String symbol;
  private BigDecimal lastPrice;
  private Date createdAt;
  private Date updatedAt;
}
