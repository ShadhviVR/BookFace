package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.example.entity.User;
import com.example.service.UserService;

@Controller
public class CreateProfile {

    @Autowired
    private UserService userService;

    @PostMapping("/createProfile")
    public String createProfile(@RequestParam String username,
                                @RequestParam String mail,
                                @RequestParam String firstName,
                                @RequestParam String lastName,
                                @RequestParam String password,
                                Model model) {
        // Vérifie si un utilisateur avec ce nom d'utilisateur ou cette adresse e-mail existe déjà dans la base de données
        if (userService.existsByUsername(username) || userService.existsByEmail(mail)) {
            model.addAttribute("error", "Cet utilisateur existe déjà");
            return "error";
        }

        // Vérifie si le mot de passe et le mot de passe de confirmation correspondent
        if (!password.equals(confirmPassword)) {
            model.addAttribute("error", "Le mot de passe et la confirmation de mot de passe ne correspondent pas");
            return "error";
        }

        // Crée un nouvel utilisateur et l'ajoute à la base de données
        User user = new User();
        user.setUsername(username);
        user.setMail(mail);
        user.setFirstName(firstName);
        user.setLasttName(lastName);
        user.setPassword(password);
        userService.save(user);
        // Ajoute un message de réussite à la page et renvoie la vue "success"
        model.addAttribute("message", "Utilisateur créé avec succès");
        return "success";
    }
}
