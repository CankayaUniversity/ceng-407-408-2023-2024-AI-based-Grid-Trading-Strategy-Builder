package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.UserDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.enumeration.ResponseMessageEnum;
import com.gridy.strategybuilder.mapper.UserMapper;
import com.gridy.strategybuilder.repository.UserRepository;
import com.gridy.strategybuilder.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;
  private final UserMapper userMapper;

  @Override
  public ResponsePayload<UserDTO> save(UserDTO userDTO) {
    if (userDTO.getUsername().isEmpty() || userDTO.getEmail().isEmpty()) {
      return new ResponsePayload<>(ResponseMessageEnum.EMPTY.getMessage());
    }

    boolean isEmailExists = userRepository.existsUserByEmail(userDTO.getEmail());
    if (isEmailExists) {
      return new ResponsePayload<>(ResponseMessageEnum.EMAIL_EXISTS.getMessage());
    }

    boolean isUserNameExists = userRepository.existsUserByUsername(userDTO.getUsername());
    if (isUserNameExists) {
      return new ResponsePayload<>(ResponseMessageEnum.USERNAME_EXISTS.getMessage());
    }

    UserDTO savedDTO = userMapper.convertToDTO(
        userRepository.save(userMapper.convertToEntity(userDTO)));
    return new ResponsePayload<>(savedDTO);
  }

  @Override
  public ResponsePayload<UserDTO> findById(Long id) {

    return userRepository.findById(id)
        .map(user -> new ResponsePayload<>(userMapper.convertToDTO(user)))
        .orElseGet(() -> new ResponsePayload<>(ResponseMessageEnum.RECORD_DOES_NOT_EXISTS.getMessage()));
  }

  @Override
  public ResponsePayload<UserDTO> findByEmail(String email) {
    return userRepository.findByEmail(email)
        .map(user -> new ResponsePayload<>(userMapper.convertToDTO(user)))
        .orElseGet(() -> new ResponsePayload<>(ResponseMessageEnum.RECORD_DOES_NOT_EXISTS.getMessage()));
  }
}
