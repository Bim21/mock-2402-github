package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.Education;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IEducationRepository extends MongoRepository<Education, Long> {
}
