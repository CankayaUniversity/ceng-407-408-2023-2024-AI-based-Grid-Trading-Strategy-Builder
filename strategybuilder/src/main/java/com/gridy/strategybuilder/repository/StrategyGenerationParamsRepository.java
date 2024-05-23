package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.StrategyGenerationParams;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import java.util.Date;
import java.util.List;

public interface StrategyGenerationParamsRepository extends JpaRepository<StrategyGenerationParams, Long> {
    List<StrategyGenerationParams> findByCreatedAtBetween(Date startDate, Date endDate);
}
