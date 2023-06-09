
package com.back.appecommerce.auth.service;

import com.back.appecommerce.repositories.UserRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class JpaUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository repository;
    
    @Transactional(readOnly = true)
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional <com.back.appecommerce.models.entities.User> oUser = repository.findByEmail(email);
        if (!oUser.isPresent()) {
            throw new UsernameNotFoundException(String.format("El usuario %s no existe en el sistema", email));
        }
        com.back.appecommerce.models.entities.User user = oUser.orElseThrow();
        
        List <GrantedAuthority> authorities = user.getRoles()
                .stream()
                .map( r -> new SimpleGrantedAuthority(r.getName()))
                .collect(Collectors.toList());
        
        return new User(
                user.getName(),
                user.getPassword(), 
                true, 
                true, 
                true, 
                true, 
                authorities);
    }

}