package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.SimulationDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.entity.Simulation;
import com.gridy.strategybuilder.enumeration.ResponseMessageEnum;
import com.gridy.strategybuilder.mapper.SimulationMapper;
import com.gridy.strategybuilder.repository.SimulationRepository;
import com.gridy.strategybuilder.service.SimulationService;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SimulationServiceImpl implements SimulationService {

  private final SimulationRepository simulationRepository;
  private final SimulationMapper simulationMapper;

  @Override
  public ResponsePayload<SimulationDTO> save(SimulationDTO simulationDTO) {
    SimulationDTO savedDTO = simulationMapper.convertToDTO(
        simulationRepository.save(simulationMapper.convertToEntity(simulationDTO)));
    return new ResponsePayload<>(savedDTO);
  }

  @Override
  public ResponsePayload<SimulationDTO> findById(Long id) {
    Optional<Simulation> byId = simulationRepository.findById(id);
    return byId.map(simulation -> new ResponsePayload<>(simulationMapper.convertToDTO(simulation)))
        .orElseGet(
            () -> new ResponsePayload<>(ResponseMessageEnum.RECORD_DOES_NOT_EXISTS.getMessage()));
  }

  @Override
  public ResponsePayload<SimulationDTO> execute(Long simulationId, Long candleChartId) {

    return null;
  }
}
