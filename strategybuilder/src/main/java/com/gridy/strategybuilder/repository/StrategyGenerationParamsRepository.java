package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.StrategyGenerationParams;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface StrategyGenerationParamsRepository extends JpaRepository<StrategyGenerationParams, Long>,
    JpaSpecificationExecutor<StrategyGenerationParams> {

}
