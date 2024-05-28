package com.gridy.strategybuilder.config;

import static com.gridy.strategybuilder.enumeration.UserRoleEnum.ADMIN;
import static com.gridy.strategybuilder.enumeration.UserRoleEnum.USER;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

  private final JwtAuthenticationFilter jwtAuthFilter;
  private final AuthenticationProvider authenticationProvider;

  private static final String[] WHITE_LIST_URL = {
      "/api/v1/auth/**",
  };
  private static final String[] ADMIN_LIST_URL = {
      "/api/v1/admin/**"
  };
  private static final String[] USER_LIST_URL = {
      "/api/v1/**",
  };

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .csrf(AbstractHttpConfigurer::disable)
        .authorizeHttpRequests(req ->
            req.requestMatchers(WHITE_LIST_URL).permitAll()
                .requestMatchers(USER_LIST_URL).hasAnyAuthority(ADMIN.name(), USER.name())
                .requestMatchers(ADMIN_LIST_URL).hasAnyAuthority(ADMIN.name())
                .anyRequest().authenticated()
        )
        .sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
        .authenticationProvider(authenticationProvider)
        .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

    return http.build();
  }
}