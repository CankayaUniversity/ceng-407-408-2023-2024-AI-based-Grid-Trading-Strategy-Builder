package com.gridy.strategybuilder.enumeration;

import lombok.Getter;

@Getter
public enum CandleChartTimeIntervalEnum {

  ONE_SECOND(1L, "1s"),
  ONE_MINUTE(2L, "1m"),
  THREE_MINUTES(3L, "3m"),
  FIVE_MINUTES(4L, "5m"),
  FIFTEEN_MINUTES(5L, "15m"),
  THIRTY_MINUTES(6L, "30m"),
  ONE_HOUR(7L, "1h"),
  TWO_HOURS(8L, "2h"),
  FOUR_HOURS(9L, "4h"),
  SIX_HOURS(10L, "6h"),
  EIGHT_HOURS(11L, "8h"),
  TWELVE_HOURS(12L, "12h"),
  ONE_DAY(13L, "1d"),
  THREE_DAYS(14L, "3d"),
  ONE_WEEK(15L, "1w"),
  ONE_MONTH(16L, "1M");

  private final Long code;
  private final String name;

  CandleChartTimeIntervalEnum(Long code, String name) {
    this.code = code;
    this.name = name;
  }

  public static CandleChartTimeIntervalEnum getByCode(Long code) {
    for (CandleChartTimeIntervalEnum key : CandleChartTimeIntervalEnum.values()) {
      if (key.code.intValue() == code.intValue()) {
        return key;
      }
    }
    return null;
  }

  public static CandleChartTimeIntervalEnum getByName(String name) {
    for (CandleChartTimeIntervalEnum key : CandleChartTimeIntervalEnum.values()) {
      if (key.name.equals(name)) {
        return key;
      }
    }
    return null;
  }
}
