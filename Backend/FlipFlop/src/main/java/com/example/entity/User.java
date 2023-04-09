
package com.example.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//puisqu'il y a l'annotations, on ne doit pas ajouter les constructeur, getter et setter. Lombok les génénères autotmatiquement
@Data @NoArgsConstructor @AllArgsConstructor
@Entity
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//@column est utilisé pour spécifier le nom de la colonne dans la base de données.
//name = "username" spécifie que la propriété username de l'entité User doit être mappé
//à une colonne appelée username
    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String mail ;
    
    @Column(name = "first_name")
    private String firstName ;
    
    @Column(name = "last_name")
    private String lastName ;
     
    @Column(name = "password")
    private String password ;
    
    private String confirmPassword;
    
    private String resetToken;

    @Column(name = "profile_photo")
    private String profilePhoto; // stocke l'URL de l'image de profil.


}


