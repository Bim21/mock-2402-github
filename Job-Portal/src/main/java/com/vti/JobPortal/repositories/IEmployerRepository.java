package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.Employer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IEmployerRepository extends MongoRepository<Employer, String> {
}
