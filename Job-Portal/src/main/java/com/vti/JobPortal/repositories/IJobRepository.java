package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.Job;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IJobRepository extends MongoRepository<Job, Long> {
}
