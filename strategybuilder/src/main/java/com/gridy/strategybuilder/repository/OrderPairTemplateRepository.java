package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.OrderPairTemplate;
import io.micrometer.observation.ObservationFilter;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderPairTemplateRepository extends JpaRepository<OrderPairTemplate, Long> {

  List<OrderPairTemplate> findAllByStrategyId(Long strategyId);

  Optional<OrderPairTemplate> findByBuyOrderTemplateId(Long orderTemplateId);

  Optional<OrderPairTemplate> findBySellOrderTemplateId(Long orderTemplateId);
}
