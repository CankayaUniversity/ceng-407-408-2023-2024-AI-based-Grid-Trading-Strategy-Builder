package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.StrategyGenerationParamsDTO;
import com.gridy.strategybuilder.dto.UserDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.enumeration.ResponseMessageEnum;
import com.gridy.strategybuilder.mapper.StrategyGenerationParamsMapper;
import com.gridy.strategybuilder.repository.StrategyGenerationParamsRepository;
import com.gridy.strategybuilder.service.StrategyGenerationParamsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class StrategyGenerationParamsServiceImpl implements StrategyGenerationParamsService {

  private final StrategyGenerationParamsRepository strategyGenerationParamsRepository;
  private final StrategyGenerationParamsMapper strategyGenerationParamsMapper;


  @Override
  public ResponsePayload<StrategyGenerationParamsDTO> save(
      StrategyGenerationParamsDTO strategyGenerationParamsDTO) {

    StrategyGenerationParamsDTO savedDTO = strategyGenerationParamsMapper.convertToDTO(
        strategyGenerationParamsRepository.save(
            strategyGenerationParamsMapper.convertToEntity(strategyGenerationParamsDTO)));
    return new ResponsePayload<>(savedDTO);
  }
}
