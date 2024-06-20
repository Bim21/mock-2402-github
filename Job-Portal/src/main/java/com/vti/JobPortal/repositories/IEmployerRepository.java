package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.Employer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IEmployerRepository extends MongoRepository<Employer, Long> {
    Optional<Employer> findByEmail(String email);

    Optional<Employer> findByUsername(String username);
}
