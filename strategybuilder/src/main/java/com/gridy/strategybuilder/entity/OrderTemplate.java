package com.gridy.strategybuilder.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name = "ORDER_TEMPLATE")
@EntityListeners(AuditingEntityListener.class)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderTemplate {

  @Id
  @SequenceGenerator(name = "ORDER_TEMPLATE_ID_GENERATOR", sequenceName = "ORDER_TEMPLATE_ID_GEN", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ORDER_TEMPLATE_ID_GENERATOR")
  private Long id;

  @Column(name = "PRICE", nullable = false, precision = 19, scale = 8)
  private BigDecimal price;

  @Column(name = "QUANTITY", nullable = false, precision = 19, scale = 8)
  private BigDecimal quantity;

  @CreatedDate
  @Column(name = "CREATED_AT", nullable = false)
  private Date createdAt;

  @LastModifiedDate
  @Column(name = "UPDATED_AT", nullable = false)
  private Date updatedAt;
}
