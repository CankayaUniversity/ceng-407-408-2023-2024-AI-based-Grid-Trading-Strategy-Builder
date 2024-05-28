package com.gridy.strategybuilder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication()
@EnableJpaAuditing
public class StrategybuilderApplication {

	public static void main(String[] args) {
		SpringApplication.run(StrategybuilderApplication.class, args);
	}

}
