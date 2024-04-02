package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.Strategy;
import com.gridy.strategybuilder.entity.StrategyGenerationParams;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StrategyRepository extends JpaRepository<Strategy, Long> {

}
