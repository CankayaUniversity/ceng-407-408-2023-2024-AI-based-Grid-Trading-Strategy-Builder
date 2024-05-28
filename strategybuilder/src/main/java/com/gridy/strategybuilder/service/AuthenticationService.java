package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.AuthenticationRequest;
import com.gridy.strategybuilder.dto.AuthenticationResponse;
import com.gridy.strategybuilder.dto.RegisterRequest;
import com.gridy.strategybuilder.entity.User;
import com.gridy.strategybuilder.enumeration.UserRoleEnum;
import com.gridy.strategybuilder.repository.UserRepository;
import java.util.Collection;
import java.util.Collections;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

  private final UserRepository repository;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;

  public AuthenticationResponse register(RegisterRequest request) {
    long count = repository.count();
    User user = User.builder()
        .username(request.getUsername())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(count == 0 ? UserRoleEnum.ADMIN : UserRoleEnum.USER)
        .build();
    repository.save(user);
    UserDetails userDetails = new CustomUserDetails(user,
        Collections.singletonList(new SimpleGrantedAuthority(user.getRole().name())));
    String jwtToken = jwtService.generateToken(userDetails);
    return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();
  }

  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.getEmail(),
            request.getPassword()
        )
    );

    User user = repository.findByEmail(request.getEmail()).orElseThrow();
    UserDetails userDetails = new CustomUserDetails(user,
        Collections.singletonList(new SimpleGrantedAuthority(user.getRole().name())));
    String jwtToken = jwtService.generateToken(userDetails);
    return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();
  }

  private class CustomUserDetails extends org.springframework.security.core.userdetails.User {

    private final User user;

    public CustomUserDetails(User user, Collection<? extends GrantedAuthority> authorities) {
      super(user.getEmail(), user.getPassword(), authorities);
      this.user = user;
    }

    public User getUser() {
      return user;
    }
  }
}
