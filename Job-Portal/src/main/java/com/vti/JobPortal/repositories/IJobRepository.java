package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.Job;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface IJobRepository extends MongoRepository<Job, Long> {
    List<Job> findByJobFieldAndJobAddress(String jobField, String jobAddress);
    List<Job> findByJobField(String jobField);
    List<Job> findByJobAddress(String jobAddress);
}
