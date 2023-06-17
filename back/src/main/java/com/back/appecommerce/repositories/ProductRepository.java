

package com.back.appecommerce.repositories;

import com.back.appecommerce.models.entities.Category;
import com.back.appecommerce.models.entities.Product;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductRepository extends JpaRepository<Product, Long>{
    
    public Optional <Product> findByTitle(String title);
    public Page<Product> findByCategory(Pageable pageable, Category category);
    public boolean existsByTitle(String title);
}
