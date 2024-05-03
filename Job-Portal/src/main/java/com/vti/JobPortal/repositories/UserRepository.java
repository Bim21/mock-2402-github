package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, Long> {
    Optional<User> findByEmail (String email);
    Optional<User> findByPhone (String phone);

}
