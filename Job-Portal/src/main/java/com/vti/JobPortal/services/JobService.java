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


    public List<Job> searchJobs(String keyword, String industry, String location, String salary) {
        Query query = new Query();

        // Xây dựng các tiêu chí tìm kiếm
        if (keyword != null && !keyword.isEmpty()) {
            Criteria keywordCriteria = new Criteria().orOperator(
                    Criteria.where("title").regex(keyword, "i"),
                    Criteria.where("description").regex(keyword, "i")
            );
            query.addCriteria(keywordCriteria);
        }

        if (industry != null && !industry.isEmpty()) {
            query.addCriteria(Criteria.where("industry").regex(industry, "i"));
        }

        if (location != null && !location.isEmpty()) {
            query.addCriteria(Criteria.where("location").regex(location, "i"));
        }

        if (salary != null && !salary.isEmpty()) {
            query.addCriteria(Criteria.where("salary").regex(salary, "i"));
        }

        return mongoTemplate.find(query, Job.class);
    }

    public void deleteJob(String id) {
        jobRepository.deleteById(id);
    }
}
