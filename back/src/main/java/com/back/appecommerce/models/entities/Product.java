
package com.back.appecommerce.models.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table (name = "products")
@Getter @Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    @Size(min = 6, max = 150, message = "debe tener entre 6 y 150 caracteres")
    @Column (unique = true)
    private String title;  
    
    @NotBlank
    @Size(min = 20, max = 300, message = "debe tener entre 20 y 300 caracteres")
    @Column(length = 500)
    private String description;
    
    @NotNull
    private int price;
    
    @NotBlank
    private String image; 
    
    @ManyToOne
    @JoinColumn (name = "category_id")
    private Category category;
}
