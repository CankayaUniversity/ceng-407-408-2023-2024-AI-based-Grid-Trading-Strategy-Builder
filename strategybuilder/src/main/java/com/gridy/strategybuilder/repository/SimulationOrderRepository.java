package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.SimulationOrder;
import java.util.Collection;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SimulationOrderRepository extends JpaRepository<SimulationOrder, Long>,
    JpaSpecificationExecutor<SimulationOrder> {

  List<SimulationOrder> findAllBySimulationId(Long simulationId);
}
