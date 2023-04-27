
package com.example.controller;

import com.example.entity.Likes;
import com.example.entity.Post;
import com.example.entity.User;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/")
public class LikesController {
    
    
       @Autowired
    LikeRepository userRep;
       
      @Autowired
    PostRepository userRepPost;
      
      @Autowired
    UserRepository userRepUser;
        
        
  @GetMapping("/Likes")
    public List<Likes> getAllPosts() {

        return userRep.findAll();
    }
    
    
    
   ////creer un like  
    @PostMapping("/posts/{postId}/likes")
public ResponseEntity<?> createLike(@PathVariable("postId") Long postId, @RequestParam("userId") Long userId) {
    Optional<Post> optionalPost = userRepPost.findById(postId);
    Optional<User> optionalUser = userRepUser.findById(userId);
    
    if (!optionalPost.isPresent() || !optionalUser.isPresent()) {
        // Si le post ou l'utilisateur n'existe pas, renvoyer une erreur
        return ResponseEntity.notFound().build();
    }
    
    Post post = optionalPost.get();
    User user = optionalUser.get();
    
    Likes like = new Likes();
    like.setPost(post);
    like.setUser(user);
    
    // Enregistrer le like
   userRep.save(like);
    
    return ResponseEntity.ok("Le like a été créé avec succès!");
}


////////delete un like ou dislike 
@DeleteMapping("/posts/{postId}/likes/{likeId}")
public ResponseEntity<?> deleteLike(@PathVariable("postId") Long postId, @PathVariable("likeId") Long likeId) {
    Optional<Post> optionalPost = userRepPost.findById(postId);
    Optional<Likes> optionalLike = userRep.findById(likeId);
    
    if (!optionalPost.isPresent() || !optionalLike.isPresent()) {
        // Si le post ou le like n'existe pas, renvoyer une erreur
        return ResponseEntity.notFound().build();
    }
    
    Likes like = optionalLike.get();
    
    // Supprimer le like
    userRep.delete(like);
    
    return ResponseEntity.ok("Le like a été supprimé avec succès!");
}
    
}
