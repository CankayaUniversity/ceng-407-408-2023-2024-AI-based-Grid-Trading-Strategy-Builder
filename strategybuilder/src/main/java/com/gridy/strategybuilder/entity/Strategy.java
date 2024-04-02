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
@Table(name = "STRATEGY")
@EntityListeners(AuditingEntityListener.class)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Strategy {

  @Id
  @SequenceGenerator(name = "STRATEGY_ID_GENERATOR", sequenceName = "STRATEGY_ID_GEN", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "STRATEGY_ID_GENERATOR")
  @Column(unique = true, nullable = false)
  private Long id;

  @ManyToOne()
  @JoinColumn(name = "STRATEGY_GENERATION_PARAMS_ID", nullable = false)
  private StrategyGenerationParams strategyGenerationParams;

  @ManyToOne()
  @JoinColumn(name = "USER_ID", nullable = false)
  private User user;

  @Column(name = "MIN_PRICE", nullable = false)
  private BigDecimal minPrice;

  @Column(name = "MAX_PRICE", nullable = false)
  private BigDecimal maxPrice;

  @Column(name = "GRIDS", nullable = false)
  private Long grids;

  @Column(name = "INVESTMENT", nullable = false)
  private BigDecimal investment;

  @CreatedDate
  @Column(name = "CREATED_AT", nullable = false)
  private Date createdAt;

  @LastModifiedDate
  @Column(name = "UPDATED_AT", nullable = false)
  private Date updatedAt;
}
