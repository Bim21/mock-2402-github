package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.Applicant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IApplicantRepository extends MongoRepository<Applicant, Long> {
    Optional<Applicant> findByEmail(String email);

    List<Applicant> findByAppliedJobIdsContains(String jobId);
}
