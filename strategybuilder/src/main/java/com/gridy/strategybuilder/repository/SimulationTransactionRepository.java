package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.SimulationTransaction;
import java.util.Collection;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SimulationTransactionRepository extends JpaRepository<SimulationTransaction, Long>,
    JpaSpecificationExecutor<SimulationTransaction> {

  List<SimulationTransaction> findAllBySimulationOrder_SimulationId(Long simulationId);
}
