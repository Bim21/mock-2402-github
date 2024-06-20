package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.WorkExperience;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IWorkExperienceRepository extends MongoRepository<WorkExperience, Long> {
}
