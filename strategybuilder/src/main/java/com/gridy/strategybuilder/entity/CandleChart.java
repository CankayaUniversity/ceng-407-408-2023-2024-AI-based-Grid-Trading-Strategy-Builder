package com.gridy.strategybuilder.entity;

import com.gridy.strategybuilder.enumeration.CandleChartTimeIntervalEnum;
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
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.mapstruct.Mapping;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "CANDLE_CHART")
@EntityListeners(AuditingEntityListener.class)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CandleChart {

  @Id
  @SequenceGenerator(name = "CANDLE_CHART_ID_GENERATOR", sequenceName = "CANDLE_CHART_ID_GEN", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CANDLE_CHART_ID_GENERATOR")
  @Column(unique = true, nullable = false)
  private Long id;

  @ManyToOne()
  @JoinColumn(name = "CURRENCY_PAIR_ID", nullable = false)
  private CurrencyPair currencyPair;

  @Column(name = "TIME_INTERVAL", nullable = false)
  @Enumerated(value = EnumType.STRING)
  private CandleChartTimeIntervalEnum timeInterval;

  @CreatedDate
  @Column(name = "CREATED_AT", nullable = false)
  private Date createdAt;

  @LastModifiedDate
  @Column(name = "UPDATED_AT", nullable = false)
  private Date updatedAt;
}
