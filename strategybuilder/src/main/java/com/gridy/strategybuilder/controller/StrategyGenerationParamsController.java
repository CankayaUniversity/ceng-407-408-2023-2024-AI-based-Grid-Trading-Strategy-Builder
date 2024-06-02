package com.gridy.strategybuilder.controller;

import com.gridy.strategybuilder.dto.StrategyGenerationParamsDTO;
import com.gridy.strategybuilder.dto.UserDTO;
import com.gridy.strategybuilder.dto.core.ResponsePayload;
import com.gridy.strategybuilder.entity.User;
import com.gridy.strategybuilder.service.StrategyGenerationParamsService;
import com.gridy.strategybuilder.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("api/v1/strategyGenerationParams")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class StrategyGenerationParamsController {

  private final StrategyGenerationParamsService strategyGenerationParamsService;

  @PostMapping("/save")
  public ResponsePayload<StrategyGenerationParamsDTO> save(
      @RequestBody StrategyGenerationParamsDTO strategyGenerationParamsDTO,
      @AuthenticationPrincipal UserDetails user) {
    return strategyGenerationParamsService.save(strategyGenerationParamsDTO, user);
  }

  @GetMapping("/findBestStrategy")
  public ResponsePayload<StrategyGenerationParamsDTO> findBestStrategy(@RequestParam Long id) {
    return strategyGenerationParamsService.findBestStrategy(id);
  }

  @GetMapping("/strategiesByDateRange")
  public ResponsePayload<List<StrategyGenerationParamsDTO>> getStrategiesByDateRange(
      @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date startDate,
      @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date endDate) {
    return strategyGenerationParamsService.getStrategiesByDateRange(startDate, endDate);
  }

  @GetMapping("/findMyStrategies")
  public ResponsePayload<Page<StrategyGenerationParamsDTO>> findMyStrategies(
      @AuthenticationPrincipal UserDetails user,
      Pageable pageable) {
    return strategyGenerationParamsService.findMyStrategies(user, pageable);
  }

  @DeleteMapping("/delete")
  public ResponsePayload<Boolean> delete(@RequestParam Long id) {
    return strategyGenerationParamsService.delete(id);
  }

}



