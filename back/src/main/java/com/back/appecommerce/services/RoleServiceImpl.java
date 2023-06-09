
package com.back.appecommerce.services;

import com.back.appecommerce.models.entities.Role;
import com.back.appecommerce.repositories.RoleRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RoleServiceImpl implements RoleService {
    
    @Autowired
    private RoleRepository repository;
    
    @Override
    @Transactional(readOnly = true)
    public List<Role> findAll() {
        return repository.findAll();        
    }
    
    @Override
    @Transactional
    public Role save(Role role) {
        return repository.save(role);
    }

    @Override
    public Optional<Role> findById(Long id) {
        Optional <Role> o = repository.findById(id);
        if (o.isPresent()) {
            return o;
        }
        return Optional.empty();
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
