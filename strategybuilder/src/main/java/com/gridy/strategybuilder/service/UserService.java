package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.UserDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;

public interface UserService {

  ResponsePayload<UserDTO> save(UserDTO userDTO);
  ResponsePayload<UserDTO> findById(Long id);
  ResponsePayload<UserDTO> findByEmail(String email);
}
