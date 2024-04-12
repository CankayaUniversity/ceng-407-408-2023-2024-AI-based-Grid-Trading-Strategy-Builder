package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.SimulationTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SimulationTransactionRepository extends JpaRepository<SimulationTransaction, Long>,
    JpaSpecificationExecutor<SimulationTransaction> {
}
