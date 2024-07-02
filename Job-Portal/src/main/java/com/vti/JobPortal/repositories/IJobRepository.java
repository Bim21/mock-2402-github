package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.Job;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface IJobRepository extends MongoRepository<Job, Long> {
    List<Job> findByJobFieldAndJobAddressAndLevelAndJobCareerIn(String jobField, List<String> jobAddress,String level, List<String> careerJob);
    List<Job> findByJobFieldIn(String jobField);
    List<Job> findByJobAddressIn(List<String> jobAddress);
    List<Job> findByLevel(String level);
    List<Job> findByJobCareerIn(List<String> careerJob);
    List<Job> findByJobFieldAndJobAddressIn(String jobField, List<String> jobAddress);
    List<Job> findByJobFieldAndLevel(String jobField, String level);
    List<Job> findByJobFieldAndJobCareerIn(String jobField, List<String> careerJob);
    List<Job> findByJobFieldAndJobAddressAndLevelIn(String jobField, List<String> jobAddress, String level);
    List<Job> findByJobFieldAndLevelAndJobCareerIn(String jobField, String level, List<String> careerJob);
    List<Job> findByJobFieldAndJobAddressAndJobCareerIn(String jobField, List<String> jobAddress, List<String> careerJob);
    List<Job> findByJobAddressAndLevelIn(List<String> jobAddress, String level);
    List<Job> findByJobAddressAndJobCareerIn(List<String> jobAddress, List<String> careerJob);
    List<Job> findByLevelAndJobCareerIn(String level, List<String> careerJob);

    List<Job> findByJobAddressAndLevelAndJobCareerIn(List<String> jobAddress, String level, List<String> careerJob);

    Optional<Job> findByApplicantsId(Long applicantId);

    List<Job> findByEmployerId(Long employerId);
}
