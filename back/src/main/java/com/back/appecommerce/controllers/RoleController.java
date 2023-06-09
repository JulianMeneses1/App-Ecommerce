
package com.back.appecommerce.controllers;

import com.back.appecommerce.models.entities.Category;
import com.back.appecommerce.models.entities.Role;
import com.back.appecommerce.services.RoleService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/roles")
public class RoleController {
    
    @Autowired
    private RoleService service;
    
    @GetMapping
    public List<Role> getRoles() {
        return service.findAll();
    }
    
    @PostMapping
    public Role createRole(Role role) {
        return service.save(role);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRole(@PathVariable Long id) {
        Optional <Role> roleOptional = service.findById(id);
        if (roleOptional.isPresent()) {
            service.delete(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    } 
}
