
package com.back.appecommerce.services;

import com.back.appecommerce.models.dto.UserDto;
import com.back.appecommerce.models.dto.mapper.UserDtoMapper;
import com.back.appecommerce.models.entities.Role;
import com.back.appecommerce.models.entities.User;
import com.back.appecommerce.models.request.UserRequest;
import com.back.appecommerce.repositories.RoleRepository;
import com.back.appecommerce.repositories.UserRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;
    
    @Autowired
    RoleRepository roleRepository; 
    
    @Autowired
    PasswordEncoder passwordEncoder; 
    
    @Override
    @Transactional
    public UserDto save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword())); 
        // aunque el campo admin se pase como true va a ser false al final
        user.setAdmin(false);
        user.setRoles(getRoles(user));
        return UserDtoMapper.builder().setUser(userRepository.save(user)).build();
    }
    
    @Override
    @Transactional
    public void delete(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly=true)
    public List<UserDto> findAll() {
        List <User> users = userRepository.findAll();  
        return users
                .stream()
                .map(user -> UserDtoMapper.builder().setUser(user).build())
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly=true)
    public Optional<UserDto> findById(Long id) {
        return userRepository.findById(id).map(user -> UserDtoMapper
                .builder()
                .setUser(user)
                .build());        
    }
    
    @Override
    @Transactional
    public Optional <UserDto> update (UserRequest user, Long id) {
        Optional <User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {                       
            User userDb = optionalUser.orElseThrow();
            userDb.setEmail(user.getEmail());
            userDb.setName(user.getName());
            userDb.setLastName(user.getLastName());
            userDb.setRoles(getRoles(userDb));
            userRepository.save(userDb);
            return Optional.ofNullable(UserDtoMapper.builder().setUser(userDb).build());            
        }        
        return Optional.empty();
    }  
     
    private List<Role> getRoles(User user) {
        Optional<Role> ou = roleRepository.findByName("ROLE_USER");
        List<Role> roles = new ArrayList<>();
        if (ou.isPresent()) {
            roles.add(ou.orElseThrow());           
        } 
        if(user.isAdmin()){
            Optional<Role> oa = roleRepository.findByName("ROLE_ADMIN");
            if (oa.isPresent()) {
            roles.add(oa.orElseThrow());           
            } 
        }
        return roles;
    }    

    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }
}
