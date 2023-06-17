
package com.back.appecommerce.repositories;

import com.back.appecommerce.models.entities.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{
    public Optional <User> findByEmail(String email);
    public boolean existsByEmail(String email);
}
