package com.gridy.strategybuilder.entity;

import com.gridy.strategybuilder.enumeration.OrderStatusEnum;
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
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "SIMULATION_TRANSACTION")
@EntityListeners(AuditingEntityListener.class)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SimulationTransaction {

  @Id
  @SequenceGenerator(name = "SIMULATION_TRANSACTION_ID_GENERATOR", sequenceName = "SIMULATION_TRANSACTION_ID_GEN", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SIMULATION_TRANSACTION_ID_GENERATOR")
  @Column(unique = true, nullable = false)
  private Long id;

  @ManyToOne()
  @JoinColumn(name = "SIMULATION_ORDER_ID", nullable = false)
  private SimulationOrder simulationOrder;

  @Column(name = "STATUS", nullable = false)
  @Enumerated(value = EnumType.STRING)
  private OrderStatusEnum status;

  @Column(name = "FILLED_AMOUNT", nullable = false, precision = 19, scale = 8)
  private BigDecimal filledAmount;

  @Column(name = "FILLED_PRICE", nullable = false, precision = 19, scale = 8)
  private BigDecimal filledPrice;

  @CreatedDate
  @Column(name = "CREATED_AT", nullable = false)
  private Date createdAt;

  @LastModifiedDate
  @Column(name = "UPDATED_AT", nullable = false)
  private Date updatedAt;
}
