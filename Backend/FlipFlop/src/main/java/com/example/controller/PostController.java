/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.controller;

import com.example.entity.Post;

import com.example.repository.PostRepository;
import java.util.List;
import java.util.Optional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/")
public class PostController {
    
      @Autowired
    PostRepository userRep;

    
      
    @GetMapping("/Posts")
    public List<Post> getAllPosts() {

        return userRep.findAll();
    }
    
    
    /// creer une nouvel post 
    @PostMapping("/new-post")
     public ResponseEntity<?> createClient(@Valid @RequestBody Post p, BindingResult result) {
    if (result.hasErrors()) {
        // Si une erreur de validation est détectée, renvoyer les erreurs dans la réponse
        return ResponseEntity.badRequest().body(result.getAllErrors());
    }
    
    if (p.getText() == null || p.getText().isEmpty()) {
        // Si le texte du post est vide, renvoyer une erreur
        return ResponseEntity.badRequest().body("Le texte du post ne peut pas être vide.");
    }
    
    if (p.getImages() == null || p.getImages().isEmpty()) {
        // Si le post ne contient pas d'image, renvoyer une erreur
        return ResponseEntity.badRequest().body("Le post doit contenir au moins une image.");
    }
    
    // Si tout est valide, enregistrer le post
    userRep.save(p);
    return ResponseEntity.ok("Le post a été enregistré avec succès!");
    
}
    /// modifier une post
    @PutMapping("/posts/{id}")
     public ResponseEntity<?> updatePost(@PathVariable("id") Long id, @Valid @RequestBody Post newPost, BindingResult result) {
    if (result.hasErrors()) {
        // Si une erreur de validation est détectée, renvoyer les erreurs dans la réponse
        return ResponseEntity.badRequest().body(result.getAllErrors());
    }
    
    Optional<Post> optionalPost = userRep.findById(id);
    if (!optionalPost.isPresent()) {
        // Si le post n'existe pas, renvoyer une erreur
        return ResponseEntity.notFound().build();
    }
    
    Post existingPost = optionalPost.get();
    existingPost.setText(newPost.getText());
    existingPost.setImages(newPost.getImages());
    
    // Mettre à jour le post existant
    userRep.save(existingPost);
    return ResponseEntity.ok("Le post a été mis à jour avec succès!");
}
     
     ////supprimer une post 
     @DeleteMapping("/posts/{id}")
     public ResponseEntity<?> deletePost(@PathVariable("id") Long id) {
    Optional<Post> optionalPost = userRep.findById(id);
    if (!optionalPost.isPresent()) {
        // Si le post n'existe pas, renvoyer une erreur
        return ResponseEntity.notFound().build();
    }

    Post post = optionalPost.get();
    userRep.delete(post);

    return ResponseEntity.ok("Le post a été supprimé avec succès!");
}
    
}
