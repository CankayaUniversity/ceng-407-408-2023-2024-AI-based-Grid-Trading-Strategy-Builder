package com.gridy.strategybuilder.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
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
@Table(name = "ORDER_PAIR_TEMPLATE", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"STRATEGY_ID", "BUY_ORDER_TEMPLATE_ID"}),
    @UniqueConstraint(columnNames = {"STRATEGY_ID", "SELL_ORDER_TEMPLATE_ID"})
})
@EntityListeners(AuditingEntityListener.class)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderPairTemplate {

  @Id
  @SequenceGenerator(name = "ORDER_PAIR_TEMPLATE_ID_GENERATOR", sequenceName = "ORDER_PAIR_TEMPLATE_ID_GEN", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ORDER_PAIR_TEMPLATE_ID_GENERATOR")
  private Long id;

  @ManyToOne
  @Column(name = "STRATEGY_ID", nullable = false)
  private Strategy strategy;

  @ManyToOne
  @Column(name = "BUY_ORDER_TEMPLATE_ID", nullable = false)
  private OrderTemplate buyOrderTemplate;

  @ManyToOne
  @Column(name = "SELL_ORDER_TEMPLATE_ID", nullable = false)
  private OrderTemplate sellOrderTemplate;

  @CreatedDate
  @Column(name = "CREATED_AT", nullable = false)
  private Date createdAt;

  @LastModifiedDate
  @Column(name = "UPDATED_AT", nullable = false)
  private Date updatedAt;
}
