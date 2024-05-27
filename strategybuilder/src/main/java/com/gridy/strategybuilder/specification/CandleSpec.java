package com.gridy.strategybuilder.specification;

import com.gridy.strategybuilder.dto.filter.CandleFilter;
import com.gridy.strategybuilder.dto.filter.CurrencyFilter;
import com.gridy.strategybuilder.entity.Candle;
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
public class CandleSpec implements Specification<Candle> {

  @Override
  public Predicate toPredicate(Root<Candle> root, CriteriaQuery<?> query,
      CriteriaBuilder criteriaBuilder) {
    Predicate p = criteriaBuilder.disjunction();
    return p;
  }

  public static Specification<Candle> findByFilter(CandleFilter filter) {
    return byCandleChartId(filter.getCandleChartId())
        .and(byMinOpenTime(filter.getMinOpenTime()))
        .and(byMaxOpenTime(filter.getMaxOpenTime()))
        .and(byMinCloseTime(filter.getMinCloseTime()))
        .and(byMaxCloseTime(filter.getMaxCloseTime()));
  }

  public static Specification<Candle> byCandleChartId(Long candleChartId) {
    return (root, query, criteriaBuilder) -> {
      if (candleChartId == null) {
        return criteriaBuilder.conjunction();
      }
      return criteriaBuilder.equal(root.get("candleChart").get("id"), candleChartId);
    };
  }

  public static Specification<Candle> byMinOpenTime(Date minOpenTime) {
    return (root, query, criteriaBuilder) -> {
      if (minOpenTime == null) {
        return criteriaBuilder.conjunction();
      }
      return criteriaBuilder.greaterThanOrEqualTo(root.get("openTime"), minOpenTime);
    };
  }

  public static Specification<Candle> byMaxOpenTime(Date maxOpenTime) {
    return (root, query, criteriaBuilder) -> {
      if (maxOpenTime == null)
        return criteriaBuilder.conjunction();
      return criteriaBuilder.lessThanOrEqualTo(root.get("openTime"), maxOpenTime);
    };
  }

  public static Specification<Candle> byMinCloseTime(Date minCloseTime) {
    return (root, query, criteriaBuilder) -> {
      if (minCloseTime == null) {
        return criteriaBuilder.conjunction();
      }
      return criteriaBuilder.greaterThanOrEqualTo(root.get("closeTime"), minCloseTime);
    };
  }

  public static Specification<Candle> byMaxCloseTime(Date maxCloseTime) {
    return (root, query, criteriaBuilder) -> {
      if (maxCloseTime == null)
        return criteriaBuilder.conjunction();
      return criteriaBuilder.lessThanOrEqualTo(root.get("closeTime"), maxCloseTime);
    };
  }

}
