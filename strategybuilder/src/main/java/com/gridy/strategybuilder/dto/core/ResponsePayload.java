package com.gridy.strategybuilder.dto.core;

import com.gridy.strategybuilder.enumeration.ResponseMessageEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class ResponsePayload <T>{
  private String message;
  private Boolean success;
  private T data;

  public ResponsePayload(T data){
    this.message = "ResponseMessageEnum.EMPTY.getMessage()";
    this.success = true;
    this.data = data;
  }

  public ResponsePayload(String message){
    this.message = message;
    this.success = false;
    this.data = null;
  }

  public ResponsePayload(T data, String message){
    this.data = data;
    this.success = true;
    this.message = message;
  }
}
