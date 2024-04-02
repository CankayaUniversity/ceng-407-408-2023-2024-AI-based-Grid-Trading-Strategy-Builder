package com.gridy.strategybuilder.specification;

import com.gridy.strategybuilder.dto.filter.CurrencyFilter;
import com.gridy.strategybuilder.entity.Currency;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import java.math.BigDecimal;
import java.util.Date;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CurrencySpec implements Specification<Currency> {

  @Override
  public Predicate toPredicate(Root<Currency> root, CriteriaQuery<?> query,
      CriteriaBuilder criteriaBuilder) {
    Predicate p = criteriaBuilder.disjunction();
    return p;
  }

  public static Specification<Currency> findByFilter(CurrencyFilter filter) {
    return byName(filter.getName())
        .and(bySymbol(filter.getSymbol()))
        .and(byMinLastPrice(filter.getMinLastPrice()))
        .and(byMaxLastPrice(filter.getMaxLastPrice()));
  }

  public static Specification<Currency> byName(String name) {
    return (root, query, criteriaBuilder) -> {
      if (name == null) {
        return criteriaBuilder.conjunction();
      }
      return criteriaBuilder.like(root.get("name"), "%" + name + "%");
    };
  }

  public static Specification<Currency> bySymbol(String symbol) {
    return (root, query, criteriaBuilder) -> {
      if (symbol == null) {
        return criteriaBuilder.conjunction();
      }
      return criteriaBuilder.like(root.get("symbol"), "%" + symbol + "%");
    };
  }

  public static Specification<Currency> byMinLastPrice(BigDecimal minLastPrice) {
    return (root, query, criteriaBuilder) -> {
      if (minLastPrice == null) {
        return criteriaBuilder.conjunction();
      }
      return criteriaBuilder.greaterThanOrEqualTo(root.get("lastPrice"), minLastPrice);
    };
  }

  public static Specification<Currency> byMaxLastPrice(BigDecimal maxLastPrice) {
    return (root, query, criteriaBuilder) -> {
      if (maxLastPrice == null) {
        return criteriaBuilder.conjunction();
      }
      return criteriaBuilder.lessThanOrEqualTo(root.get("lastPrice"), maxLastPrice);
    };
  }

}
