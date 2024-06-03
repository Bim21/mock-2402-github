package com.vti.JobPortal.services;

import com.vti.JobPortal.database.SequenceGeneratorService;
import com.vti.JobPortal.dto.JobDTO;
import com.vti.JobPortal.entity.Applicant;
import com.vti.JobPortal.entity.Employer;
import com.vti.JobPortal.entity.Job;
import com.vti.JobPortal.repositories.IApplicantRepository;
import com.vti.JobPortal.repositories.IEmployerRepository;
import com.vti.JobPortal.repositories.IJobRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class JobService {
    private final IJobRepository jobRepository;
    private final IEmployerRepository employerRepository;
    private final MongoOperations mongoOperations;
    private final IApplicantRepository applicantRepository;

    @Autowired
    public JobService(IJobRepository jobRepository, IEmployerRepository employerRepository, MongoOperations mongoOperations, IApplicantRepository applicantRepository) {
        this.jobRepository = jobRepository;
        this.employerRepository = employerRepository;
        this.mongoOperations = mongoOperations;
        this.applicantRepository = applicantRepository;
    }

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public Optional<Job> getJobById(Long id) {
        return jobRepository.findById(id);
    }

    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    public Job updateJob(Long id, Job updatedJob) {
        Optional<Job> existingJob = jobRepository.findById(id);
        if (existingJob.isPresent()) {
            updatedJob.setId(existingJob.get().getId());
            return jobRepository.save(updatedJob);
        }
        return null;
    }

    public boolean deleteJob(Long id) {
        Optional<Job> job = jobRepository.findById(id);
        if (job.isPresent()) {
            jobRepository.deleteById(id);
            return true;
        }
        return false;
    }

//    public JobDTO showJobDetails(Long jobId) {
//        Optional<Job> jobOptional = jobRepository.findById(jobId);
//        if (jobOptional.isEmpty()) {
//            throw new EntityNotFoundException("Job not found.");
//        }
//
//        Job job = jobOptional.get();
//
//        JobDTO jobDTO = new JobDTO();
//        jobDTO.setLevel(job.getLevel());
//        jobDTO.setTitle(job.getTitle());
//        jobDTO.setSalary(job.getSalary());
//        jobDTO.setFieldJob(job.getJobField());
//        jobDTO.setAddressJob(job.getJobAddress());
//        jobDTO.setDescriptionJob(job.getDescription());
//        jobDTO.setRequirementJob(job.getRequirementJob());
//        jobDTO.setViews(jobDTO.getViews());
//
//        return jobDTO;
//    }

    public void postJob(JobDTO jobDTO, Long employerId) {
        Optional<Employer> employerOptional = employerRepository.findById(employerId);
        if (employerOptional.isEmpty()) {
            throw new EntityNotFoundException("Employer not found.");
        }

        Employer employer = employerOptional.get();

        Job job = new Job();
        job.setId(generateJobId());
        job.setTitle(jobDTO.getTitle());
        job.setEmployerId(employer.getId());
        job.setDescription(jobDTO.getDescriptionJob());
        job.setSkills("");
        job.setLevel(jobDTO.getLevel());
        job.setWorkingTime("");
        job.setJobField(jobDTO.getFieldJob());
        job.setJobAddress(jobDTO.getAddressJob());
        job.setMinimumYearsOfExperience(jobDTO.getNumberOfRecruitment());
        job.setMinimumQualifications("");
        job.setMaritalStatus("");
        job.setMinimumEducationalQualification("");
        job.setViews(0);
        job.setPostedDate(new Date());
        job.setEmployer(null);
        job.setApplicants(new ArrayList<>());
        job.setStatus("Active");
        job.setRequirementJob(jobDTO.getRequirementJob());
        job.setSalary(jobDTO.getSalary());
        job.setEmail(jobDTO.getEmail());
        job.setContactPerson(jobDTO.getContactPerson());

        employerRepository.save(employer);
        job.setEmployer(employer);
        jobRepository.save(job);
    }

    private Long generateJobId() {
        SequenceGeneratorService sequenceGeneratorService = new SequenceGeneratorService(mongoOperations);
        return sequenceGeneratorService.generateSequence("job_sequence");
    }

    public void applyForJob(Long jobId, Long applicantId) {
        Job job = jobRepository.findById(jobId).orElseThrow(() -> new EntityNotFoundException("Job not found."));
        Applicant applicant = applicantRepository.findById(applicantId).orElseThrow(() -> new EntityNotFoundException("Applicant not found."));

        job.applyForJob(applicant);
        jobRepository.save(job);
    }
    public List<Job> searchJobs(List<String> jobField, List<String> level, List<String> jobAddress){
        return jobRepository.findByFieldLevelAndAddress(jobField,level,jobAddress);
    }


}