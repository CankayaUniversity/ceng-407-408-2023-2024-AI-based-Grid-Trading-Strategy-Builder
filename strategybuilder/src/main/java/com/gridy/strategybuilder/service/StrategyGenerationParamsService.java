package com.gridy.strategybuilder.service;

import com.gridy.strategybuilder.dto.StrategyGenerationParamsDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.entity.User;
import java.util.Date;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;

public interface StrategyGenerationParamsService {

  ResponsePayload<StrategyGenerationParamsDTO> save(
      StrategyGenerationParamsDTO strategyGenerationParamsDTO, UserDetails user);

  ResponsePayload<StrategyGenerationParamsDTO> save(
      StrategyGenerationParamsDTO strategyGenerationParamsDTO);

  ResponsePayload<StrategyGenerationParamsDTO> findById(Long id);

  ResponsePayload<StrategyGenerationParamsDTO> findBestStrategy(Long id);

  ResponsePayload<List<StrategyGenerationParamsDTO>> getStrategiesByDateRange(Date startDate,
      Date endDate);

  ResponsePayload<Page<StrategyGenerationParamsDTO>> findMyStrategies(UserDetails user,
      Pageable pageable);

  ResponsePayload<Boolean> delete(Long id);
}
