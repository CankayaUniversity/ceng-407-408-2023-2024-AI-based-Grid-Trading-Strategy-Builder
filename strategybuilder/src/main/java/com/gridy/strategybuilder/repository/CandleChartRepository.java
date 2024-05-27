package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.CandleChart;
import com.gridy.strategybuilder.entity.Currency;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CandleChartRepository extends JpaRepository<CandleChart, Long>,
    JpaSpecificationExecutor<CandleChart> {

  Optional<CandleChart> findFirstByCurrencyPair_Id(Long currenyPairID);
}
