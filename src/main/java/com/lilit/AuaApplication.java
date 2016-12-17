package com.lilit;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.lilit.dao.mapper")
public class AuaApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuaApplication.class, args);
	}
}
