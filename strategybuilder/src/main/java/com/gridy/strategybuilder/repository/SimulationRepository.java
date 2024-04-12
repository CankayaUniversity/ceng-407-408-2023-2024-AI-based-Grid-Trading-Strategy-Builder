package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.Simulation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SimulationRepository extends JpaRepository<Simulation, Long>,
    JpaSpecificationExecutor<Simulation> {

}
