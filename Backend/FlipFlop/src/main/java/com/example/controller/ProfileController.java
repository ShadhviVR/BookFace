/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.controller;

import com.example.entity.Comment;
import com.example.entity.Image;
import com.example.entity.Post;
import com.example.entity.Profile;
import com.example.entity.User;
import com.example.exception.UserNotFoundException;
import com.example.repository.CommentRepository;
import com.example.repository.ImageRepository;
import com.example.repository.LikeRepository;
import com.example.repository.PostRepository;
import com.example.repository.ProfilRepository;
import com.example.repository.UserRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/")
public class ProfileController {
    
    
      @Autowired
      CommentRepository userRepComment;
      
       @Autowired
      ImageRepository userRepImage;
       
      @Autowired
      LikeRepository userRepLike;
       
      @Autowired
      PostRepository userRepPost;
      
      @Autowired
      UserRepository userRepUser;
      
        @Autowired
      ProfilRepository userRepProfil;
        
    
      // creer un profile d'un utilisateur
 
    /*  @PutMapping("/users/{userId}/profile")
public ResponseEntity<?> updateProfile(@PathVariable Long userId, @RequestBody Profile profileRequest) {
    Optional<User> optionalUser = userRepUser.findById(userId);

    if (!optionalUser.isPresent()) {
        // Si l'utilisateur n'existe pas, renvoyer une erreur
        return ResponseEntity.notFound().build();
    }

    User user = optionalUser.get();
    Profile profile = user.getProfile();

    if (profile == null) {
        // Si le profil n'existe pas, renvoyer une erreur
        return ResponseEntity.notFound().build();
    }

    // Mettre à jour les champs du profil
    profile.setFirstName(profileRequest.getFirstName());
    profile.setLastName(profileRequest.getLastName());

    if (profileRequest.getProfileImageUrl() != null) {
        // Si une nouvelle image de profil est spécifiée, enregistrer l'image dans le répertoire de stockage
        String fileName = StringUtils.cleanPath(profileRequest.getProfileImageUrl().getOriginalFilename());
        String fileExtension = FilenameUtils.getExtension(fileName);
        String newFileName = "profile-" + user.getId() + "." + fileExtension;
        String uploadDir = "user-photos/" + user.getId() + "/profile";

        FileUploadUtil.saveFile(uploadDir, newFileName, profileRequest.getProfileImageUrl());

        // Enregistrer l'URL de la nouvelle image de profil dans l'entité Profile
        String profileImageUrl = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/users/" + userId + "/profile-image/")
                .path(newFileName)
                .toUriString();

        profile.setProfileImageUrl(profileImageUrl);
    }

    profileRepository.save(profile);

    // Retourner le profil mis à jour dans la réponse
    return ResponseEntity.ok(profile);
}*/
   


     
}
