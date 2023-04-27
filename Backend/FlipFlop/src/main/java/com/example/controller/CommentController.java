/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.controller;

import com.example.entity.Comment;
import com.example.entity.Post;
import com.example.entity.User;
import com.example.repository.CommentRepository;
import com.example.repository.LikeRepository;
import com.example.repository.PostRepository;
import com.example.repository.UserRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/")
public class CommentController {
    
      @Autowired
      CommentRepository userRep;
       
      @Autowired
      LikeRepository userRepLike;
       
      @Autowired
      PostRepository userRepPost;
      
      @Autowired
      UserRepository userRepUser;
        
        
  @GetMapping("/Comments")
    public List<Comment> getAllComments() {

        return userRep.findAll();
    }
    
    /////creer un nouveau commentaire
    @PostMapping("/posts/{postId}/comments")
public ResponseEntity<?> createComment(@PathVariable("postId") Long postId, @RequestParam("userId") Long userId, @RequestParam("text") String texte) {
    Optional<Post> optionalPost = userRepPost.findById(postId);
    Optional<User> optionalUser = userRepUser.findById(userId);
    
    if (!optionalPost.isPresent() || !optionalUser.isPresent()) {
        // Si le post ou l'utilisateur n'existe pas, renvoyer une erreur
        return ResponseEntity.notFound().build();
    }
    
    Post post = optionalPost.get();
    User user = optionalUser.get();
    
    Comment comment = new Comment();
    comment.setPost(post);
    comment.setAuteur(user);
    comment.setTexte(texte);
    
    // Enregistrer le commentaire
    userRep.save(comment);
    
    return ResponseEntity.ok("Le commentaire a été créé avec succès!");
}
    
//// modifier le commentaire 
@PutMapping("/posts/{postId}/comments/{commentId}")
public ResponseEntity<?> updateComment(@PathVariable("postId") Long postId, @PathVariable("commentId") Long commentId, @RequestParam("text") String texte) {
    Optional<Post> optionalPost = userRepPost.findById(postId);
    Optional<Comment> optionalComment = userRep.findById(commentId);
    
    if (!optionalPost.isPresent() || !optionalComment.isPresent()) {
        // Si le post ou le commentaire n'existe pas, renvoyer une erreur
        return ResponseEntity.notFound().build();
    }
    
    Comment comment = optionalComment.get();
    
    // Mettre à jour le texte du commentaire
    comment.setTexte(texte);
    
    // Enregistrer les modifications du commentaire
    userRep.save(comment);
    
    return ResponseEntity.ok("Le commentaire a été mis à jour avec succès!");
}


///// supprimer le commentaire
@DeleteMapping("/posts/{postId}/comments/{commentId}")
public ResponseEntity<?> deleteComment(@PathVariable("postId") Long postId, @PathVariable("commentId") Long commentId) {
    Optional<Post> optionalPost = userRepPost.findById(postId);
    Optional<Comment> optionalComment = userRep.findById(commentId);
    
    if (!optionalPost.isPresent() || !optionalComment.isPresent()) {
        // Si le post ou le commentaire n'existe pas, renvoyer une erreur
        return ResponseEntity.notFound().build();
    }
    
    Comment comment = optionalComment.get();
    
    // Supprimer le commentaire
    userRep.delete(comment);
    
    return ResponseEntity.ok("Le commentaire a été supprimé avec succès!");
}
    
}
