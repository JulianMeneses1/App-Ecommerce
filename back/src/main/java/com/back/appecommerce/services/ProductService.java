
package com.back.appecommerce.services;

import com.back.appecommerce.models.entities.Category;
import com.back.appecommerce.models.entities.Product;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductService {
    public List<Product> save (List<Product> products);
    public void delete (Long id);
    public List<Product> findAll();
    public Page<Product> findByCategory(Pageable pageable, Category category);
    public Optional<Product> update (Product product, Long id);  
    public Optional<Product> findById(Long id);
    public Optional<Product> findByTitle(String title);

}
