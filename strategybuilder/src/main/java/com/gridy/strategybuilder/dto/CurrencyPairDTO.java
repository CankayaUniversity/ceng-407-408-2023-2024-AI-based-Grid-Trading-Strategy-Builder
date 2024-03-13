package com.gridy.strategybuilder.dto;

import java.util.Date;
import java.util.UUID;
import lombok.Data;

@Data
public class CurrencyPairDTO {

  private UUID id;
  private String symbol;
  private CurrencyDTO baseCurrency;
  private CurrencyDTO quoteCurrency;
  private Date createdAt;
  private Date updatedAt;
}
