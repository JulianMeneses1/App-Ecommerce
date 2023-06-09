

package com.back.appecommerce.repositories;

import com.back.appecommerce.models.entities.Role;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RoleRepository extends JpaRepository<Role, Long> {
    public Optional <Role> findByName (String name);
}
