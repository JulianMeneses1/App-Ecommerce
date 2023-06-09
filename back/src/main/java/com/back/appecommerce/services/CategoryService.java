

package com.back.appecommerce.services;

import com.back.appecommerce.models.entities.Category;
import java.util.List;
import java.util.Optional;


public interface CategoryService {
    public List<Category> findAll();
    public Category save(Category category);
    public void delete(Long id);
    public Optional <Category> findById (Long id);
    public Optional <Category> findByName (String name);
}
