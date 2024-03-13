package com.gridy.strategybuilder.controller;

import com.gridy.strategybuilder.dto.UserDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/user")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserController {

  private final UserService userService;

  @PostMapping("/save")
  public ResponsePayload<UserDTO> save(@RequestBody UserDTO userDTO) {
    return userService.save(userDTO);
  }
//
//  @GetMapping("/{getbyid}")
//  public ResponsePayload<UserDTO> getById(@PathVariable int id) {
//    ResponsePayload<UserDTO> responsePayload = new ResponsePayload<>();
//    return userService.getById(userDto);
//  }
//
//  @GetMapping("/{getusername}")
//  public ResponsePayload<UserDTO> getUsername(@PathVariable int id) {
//    ResponsePayload<UserDTO> responsePayload = new ResponsePayload<>();
//    return userService.getUsername(userDto);
//  }
//
//  @PutMapping("/{id}/setUsername")
//  public ResponsePayload<UserDTO> setUsername(@PathVariable Long id, @RequestParam String username) {
//    ResponsePayload<UserDTO> responsePayload = new ResponsePayload<>();
//    return responsePayload;
//  }
//
//  @GetMapping("/{id}/getEmail")
//  public ResponsePayload<String> getEmail(@PathVariable Long id) {
//    ResponsePayload<String> responsePayload = new ResponsePayload<>();
//    return responsePayload;
//  }
//
//  @PutMapping("/{id}/setEmail")
//  public ResponsePayload<UserDTO> setEmail(@PathVariable Long id, @RequestParam String email) {
//    ResponsePayload<UserDTO> responsePayload = new ResponsePayload<>();
//    return responsePayload;
//  }
//
//  @PutMapping("/{id}/setPassword")
//  public ResponsePayload<UserDTO> setPassword(@PathVariable Long id, @RequestParam String password) {
//    ResponsePayload<UserDTO> responsePayload = new ResponsePayload<>();
//    return responsePayload;
//  }
//
//  @GetMapping("/{id}/getPassword")
//  public ResponsePayload<String> getPassword(@PathVariable Long id) {
//    ResponsePayload<String> responsePayload = new ResponsePayload<>();
//    return responsePayload;
//  }
//
//  @PutMapping("/{id}/setRole")
//  public ResponsePayload<UserDTO> setRole(@PathVariable Long id, @RequestParam String role) {
//    ResponsePayload<UserDTO> responsePayload = new ResponsePayload<>();
//    return responsePayload;
//  }
//
//  @GetMapping("/{id}/getRole")
//  public ResponsePayload<String> getRole(@PathVariable Long id) {
//    ResponsePayload<String> responsePayload = new ResponsePayload<>();
//    return responsePayload;
//  }
//
//  @PutMapping("/{id}/setCreatedAt")
//  public ResponsePayload<UserDTO> setCreatedAt(@PathVariable Long id, @RequestParam Date createdAt) {
//    ResponsePayload<UserDTO> responsePayload = new ResponsePayload<>();
//    return responsePayload;
//  }
//
//  @GetMapping("/{id}/getCreatedAt")
//  public ResponsePayload<Date> getCreatedAt(@PathVariable Long id) {
//    ResponsePayload<Date> responsePayload = new ResponsePayload<>();
//    return responsePayload;
//  }
//
//  @PutMapping("/{id}/setUpdatedAt")
//  public ResponsePayload<UserDTO> setUpdatedAt(@PathVariable Long id, @RequestParam Date updatedAt) {
//    ResponsePayload<UserDTO> responsePayload = new ResponsePayload<>();
//    return responsePayload;
//  }
//
//  @GetMapping("/{id}/getUpdatedAt")
//  public ResponsePayload<Date> getUpdatedAt(@PathVariable Long id) {
//    ResponsePayload<Date> responsePayload = new ResponsePayload<>();
//    return responsePayload;
//  }
//
//  @PutMapping("/{id}/setisEmailVerified")
//  public ResponsePayload<UserDTO> setisEmailVerified(@PathVariable Long id, @RequestParam boolean isEmailVerified) {
//    ResponsePayload<UserDTO> responsePayload = new ResponsePayload<>();
//    return responsePayload;
//  }
//
//  @GetMapping("/{id}/getisEmailVerified")
//  public ResponsePayload<Boolean> getisEmailVerified(@PathVariable Long id) {
//    ResponsePayload<Boolean> responsePayload = new ResponsePayload<>();
//    return responsePayload;
//  }
}

