package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.Candle;
import com.gridy.strategybuilder.entity.CandleChart;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandleRepository extends JpaRepository<Candle, Long> {

  Optional<Candle> findTopByCandleChart_IdOrderByOpenTimeDesc(Long chartId);
}
