
package com.back.appecommerce.models.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table (name = "users")
@Getter @Setter
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    @Size(min = 3, max = 15, message = "debe tener entre 3 y 15 caracteres")    
    private String name;
    
    @NotBlank
    @Size(min = 4, max = 15, message = "debe tener entre 3 y 15 caracteres") 
    private String lastName;
    
    @NotBlank
    @Pattern(regexp="^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,60}$", message= "debe tener mínimo 8 caracteres, incluyendo por lo menos 1 número y una mayúscula.")
    private String password;
    
    @NotBlank
    @Email
    @Column (unique = true)
    private String email;    
    
    @Transient
    private boolean admin;
    
    @ManyToMany
    @JoinTable(
            name= "users_roles", 
            joinColumns = @JoinColumn(name="user_id"),
            inverseJoinColumns = @JoinColumn(name="role_id"),
            uniqueConstraints = {@UniqueConstraint(columnNames = {"user_id","role_id"})})
    private List<Role> roles;
}
