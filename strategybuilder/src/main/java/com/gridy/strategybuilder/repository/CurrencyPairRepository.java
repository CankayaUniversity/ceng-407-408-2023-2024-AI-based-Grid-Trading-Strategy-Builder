package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.CurrencyPair;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrencyPairRepository extends JpaRepository<CurrencyPair, Long> {


  Optional<CurrencyPair> findBySymbol(String symbol);
}
