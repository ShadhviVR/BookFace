package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.entity.User;
import com.example.service.UserService;

@Controller
public class EditProfile {

    @Autowired
    private UserService userService;

    // Affiche la page de modification de profil pour l'utilisateur actuellement connecté
    @GetMapping("/editProfile")
    public String showEditProfileForm(Model model) {
        // Récupère l'utilisateur actuellement connecté
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findByUsername(auth.getName());

        // Ajoute l'utilisateur à la vue et renvoie le nom de la vue
        model.addAttribute("user", user);
        return "editProfile";
    }

    // Met à jour les informations de profil de l'utilisateur
    @PostMapping("/editProfile")
    public String editProfile(@RequestParam String firstName,
                              @RequestParam String lastName,
                              @RequestParam String profilePhoto,
                              Model model) {
        // Récupère l'utilisateur actuellement connecté
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findByUsername(auth.getName());

        // Met à jour les informations de profil de l'utilisateur
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setProfilePhoto(profilePhoto);
        userService.save(user);

        // Ajoute un message de réussite à la page et renvoie la vue "success"
        model.addAttribute("message", "Profil mis à jour avec succès");
        return "success";
    }
}
