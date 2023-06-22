package com.back.appecommerce;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition (
        info = @Info(
            title="App Ecommerce",
            version = "1.0.0",
            description = "Tu tienda informática Informatik"             
        ),
        servers = {
        @Server(url = "/", description = "Default Server URL")
        }
)
public class AppEcommerceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppEcommerceApplication.class, args);
	}

}
