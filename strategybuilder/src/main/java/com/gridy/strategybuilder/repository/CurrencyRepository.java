package com.gridy.strategybuilder.repository;

import com.gridy.strategybuilder.entity.Currency;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrencyRepository extends JpaRepository<Currency, UUID> {

}
