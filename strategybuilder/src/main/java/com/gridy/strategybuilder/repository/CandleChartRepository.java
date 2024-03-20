package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.CandleChart;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandleChartRepository extends JpaRepository<CandleChart, Long> {

}
