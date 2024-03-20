package com.gridy.strategybuilder.entity;

import com.gridy.strategybuilder.enumeration.CandleChartTimeIntervalEnum;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "CANDLE")
@EntityListeners(AuditingEntityListener.class)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Candle {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(unique = true, nullable = false)
  private Long id;

  @ManyToOne()
  @JoinColumn(name = "CANDLE_CHART_ID", nullable = false)
  private CandleChart candleChart;

  @Column(name = "OPEN_PRICE", nullable = false)
  private BigDecimal openPrice;

  @Column(name = "HIGH_PRICE", nullable = false)
  private BigDecimal highPrice;

  @Column(name = "LOW_PRICE", nullable = false)
  private BigDecimal lowPrice;

  @Column(name = "CLOSE_PRICE", nullable = false)
  private BigDecimal closePrice;

  @Column(name = "OPEN_TIME", nullable = false, unique = true)
  private Date openTime;

  @Column(name = "CLOSE_TIME", nullable = false)
  private Date closeTime;

  @CreatedDate
  @Column(name = "CREATED_AT", nullable = false)
  private Date createdAt;

  @LastModifiedDate
  @Column(name = "UPDATED_AT", nullable = false)
  private Date updatedAt;
}
