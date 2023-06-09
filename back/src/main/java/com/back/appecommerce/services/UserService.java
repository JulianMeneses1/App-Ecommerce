

package com.back.appecommerce.services;

import com.back.appecommerce.models.dto.UserDto;
import com.back.appecommerce.models.entities.User;
import com.back.appecommerce.models.request.UserRequest;
import java.util.List;
import java.util.Optional;


public interface UserService {
    
    //public UserDto save (UserRequest user);
    public UserDto save (User user);
    public void delete (Long id);
    public List<UserDto> findAll();
    public Optional<UserDto> findById(Long id);
    public Optional<UserDto> update (UserRequest user, Long id);    

}
