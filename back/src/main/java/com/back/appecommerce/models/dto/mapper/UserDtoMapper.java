
package com.back.appecommerce.models.dto.mapper;

import com.back.appecommerce.models.dto.UserDto;
import com.back.appecommerce.models.entities.User;

public class UserDtoMapper {
    
    private User user;    

    private UserDtoMapper() {
    }
    
    public static UserDtoMapper builder() {
        return new UserDtoMapper();
    }
    
    // con este método modificamos user con lo que le pasamos (el return this devuelve el objeto entero de DtoMapperUser)
    public UserDtoMapper setUser(User user) {
        this.user = user;
        return this;
    }
    
    // finalmente, si usuario no es null, retornamos un UserDto con los campos de user
    public UserDto build() {
        if (user == null) {
            throw new RuntimeException("Debe pasar el entity user");
        }
        boolean isAdmin = user.getRoles().stream().anyMatch(r -> "ROLE_ADMIN".equals(r.getName()));
        return new UserDto(this.user.getId(),this.user.getName(), this.user.getLastName(),this.user.getEmail(), isAdmin);
    }
}
