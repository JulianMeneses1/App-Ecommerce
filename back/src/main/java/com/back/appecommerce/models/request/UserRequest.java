
package com.back.appecommerce.models.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class UserRequest {
   @NotBlank
   @Size(min = 4, max = 10, message = "debe tener entre 3 y 10 caracteres")    
   private String name;
    
   @NotBlank
   @Size(min = 4, max = 10, message = "debe tener entre 3 y 15 caracteres") 
   private String lastName;   
   
   @NotBlank
   @Email
   private String email;
}
