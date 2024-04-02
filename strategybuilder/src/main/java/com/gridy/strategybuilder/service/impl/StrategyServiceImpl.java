package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.StrategyDTO;
import com.gridy.strategybuilder.dto.StrategyGenerationParamsDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.mapper.StrategyGenerationParamsMapper;
import com.gridy.strategybuilder.mapper.StrategyMapper;
import com.gridy.strategybuilder.repository.StrategyGenerationParamsRepository;
import com.gridy.strategybuilder.repository.StrategyRepository;
import com.gridy.strategybuilder.service.StrategyGenerationParamsService;
import com.gridy.strategybuilder.service.StrategyService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class StrategyServiceImpl implements StrategyService {

  private final StrategyMapper strategyMapper;
  private final StrategyRepository strategyRepository;

  @Override
  public ResponsePayload<StrategyDTO> save(
      StrategyDTO StrategyDTO) {

    StrategyDTO savedDTO = strategyMapper.convertToDTO(
        strategyRepository.save(
            strategyMapper.convertToEntity(StrategyDTO)));
    return new ResponsePayload<>(savedDTO);
  }
}
