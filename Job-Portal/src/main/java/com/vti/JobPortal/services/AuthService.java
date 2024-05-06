package com.vti.JobPortal.services;

import com.vti.JobPortal.entity.User;
import com.vti.JobPortal.jwt.JWTUtility;
import com.vti.JobPortal.repositories.UserRepository;
import com.vti.JobPortal.security.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserRepository userRepository;

    @Autowired
    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public String loginWithEmailAndPassword(String email, String password) {
        User user = userRepository.findByEmail(email).orElse(null);
        assert user != null;
        if (PasswordEncoder.getInstance().matches(password, user.getPassword())) {
            return JWTUtility.getInstance().generateTokenWithEmail(email);
        }
        return null;
    }
}