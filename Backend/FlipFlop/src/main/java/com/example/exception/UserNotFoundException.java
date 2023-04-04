/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.exception;


public class UserNotFoundException extends RuntimeException {
    
     public UserNotFoundException(Long id) {
        super("Could not found user with id:"+id);
    }
    
}
