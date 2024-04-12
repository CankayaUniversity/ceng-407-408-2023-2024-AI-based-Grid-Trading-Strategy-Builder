package com.gridy.strategybuilder.enumeration;

import lombok.Getter;

@Getter
public enum OrderStatusEnum {

  NEW(1L, "NEW"),
  PARTIALLY_FILLED(2L, "PARTIALLY_FILLED"),
  FILLED(3L, "FILLED"),
  CANCELLED(4L, "CANCELLED"),
  PENDING_CANCEL(4L, "PENDING_CANCEL"),
  REJECTED(5L, "REJECTED"),
  EXPIRED(6L, "EXPIRED"),
  EXPIRED_IN_MATCH(7L, "EXPIRED_IN_MATCH");

  private final Long code;
  private final String name;

  OrderStatusEnum(Long code, String name) {
    this.code = code;
    this.name = name;
  }

  public static OrderStatusEnum getByCode(Long code) {
    for (OrderStatusEnum key : OrderStatusEnum.values()) {
      if (key.code.intValue() == code.intValue()) {
        return key;
      }
    }
    return null;
  }

  public static OrderStatusEnum getByName(String name) {
    for (OrderStatusEnum key : OrderStatusEnum.values()) {
      if (key.name.equals(name)) {
        return key;
      }
    }
    return null;
  }
}
