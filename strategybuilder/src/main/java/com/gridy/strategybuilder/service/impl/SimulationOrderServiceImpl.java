package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.SimulationOrderDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.mapper.SimulationOrderMapper;
import com.gridy.strategybuilder.repository.SimulationOrderRepository;
import com.gridy.strategybuilder.service.SimulationOrderService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SimulationOrderServiceImpl implements SimulationOrderService {

  private final SimulationOrderRepository simulationOrderRepository;
  private final SimulationOrderMapper simulationOrderMapper;


  @Override
  public ResponsePayload<SimulationOrderDTO> save(SimulationOrderDTO simulationOrderDTO) {
    SimulationOrderDTO savedDTO = simulationOrderMapper.convertToDTO(
        simulationOrderRepository.save(simulationOrderMapper.convertToEntity(simulationOrderDTO)));
    return new ResponsePayload<>(savedDTO);
  }

  @Override
  public ResponsePayload<List<SimulationOrderDTO>> saveAll(
      List<SimulationOrderDTO> simulationOrderDTOList) {
    return new ResponsePayload<>(simulationOrderRepository.saveAll(
            simulationOrderDTOList.stream().map(simulationOrderMapper::convertToEntity).toList())
        .stream().map(simulationOrderMapper::convertToDTO).toList());
  }

  @Override
  public ResponsePayload<List<SimulationOrderDTO>> findAllBySimulationId(Long simulationId) {
    return new ResponsePayload<>(simulationOrderRepository.findAllBySimulationId(simulationId)
        .stream().map(simulationOrderMapper::convertToDTO).toList());
  }
}
