
package com.back.appecommerce.controllers;

import com.back.appecommerce.models.dto.UserDto;
import com.back.appecommerce.models.entities.User;
import com.back.appecommerce.models.request.UserRequest;
import com.back.appecommerce.services.UserService;
import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    private UserService service;
    
    @GetMapping
    public List<UserDto> getUsers() {
        return service.findAll();
    } 
    
    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        Optional <UserDto> userOptional = service.findById(id);
        if (userOptional.isPresent()) {
            return ResponseEntity.ok(userOptional.orElseThrow());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping
    public ResponseEntity<?> createUser(@Valid @RequestBody User user, BindingResult result) {
        if(result.hasErrors()){
            return validation(result);
        }
        if(service.existsByEmail(user.getEmail())) {
            return ResponseEntity.internalServerError().body("Ya existe un usuario con el email ingresado");
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(user));
    }
    
    @PutMapping("/{id}")
     public ResponseEntity<?> updateUser(@Valid @RequestBody UserRequest user, BindingResult result, @PathVariable Long id) { 
         if(result.hasErrors()){
            return validation(result);
        } 
        if(service.existsByEmail(user.getEmail())) {
            return ResponseEntity.internalServerError().body("Ya existe un usuario con el email ingresado");
        }
        Optional<UserDto> optionalUser = service.update (user, id);
        if (optionalUser.isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(optionalUser.orElseThrow());
        }
        return ResponseEntity.notFound().build();

    } 
 
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        Optional <UserDto> userOptional = service.findById(id);
        if (userOptional.isPresent()) {
            service.delete(id);
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
