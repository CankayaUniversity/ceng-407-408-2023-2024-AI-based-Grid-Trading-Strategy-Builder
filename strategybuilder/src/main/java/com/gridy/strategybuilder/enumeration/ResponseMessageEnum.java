package com.gridy.strategybuilder.enumeration;

import lombok.Getter;

@Getter
public enum ResponseMessageEnum {
  EMPTY(1L, ""),
  UNEXPECTED_ERROR(2L, "An unexpected error was encountered!"),
  EMAIL_EXISTS(3L, "An account with this email already exists."),
  USERNAME_EXISTS(4L, "An account with this username already exists."),
  RECORD_DOES_NOT_EXISTS(5L, "This record does not exist.");

  private final Long code;
  private final String message;

  ResponseMessageEnum(Long code, String message) {
    this.code = code;
    this.message = message;
  }

  public static ResponseMessageEnum getByCode(Long code) {
    for (ResponseMessageEnum key : ResponseMessageEnum.values()) {
      if (key.code.intValue() == code.intValue()) {
        return key;
      }
    }
    return null;
  }

  public static ResponseMessageEnum getByMessage(String message) {
    for (ResponseMessageEnum key : ResponseMessageEnum.values()) {
      if (key.message.equals(message)) {
        return key;
      }
    }
    return null;
  }
}
