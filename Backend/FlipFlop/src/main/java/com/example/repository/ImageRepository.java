/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.repository;

import com.example.entity.Comment;
import com.example.entity.Image;
import com.example.entity.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author MediaMonster
 */
public interface ImageRepository extends JpaRepository<Image,Long>{

    public List<Image> findByAuteur(User user);
    
}
