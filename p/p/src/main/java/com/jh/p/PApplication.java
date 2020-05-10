package com.jh.p;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class PApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(PApplication.class, args);
	}

}
