package com.gridy.strategybuilder.entity;

import com.gridy.strategybuilder.enumeration.StrategyTimePeriodEnum;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "STRATEGY_GENERATION_PARAMS")
@EntityListeners(AuditingEntityListener.class)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StrategyGenerationParams {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(unique = true, nullable = false)
  private Long id;

  @ManyToOne()
  @JoinColumn(name = "USER_ID", nullable = false)
  private User user;

  @ManyToOne()
  @JoinColumn(name = "CURRENCY_PAIR_ID", nullable = false)
  private CurrencyPair currencyPair;

  @Column(name = "TIME_PERIOD", nullable = false)
  @Enumerated(value = EnumType.STRING)
  private StrategyTimePeriodEnum timePeriod;

  @Column(name = "MIN_PRICE", nullable = false)
  private BigDecimal minPrice;

  @Column(name = "MAX_PRICE", nullable = false)
  private BigDecimal maxPrice;

  @Column(name = "MIN_GRIDS", nullable = false)
  private Long minGrids;

  @Column(name = "MAX_GRIDS", nullable = false)
  private Long maxGrids;

  @Column(name = "MIN_PROFIT_GRIDS", nullable = false)
  private BigDecimal minProfitGrids;

  @Column(name = "MAX_PROFIT_GRIDS", nullable = false)
  private BigDecimal maxProfitGrids;

  @Column(name = "INVESTMENT", nullable = false)
  private BigDecimal investment;

  @CreatedDate
  @Column(name = "CREATED_AT", nullable = false)
  private Date createdAt;

  @LastModifiedDate
  @Column(name = "UPDATED_AT", nullable = false)
  private Date updatedAt;
}
