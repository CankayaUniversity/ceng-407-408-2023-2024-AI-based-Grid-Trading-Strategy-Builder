package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.SimulationOrder;
import com.gridy.strategybuilder.enumeration.OrderSideEnum;
import com.gridy.strategybuilder.enumeration.OrderStatusEnum;
import java.math.BigDecimal;
import java.util.Collection;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SimulationOrderRepository extends JpaRepository<SimulationOrder, Long>,
    JpaSpecificationExecutor<SimulationOrder> {

  List<SimulationOrder> findAllBySimulationId(Long simulationId);

  List<SimulationOrder> findAllBySimulationIdAndSideAndOrderTemplate_PriceGreaterThanAndStatusNotIn(
      Long simulationId, OrderSideEnum side, BigDecimal price, List<OrderStatusEnum> statuses);
}
