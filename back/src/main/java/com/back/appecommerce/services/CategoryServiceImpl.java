
package com.back.appecommerce.services;

import com.back.appecommerce.models.entities.Category;
import com.back.appecommerce.repositories.CategoryRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository repository;
    
    @Override
    @Transactional(readOnly = true)
    public List<Category> findAll() {
        return repository.findAll();
    }

    @Override
    @Transactional
    public Category save(Category category) {
        return repository.save(category);
    }
    
    @Override
    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Override
    public Optional<Category> findById(Long id) {
        Optional <Category> o = repository.findById(id);
        if (o.isPresent()) {
            return o;
        }
        return Optional.empty();
    }
    
    @Override
    public Optional<Category> findByName(String name) {
        Optional <Category> o = repository.findByName(name);
        if (o.isPresent()) {
            return o;
        }
        return Optional.empty();
    }

}
