package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.User;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

  boolean existsUserByEmail(String email);

  boolean existsUserByUsername(String username);

}
