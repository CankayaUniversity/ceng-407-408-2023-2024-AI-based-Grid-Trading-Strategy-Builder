package com.gridy.strategybuilder.dto.filter;

import java.math.BigDecimal;
import lombok.Data;

@Data
public class CurrencyFilter {
  private String name;
  private String symbol;
  private BigDecimal minLastPrice;
  private BigDecimal maxLastPrice;
}
