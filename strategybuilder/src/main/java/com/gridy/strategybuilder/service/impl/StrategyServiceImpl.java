package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.OrderPairTemplateDTO;
import com.gridy.strategybuilder.dto.OrderTemplateDTO;
import com.gridy.strategybuilder.dto.StrategyDTO;
import com.gridy.strategybuilder.dto.StrategyGenerationParamsDTO;
import com.gridy.strategybuilder.dto.UserDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.entity.OrderPairTemplate;
import com.gridy.strategybuilder.entity.OrderTemplate;
import com.gridy.strategybuilder.entity.Strategy;
import com.gridy.strategybuilder.mapper.StrategyGenerationParamsMapper;
import com.gridy.strategybuilder.mapper.StrategyMapper;
import com.gridy.strategybuilder.repository.StrategyGenerationParamsRepository;
import com.gridy.strategybuilder.repository.StrategyRepository;
import com.gridy.strategybuilder.service.OrderPairTemplateService;
import com.gridy.strategybuilder.service.OrderTemplateService;
import com.gridy.strategybuilder.service.StrategyGenerationParamsService;
import com.gridy.strategybuilder.service.StrategyService;
import com.gridy.strategybuilder.service.UserService;
import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class StrategyServiceImpl implements StrategyService {

  private final StrategyMapper strategyMapper;
  private final StrategyRepository strategyRepository;
  private final OrderTemplateService orderTemplateService;
  private final OrderPairTemplateService orderPairTemplateService;
  private final UserService userService;

  @Override
  public ResponsePayload<StrategyDTO> save(
      StrategyDTO StrategyDTO) {

    StrategyDTO savedDTO = strategyMapper.convertToDTO(
        strategyRepository.save(
            strategyMapper.convertToEntity(StrategyDTO)));
    return new ResponsePayload<>(savedDTO);
  }

  @Override
  public ResponsePayload<List<OrderPairTemplateDTO>> generateOrderPairTemplates(
      StrategyDTO strategyDTO) {
    Optional<Strategy> byId = strategyRepository.findById(strategyDTO.getId());
    if (byId.isEmpty()) {
      return null;
    }
    StrategyDTO strategyDTO1 = strategyMapper.convertToDTO(byId.get());
    List<BigDecimal> buyPriceList = calculateBuyPriceList(strategyDTO1.getMaxPrice(),
        strategyDTO1.getMinPrice(),
        strategyDTO1.getGrids(),
        strategyDTO1.getStrategyGenerationParams().getCurrencyPair().getTickSize());

    BigDecimal avgBuyPrice = buyPriceList.stream().reduce(BigDecimal.valueOf(0), BigDecimal::add)
        .divide(BigDecimal.valueOf(buyPriceList.size()), MathContext.DECIMAL32);

    BigDecimal stepSize = strategyDTO1.getStrategyGenerationParams().getCurrencyPair()
        .getStepSize();
    BigDecimal quantity = strategyDTO1.getStrategyGenerationParams().getInvestment()
        .divide(avgBuyPrice, MathContext.DECIMAL32).divide(
            BigDecimal.valueOf(strategyDTO1.getGrids()), MathContext.DECIMAL32)
        .divide(stepSize, MathContext.DECIMAL32).setScale(0, RoundingMode.DOWN).multiply(stepSize);

    List<OrderPairTemplateDTO> orderPairTemplateDTOList = new ArrayList<>();
    List<OrderTemplateDTO> orderTemplateDTOList = new ArrayList<>();
    for (BigDecimal buyPrice : buyPriceList) {
      OrderTemplateDTO buyOrderTemplate = OrderTemplateDTO.builder().price(buyPrice)
          .quantity(quantity).build();
      orderTemplateDTOList.add(buyOrderTemplate);
    }
    orderTemplateDTOList.add(
        OrderTemplateDTO.builder().price(strategyDTO1.getMaxPrice()).quantity(quantity).build());
    List<OrderTemplateDTO> orderTemplateDTOS = orderTemplateService.saveAll(orderTemplateDTOList);

    for (int i = 0; i < orderTemplateDTOS.size() - 1; i++) {
      OrderTemplateDTO buyOrderTemplate = orderTemplateDTOS.get(i);
      OrderTemplateDTO sellOrderTemplate = orderTemplateDTOS.get(i + 1);
      orderPairTemplateDTOList.add(OrderPairTemplateDTO.builder().strategy(strategyDTO1)
          .buyOrderTemplate(buyOrderTemplate).sellOrderTemplate(sellOrderTemplate).build());
    }
    return orderPairTemplateService.saveAll(orderPairTemplateDTOList);
  }

  private List<BigDecimal> calculateBuyPriceList(BigDecimal maxPrice, BigDecimal minPrice,
      Long grid, BigDecimal tickSize) {
    BigDecimal gridPercentage = BigDecimal.valueOf(
        Math.pow(maxPrice.divide(minPrice, 10, RoundingMode.HALF_UP).doubleValue(),
            1.0 / grid));
    List<BigDecimal> priceList = new ArrayList<>();
    for (int i = 0; i < grid; i++) {
      priceList.add(minPrice.multiply(gridPercentage.pow(i)).divide(tickSize, 10, RoundingMode.HALF_UP)
          .setScale(0, RoundingMode.DOWN).multiply(tickSize));
    }
    return priceList;
  }

  @Override
  public ResponsePayload<StrategyDTO> generateRandomStrategy(
      StrategyGenerationParamsDTO strategyGenerationParamsDTO) {

    StrategyDTO strategyDTO = new StrategyDTO();
    strategyDTO.setUser(strategyGenerationParamsDTO.getUser());
    strategyDTO.setStrategyGenerationParams(strategyGenerationParamsDTO);
    strategyDTO.setMinPrice(strategyGenerationParamsDTO.getMinPrice().add(
        BigDecimal.valueOf(Math.random()).multiply(
            strategyGenerationParamsDTO.getMaxPrice().subtract(
                strategyGenerationParamsDTO.getMinPrice()))));
    strategyDTO.setMaxPrice(strategyDTO.getMinPrice().add(
        BigDecimal.valueOf(Math.random()).multiply(
            strategyGenerationParamsDTO.getMaxPrice().subtract(
                strategyDTO.getMinPrice()))));

    long maxGridsFromSpread = strategyDTO.getMaxPrice()
        .divide(strategyDTO.getMinPrice(), MathContext.DECIMAL32)
        .divide(BigDecimal.valueOf(0.001), MathContext.DECIMAL32).longValue();

    long maxGridsFromInvestment = strategyGenerationParamsDTO.getInvestment()
        .divide(BigDecimal.valueOf(5), MathContext.DECIMAL32).longValue();

    strategyDTO.setGrids(strategyGenerationParamsDTO.getMinGrids() +
        (long) (Math.random() * (Math.min(Math.min(maxGridsFromSpread, maxGridsFromInvestment),
            strategyGenerationParamsDTO.getMaxGrids())
            - strategyGenerationParamsDTO.getMinGrids())));

    strategyDTO.setInvestment(strategyGenerationParamsDTO.getInvestment());

    return save(strategyDTO);
  }
}
