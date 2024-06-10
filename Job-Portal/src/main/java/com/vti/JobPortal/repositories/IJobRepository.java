package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.Job;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface IJobRepository extends MongoRepository<Job, Long> {
    List<Job> findByJobFieldAndJobAddressAndLevelAndCareerJobIn(String jobField, List<String> jobAddress,String level, List<String> careerJob);
    List<Job> findByJobFieldIn(String jobField);
    List<Job> findByJobAddressIn(List<String> jobAddress);
    List<Job> findByLevel(String level);
    List<Job> findByCareerJobIn(List<String> careerJob);
    List<Job> findByJobFieldAndJobAddressIn(String jobField, List<String> jobAddress);
    List<Job> findByJobFieldAndLevel(String jobField, String level);
    List<Job> findByJobFieldAndCareerJobIn(String jobField, List<String> careerJob);
    List<Job> findByJobFieldAndJobAddressAndLevelIn(String jobField, List<String> jobAddress, String level);
    List<Job> findByJobFieldAndLevelAndCareerJobIn(String jobField, String level, List<String> careerJob);
    List<Job> findByJobFieldAndJobAddressAndCareerJobIn(String jobField, List<String> jobAddress, List<String> careerJob);
    List<Job> findByJobAddressAndLevelIn(List<String> jobAddress, String level);
    List<Job> findByJobAddressAndCareerJobIn(List<String> jobAddress, List<String> careerJob);
    List<Job> findByLevelAndCareerJobIn(String level, List<String> careerJob);

    List<Job> findByJobAddressAndLevelAndCareerJobIn(List<String> jobAddress, String level, List<String> careerJob);
}
