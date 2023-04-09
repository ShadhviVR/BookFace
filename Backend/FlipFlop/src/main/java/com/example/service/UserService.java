
@Service
package com.example.service;

import java.util.List;
import com.example.entity.User;

public interface UserService {

    User findById(Long id);

    User findByUsername(String username);

    List<User> findAll();

    boolean existsByUsername(String username);

    boolean existsByEmail(String mail);

    User save(User user);

    void deleteById(Long id);



}
