package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.CurrencyPair;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CurrencyPairRepository extends JpaRepository<CurrencyPair, Long>,
    JpaSpecificationExecutor<CurrencyPair> {


  Optional<CurrencyPair> findBySymbol(String symbol);
}
