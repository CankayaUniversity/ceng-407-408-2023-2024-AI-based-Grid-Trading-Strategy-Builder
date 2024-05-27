package com.gridy.strategybuilder.service.impl;

import com.gridy.strategybuilder.dto.SimulationTransactionDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.mapper.SimulationTransactionMapper;
import com.gridy.strategybuilder.repository.SimulationTransactionRepository;
import com.gridy.strategybuilder.service.SimulationTransactionService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SimulationTransactionServiceImpl implements SimulationTransactionService {

  private final SimulationTransactionRepository simulationTransactionRepository;
  private final SimulationTransactionMapper simulationTransactionMapper;


  @Override
  public ResponsePayload<SimulationTransactionDTO> save(
      SimulationTransactionDTO simulationTransactionDTO) {
    SimulationTransactionDTO savedDTO = simulationTransactionMapper.convertToDTO(
        simulationTransactionRepository.save(
            simulationTransactionMapper.convertToEntity(simulationTransactionDTO)));
    return new ResponsePayload<>(savedDTO);
  }

  @Override
  public ResponsePayload<List<SimulationTransactionDTO>> saveAll(
      List<SimulationTransactionDTO> simulationTransactionDTOS) {
    return new ResponsePayload<>(simulationTransactionRepository.saveAll(
            simulationTransactionDTOS.stream().map(simulationTransactionMapper::convertToEntity)
                .toList())
        .stream().map(simulationTransactionMapper::convertToDTO).toList());
  }

  @Override
  public ResponsePayload<List<SimulationTransactionDTO>> findAllBySimulationId(Long simulationId) {
    return new ResponsePayload<>(simulationTransactionRepository.findAllBySimulationOrder_SimulationId(simulationId)
        .stream().map(simulationTransactionMapper::convertToDTO).toList());
  }
}
