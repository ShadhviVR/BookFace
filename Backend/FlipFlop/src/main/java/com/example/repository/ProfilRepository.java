/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.repository;

import com.example.entity.Profile;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author MediaMonster
 */
public interface ProfilRepository  extends JpaRepository<Profile,Long> {
    
}
