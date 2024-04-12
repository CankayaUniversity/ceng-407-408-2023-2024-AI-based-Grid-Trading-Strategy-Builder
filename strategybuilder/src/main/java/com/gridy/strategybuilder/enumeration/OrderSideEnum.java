package com.gridy.strategybuilder.enumeration;

import lombok.Getter;

@Getter
public enum OrderSideEnum {

  BUY(1L, "BUY"),
  SELL(2L, "SELL");

  private final Long code;
  private final String name;

  OrderSideEnum(Long code, String name) {
    this.code = code;
    this.name = name;
  }

  public static OrderSideEnum getByCode(Long code) {
    for (OrderSideEnum key : OrderSideEnum.values()) {
      if (key.code.intValue() == code.intValue()) {
        return key;
      }
    }
    return null;
  }

  public static OrderSideEnum getByName(String name) {
    for (OrderSideEnum key : OrderSideEnum.values()) {
      if (key.name.equals(name)) {
        return key;
      }
    }
    return null;
  }
}
