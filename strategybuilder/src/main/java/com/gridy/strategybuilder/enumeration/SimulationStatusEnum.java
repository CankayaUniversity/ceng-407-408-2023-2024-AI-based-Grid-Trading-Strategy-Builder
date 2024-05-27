package com.gridy.strategybuilder.enumeration;

import lombok.Getter;

@Getter
public enum SimulationStatusEnum {

  NEW(1L, "NEW"),
  READY(2L, "READY"),
  STARTED(3L, "STARTED"),
  PAUSED(4L, "PAUSED"),
  COMPLETED(5L, "COMPLETED");

  private final Long code;
  private final String name;

  SimulationStatusEnum(Long code, String name) {
    this.code = code;
    this.name = name;
  }

  public static SimulationStatusEnum getByCode(Long code) {
    for (SimulationStatusEnum key : SimulationStatusEnum.values()) {
      if (key.code.intValue() == code.intValue()) {
        return key;
      }
    }
    return null;
  }

  public static SimulationStatusEnum getByName(String name) {
    for (SimulationStatusEnum key : SimulationStatusEnum.values()) {
      if (key.name.equals(name)) {
        return key;
      }
    }
    return null;
  }
}
