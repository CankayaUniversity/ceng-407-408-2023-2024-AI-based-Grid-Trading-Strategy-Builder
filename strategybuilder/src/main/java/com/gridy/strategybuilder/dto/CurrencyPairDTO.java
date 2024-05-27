package com.gridy.strategybuilder.dto;

import jakarta.persistence.Column;
import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;
import lombok.Data;

@Data
public class CurrencyPairDTO {

  private Long id;
  private String symbol;
  private CurrencyDTO baseCurrency;
  private CurrencyDTO quoteCurrency;
  private BigDecimal tickSize;
  private BigDecimal stepSize;
  private Date createdAt;
  private Date updatedAt;
}
