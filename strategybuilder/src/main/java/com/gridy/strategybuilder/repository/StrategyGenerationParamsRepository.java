package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.Candle;
import com.gridy.strategybuilder.entity.StrategyGenerationParams;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StrategyGenerationParamsRepository extends JpaRepository<StrategyGenerationParams, Long> {

}
