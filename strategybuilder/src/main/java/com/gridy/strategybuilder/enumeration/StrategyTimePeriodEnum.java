package com.gridy.strategybuilder.enumeration;

import lombok.Getter;

@Getter
public enum StrategyTimePeriodEnum {

  ONE_WEEK(1L, "ONE WEEK"),
  ONE_MONTH(2L, "ONE MONTH"),
  SIX_MONTHS(3L, "SIX MONTHS"),
  ONE_YEAR(4L, "ONE YEAR"),
  LIMITLESS(5L, "LIMITLESS");

  private final Long code;
  private final String name;

  StrategyTimePeriodEnum(Long code, String name) {
    this.code = code;
    this.name = name;
  }

  public static StrategyTimePeriodEnum getByCode(Long code) {
    for (StrategyTimePeriodEnum key : StrategyTimePeriodEnum.values()) {
      if (key.code.intValue() == code.intValue()) {
        return key;
      }
    }
    return null;
  }

  public static StrategyTimePeriodEnum getByName(String name) {
    for (StrategyTimePeriodEnum key : StrategyTimePeriodEnum.values()) {
      if (key.name.equals(name)) {
        return key;
      }
    }
    return null;
  }
}
