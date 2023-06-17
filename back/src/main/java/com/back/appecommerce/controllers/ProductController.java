
package com.back.appecommerce.controllers;

import com.back.appecommerce.models.entities.Category;
import com.back.appecommerce.models.entities.Product;
import com.back.appecommerce.services.ProductService;
import com.back.appecommerce.services.CategoryService;
import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {
    
    @Autowired
    private ProductService productService;
    
    @Autowired
    private CategoryService categoryService;  
    
    @GetMapping
    public List<Product> getProducts () {      
        return productService.findAll();        
    }
    
    @GetMapping("/category/{name}")
    public ResponseEntity<?> getProducts (@PathVariable String name, 
                                          @RequestParam(value= "page", required = false, defaultValue="0") int page,
                                          @RequestParam(value= "size", required = false, defaultValue="5") int size) {
        
        Pageable pageable = PageRequest.of(page, size);
        Optional <Category> optionalCategory = categoryService.findByName(name);
        if (optionalCategory.isPresent()) {
            return ResponseEntity.ok(productService.findByCategory(pageable, optionalCategory.orElseThrow()));
        }
        return ResponseEntity.notFound().build();      
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Long id) {
        Optional <Product> productOptional = productService.findById(id);
        if (productOptional.isPresent()) {
            return ResponseEntity.ok(productOptional.orElseThrow());
        } else {
            return ResponseEntity.notFound().build();
        }
        
    }
    
    @GetMapping("/title/{title}")
    public ResponseEntity<?> getProductByTitle(@PathVariable String title) {
        Optional <Product> productOptional = productService.findByTitle(title);
        if (productOptional.isPresent()) {
            return ResponseEntity.ok(productOptional.orElseThrow());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping
    public ResponseEntity<?> createProducts(@Valid @RequestBody Product product, BindingResult result) {
        if(result.hasErrors()){
            return validation(result);
        }
        if(productService.existsByTitle(product.getTitle())) {
            return ResponseEntity.internalServerError().body("El título del producto ya existe");
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(productService.save(product));
    }
    
    @PutMapping("/{id}")
     public ResponseEntity<?> updateProduct(@Valid @RequestBody Product product, BindingResult result, @PathVariable Long id) { 
        if(result.hasErrors()){
            return validation(result);
        }  
        if(productService.existsByTitle(product.getTitle())) {
            return ResponseEntity.internalServerError().body("El título del producto ya existe");
        }
        Optional<Product> optionalProduct = productService.update (product, id);
        if (optionalProduct.isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(optionalProduct.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    } 
 
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        Optional <Product> userOptional = productService.findById(id);
        if (userOptional.isPresent()) {
            productService.delete(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }    

    private ResponseEntity<?> validation(BindingResult result) {
        Map<String, String> errors = new HashMap<>();
        result.getFieldErrors().forEach(err -> {
            errors.put(err.getField(),"El campo " + err.getField() + " " + err.getDefaultMessage());
         });
        return ResponseEntity.badRequest().body(errors);
    }

}
