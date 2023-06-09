

package com.back.appecommerce.services;

import com.back.appecommerce.models.entities.Role;
import java.util.List;
import java.util.Optional;


public interface RoleService {
    public List<Role> findAll();
    public Role save(Role role);
    public void delete(Long id);
    public Optional <Role> findById (Long id);
}
