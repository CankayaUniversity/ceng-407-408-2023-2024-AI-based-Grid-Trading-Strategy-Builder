package com.gridy.strategybuilder.dto;

import com.gridy.strategybuilder.enumeration.UserRoleEnum;
import java.util.Date;
import java.util.UUID;
import lombok.Data;

@Data
public class UserDTO{

  private UUID id;
  private String username;
  private String email;
  private String password;
  private UserRoleEnum role;
  private Boolean isEmailVerified;
  private Date createdAt;
  private Date updatedAt;
}
