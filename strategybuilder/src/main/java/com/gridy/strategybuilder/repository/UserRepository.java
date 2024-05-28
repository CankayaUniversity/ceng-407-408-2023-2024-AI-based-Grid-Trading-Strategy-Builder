package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface UserRepository extends JpaRepository<User, Long>,
    JpaSpecificationExecutor<User> {

  boolean existsUserByEmail(String email);

  boolean existsUserByUsername(String username);

  Optional<User> findByEmail(String email);
}
