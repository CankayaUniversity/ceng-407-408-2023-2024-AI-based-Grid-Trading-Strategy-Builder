package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.StrategyGenerationParamsDTO;
import com.gridy.strategybuilder.dto.UserDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.enumeration.ResponseMessageEnum;
import com.gridy.strategybuilder.entity.StrategyGenerationParams;
import com.gridy.strategybuilder.mapper.StrategyGenerationParamsMapper;
import com.gridy.strategybuilder.repository.StrategyGenerationParamsRepository;
import com.gridy.strategybuilder.service.StrategyGenerationParamsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class StrategyGenerationParamsServiceImpl implements StrategyGenerationParamsService {

  private final StrategyGenerationParamsRepository strategyGenerationParamsRepository;
  private final StrategyGenerationParamsMapper strategyGenerationParamsMapper;

  @Override
  public ResponsePayload<StrategyGenerationParamsDTO> save(StrategyGenerationParamsDTO strategyGenerationParamsDTO) {
    StrategyGenerationParamsDTO savedDTO = strategyGenerationParamsMapper.convertToDTO(
            strategyGenerationParamsRepository.save(
                    strategyGenerationParamsMapper.convertToEntity(strategyGenerationParamsDTO)));
    return new ResponsePayload<>("", true, savedDTO);
  }

  @Override
  public ResponsePayload<List<StrategyGenerationParamsDTO>> getStrategiesByDateRange(Date startDate, Date endDate) {
    List<StrategyGenerationParams> strategies = strategyGenerationParamsRepository.findByCreatedAtBetween(startDate, endDate);
    List<StrategyGenerationParamsDTO> strategyDTOs = strategies.stream()
            .map(strategyGenerationParamsMapper::convertToDTO)
            .collect(Collectors.toList());
    return new ResponsePayload<>("", true, strategyDTOs);
  }
}


