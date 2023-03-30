
package com.example.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor
@Entity
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
     
    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String mail ;
    
    @Column(name = "first_name")
    private String firstName ;
    
    @Column(name = "last_name")
    private String lasttName ;
     
    @Column(name = "password")
    private String password ;
    
    private String confirmPassword;
    
    private String resetToken;
}
