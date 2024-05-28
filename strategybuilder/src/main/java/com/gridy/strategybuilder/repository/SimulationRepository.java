package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.Simulation;
import com.gridy.strategybuilder.entity.Strategy;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SimulationRepository extends JpaRepository<Simulation, Long>,
    JpaSpecificationExecutor<Simulation> {

  @Query("SELECT sim FROM Simulation sim "
      + "LEFT JOIN sim.strategy s ON sim.strategy.id = s.id "
      + "LEFT JOIN s.strategyGenerationParams sgp ON s.strategyGenerationParams.id = sgp.id "
      + "WHERE s.strategyGenerationParams.id = :strategyGenerationParamsId "
      + "ORDER BY sim.profitLoss DESC "
      + "LIMIT 1")
  Optional<Simulation> findByStrategyGenerationParams(
      @Param("strategyGenerationParamsId") Long strategyGenerationParamsId);
}
