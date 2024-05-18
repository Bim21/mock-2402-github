package com.vti.JobPortal.services;

import com.vti.JobPortal.entity.Job;
import com.vti.JobPortal.repositories.IJobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobService {
    @Autowired
    private IJobRepository jobRepository;
    @Autowired
    private MongoTemplate mongoTemplate;
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public Optional<Job> getJobById(String id) {
        return jobRepository.findById(id);
    }

    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    public Job updateJob(String id, Job updatedJob) {
        Optional<Job> existingJobOptional = jobRepository.findById(id);
        if (existingJobOptional.isPresent()) {
            Job existingJob = existingJobOptional.get();
            existingJob.setTitle(updatedJob.getTitle());
            existingJob.setEmployerId(updatedJob.getEmployerId());
            existingJob.setDescription(updatedJob.getDescription());
            existingJob.setRequirements(updatedJob.getRequirements());
            existingJob.setLocation(updatedJob.getLocation());
            existingJob.setSalary(updatedJob.getSalary());
            existingJob.setPostedDate(updatedJob.getPostedDate());
            existingJob.setExpiredDate(updatedJob.getExpiredDate());
            existingJob.setViews(updatedJob.getViews());
            existingJob.setApplicants(updatedJob.getApplicants());
            existingJob.setStatus(updatedJob.getStatus());
            return jobRepository.save(existingJob);
        } else {
            // Handle error when job with given id does not exist
            return null;
        }
    }

    public List<Job> searchJobs(List<String> specialize, List<String> positions, List<String> locations) {
        return jobRepository.findBySpecializePositionAndLocation(specialize, positions, locations);
    }

    public void deleteJob(String id) {
        jobRepository.deleteById(id);
    }
}
