package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.Applicant;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IApplicantRepository extends MongoRepository<Applicant, String> {
}
