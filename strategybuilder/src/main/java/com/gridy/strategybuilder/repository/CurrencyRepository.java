package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.Currency;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CurrencyRepository extends JpaRepository<Currency, Long>,
    JpaSpecificationExecutor<Currency> {

  Optional<Currency> findBySymbol(String symbol);

  Optional<Currency> findByName(String name);
}
