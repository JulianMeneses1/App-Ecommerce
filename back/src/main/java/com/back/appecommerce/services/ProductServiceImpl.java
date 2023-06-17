
package com.back.appecommerce.services;

import com.back.appecommerce.models.entities.Category;
import com.back.appecommerce.models.entities.Product;
import com.back.appecommerce.repositories.ProductRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductServiceImpl implements ProductService{
    
    @Autowired
    public ProductRepository repository;

    @Override
    @Transactional
    public Product save(Product product) {
        return repository.save(product);        
    }

    @Override
    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Override
    @Transactional(readOnly=true)
    public List<Product> findAll() {
        return repository.findAll();
    }

    @Override
    @Transactional(readOnly=true)
    public Page<Product> findByCategory(Pageable pageable, Category category) {   
        
        return repository.findByCategory(pageable, category);
    }

    @Override
    @Transactional
    public Optional<Product> update(Product product, Long id) {
        Optional <Product> o = repository.findById(id);
        if (o.isPresent()) {
            Product productDb = o.orElseThrow();
            productDb.setTitle(product.getTitle());
            productDb.setDescription(product.getDescription());
            productDb.setPrice(product.getPrice());
            productDb.setImage(product.getImage());
            productDb.setCategory(product.getCategory());
            repository.save(productDb);
            return Optional.ofNullable(productDb);
        }
        return Optional.empty();
    }    
    
    @Override
    @Transactional(readOnly=true)
    public Optional<Product> findById(Long id) {
        Optional <Product> o = repository.findById(id);
        if (o.isPresent()) {
            return o;
        }
        return Optional.empty();
    }

    @Override
    @Transactional(readOnly=true)
    public Optional<Product> findByTitle(String title) {       
        Optional <Product> o = repository.findByTitle(title);
        if (o.isPresent()) {
            return o;
        }
        return Optional.empty();
    }    

    @Override
    public boolean existsByTitle(String title) {
        return repository.existsByTitle(title);
    }
}
