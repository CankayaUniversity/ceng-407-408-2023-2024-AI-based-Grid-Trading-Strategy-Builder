package com.gridy.strategybuilder.entity;

import com.gridy.strategybuilder.enumeration.CandleChartTimeIntervalEnum;
import com.gridy.strategybuilder.enumeration.OrderSideEnum;
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
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "SIMULATION_ORDER")
@EntityListeners(AuditingEntityListener.class)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SimulationOrder {

  @Id
  @SequenceGenerator(name = "SIMULATION_ORDER_ID_GENERATOR", sequenceName = "SIMULATION_ORDER_ID_GEN", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SIMULATION_ORDER_ID_GENERATOR")
  @Column(unique = true, nullable = false)
  private Long id;

  @ManyToOne()
  @JoinColumn(name = "SIMULATION_ID", nullable = false)
  private Simulation simulation;

  @ManyToOne()
  @JoinColumn(name = "ORDER_TEMPLATE_ID", nullable = false)
  private OrderTemplate orderTemplate;

  @Column(name = "STATUS", nullable = false)
  @Enumerated(value = EnumType.STRING)
  private OrderStatusEnum status;

  @Column(name = "SIDE", nullable = false)
  @Enumerated(value = EnumType.STRING)
  private OrderSideEnum side;

  @CreatedDate
  @Column(name = "CREATED_AT", nullable = false)
  private Date createdAt;

  @LastModifiedDate
  @Column(name = "UPDATED_AT", nullable = false)
  private Date updatedAt;
}
