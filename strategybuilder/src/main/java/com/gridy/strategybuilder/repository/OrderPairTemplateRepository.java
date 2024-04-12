package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.OrderPairTemplate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderPairTemplateRepository extends JpaRepository<OrderPairTemplate, Long> {

  List<OrderPairTemplate> findAllByStrategyId(Long strategyId);
}
