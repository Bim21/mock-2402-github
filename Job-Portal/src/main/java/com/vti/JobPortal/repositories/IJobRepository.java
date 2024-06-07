package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.Job;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface IJobRepository extends MongoRepository<Job, Long> {
    List<Job> findByJobFieldAndJobAddressAndLevelAndCareerJob(List<String> jobField, List<String> jobAddress,String level, List<String> careerJob);
    List<Job> findByJobFieldIn(List<String> jobField);
    List<Job> findByJobAddressIn(List<String> jobAddress);
    List<Job> findByLevel(String level);
    List<Job> findByCareerJobIn(List<String> careerJob);
}
