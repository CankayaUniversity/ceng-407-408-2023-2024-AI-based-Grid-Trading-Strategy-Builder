package com.gridy.strategybuilder.entity;

import com.gridy.strategybuilder.enumeration.SimulationStatusEnum;
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
@Table(name = "SIMULATION")
@EntityListeners(AuditingEntityListener.class)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Simulation {

  @Id
  @SequenceGenerator(name = "SIMULATION_ID_GENERATOR", sequenceName = "SIMULATION_ID_GEN", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SIMULATION_ID_GENERATOR")
  @Column(unique = true, nullable = false)
  private Long id;

  @Column(name = "STATUS", nullable = false)
  @Enumerated(value = EnumType.STRING)
  private SimulationStatusEnum status;

  @ManyToOne()
  @JoinColumn(name = "STRATEGY_ID", nullable = false)
  private Strategy strategy;

  @Column(name= "PROFIT_LOSS")
  private BigDecimal profitLoss;

  @Column(name = "STARTING_DATE", nullable = false)
  private Date startingDate;

  @Column(name = "ENDING_DATE", nullable = false)
  private Date endingDate;

  @Column(name = "LAST_EXECUTED_AT", nullable = false)
  private Date lastExecutedAt;

  @CreatedDate
  @Column(name = "CREATED_AT", nullable = false)
  private Date createdAt;

  @LastModifiedDate
  @Column(name = "UPDATED_AT", nullable = false)
  private Date updatedAt;
}
