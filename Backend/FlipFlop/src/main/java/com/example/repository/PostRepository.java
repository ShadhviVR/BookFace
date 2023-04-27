/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.repository;

import com.example.entity.Post;
import com.example.entity.User;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface PostRepository extends JpaRepository<Post,Long> {
    
    
     public List<Post> findBy(String text);

    public List<Post> findByLikesAuteur(User user);
    
}
