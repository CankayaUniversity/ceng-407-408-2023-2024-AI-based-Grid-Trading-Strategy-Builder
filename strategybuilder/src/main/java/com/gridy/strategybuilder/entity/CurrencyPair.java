package com.gridy.strategybuilder.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "CURRENCY_PAIR", uniqueConstraints = @UniqueConstraint(columnNames = {
    "BASE_CURRENCY_ID", "QUOTE_CURRENCY_ID"}))
@EntityListeners(AuditingEntityListener.class)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CurrencyPair {

  @Id
  @SequenceGenerator(name = "CURRENCY_PAIR_ID_GENERATOR", sequenceName = "CURRENCY_PAIR_ID_GEN", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CURRENCY_PAIR_ID_GENERATOR")
  @Column(unique = true, nullable = false)
  private Long id;

  @Column(name = "SYMBOL", unique = true, nullable = false)
  private String symbol;

  @ManyToOne
  @JoinColumn(name = "BASE_CURRENCY_ID", nullable = false)
  private Currency baseCurrency;

  @ManyToOne
  @JoinColumn(name = "QUOTE_CURRENCY_ID", nullable = false)
  private Currency quoteCurrency;

  @Column(name = "TICK_SIZE", nullable = false)
  private BigDecimal tickSize;

  @Column(name = "STEP_SIZE", nullable = false)
  private BigDecimal stepSize;

  @CreatedDate
  @Column(name = "CREATED_AT", nullable = false)
  private Date createdAt;

  @LastModifiedDate
  @Column(name = "UPDATED_AT", nullable = false)
  private Date updatedAt;
}
