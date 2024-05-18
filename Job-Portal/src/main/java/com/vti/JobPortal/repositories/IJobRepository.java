package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IJobRepository extends MongoRepository<Job, String> {

}
