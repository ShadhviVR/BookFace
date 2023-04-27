
package com.example.repository;

import com.example.entity.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends JpaRepository<User,Long>{

    public List<User> findByUsername(String username);

    public List<User> findByMail(String mail);
    
}
