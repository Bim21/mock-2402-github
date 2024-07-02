package com.vti.JobPortal.services;

import com.vti.JobPortal.database.SequenceGeneratorService;
import com.vti.JobPortal.dto.JobDTO;
import com.vti.JobPortal.entity.Applicant;
import com.vti.JobPortal.entity.Employer;
import com.vti.JobPortal.entity.Job;
import com.vti.JobPortal.entity.StatusJob;
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
        job.setSkills(jobDTO.getSkills());
        job.setLevel(jobDTO.getLevel());
        job.setWorkingTime(jobDTO.getWorkingTime());
        job.setJobField(jobDTO.getJobField());
        job.setJobAddress(jobDTO.getJobAddress());
        job.setJobCareer(jobDTO.getJobCareer());
        job.setMinimumYearsOfExperience(jobDTO.getMinimumYearsOfExperience());
        job.setMinimumQualifications(jobDTO.getMinimumQualifications());
        job.setNumberOfRecruitment(jobDTO.getNumberOfRecruitment());
        job.setMaritalStatus("");
        job.setMinimumEducationalQualification("");
        job.setViews(0);
        job.setPostedDate(new Date());
        job.setApplicants(new ArrayList<>());
        job.setStatusJob(StatusJob.PENDING);
        job.setJobRequirement(jobDTO.getJobRequirement());
        job.setSalary(jobDTO.getSalary());
        job.setEmail(jobDTO.getEmail());
        job.setContactPerson(jobDTO.getContactPerson());
        employerRepository.save(employer);
//        employer.getJobs().add(job);
        job.setEmployer(employer);
        jobRepository.save(job);
    }

    private Long generateJobId() {
        SequenceGeneratorService sequenceGeneratorService = new SequenceGeneratorService(mongoOperations);
        return sequenceGeneratorService.generateSequence("job_sequence");
    }
//
//    public void applyForJob(Long jobId, Long applicantId) {
//        Job job = jobRepository.findById(jobId).orElseThrow(() -> new EntityNotFoundException("Job not found."));
//        Applicant applicant = applicantRepository.findById(applicantId).orElseThrow(() -> new EntityNotFoundException("Applicant not found."));
//
//        job.applyForJob(applicant);
//        jobRepository.save(job);
//    }

    public List<Applicant> getApplicantsForJob(Long jobId) {
        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new EntityNotFoundException("Job not found with id: " + jobId));

        return job.getApplicants();
    }

    public List<Job> getJobsByField(String jobField) {
        return jobRepository.findByJobFieldIn(jobField);
    }

    public List<Job> getJobsByAddress(List<String> jobAddress) {
        return jobRepository.findByJobAddressIn(jobAddress);
    }
    public List<Job> getJobsByLevel(String level){
        return jobRepository.findByLevel(level);
    }

    public List<Job> getJobsByCareerJob(List<String> jobCareer){
        return jobRepository.findByJobCareerIn(jobCareer);
    }

    public List<Job> getJobsByFieldAndAddress(String jobField, List<String> jobAddress){
        return jobRepository.findByJobFieldAndJobAddressIn(jobField, jobAddress);
    }

    public List<Job> getJobsByFieldAndLevel(String jobField, String level){
        return jobRepository.findByJobFieldAndLevel(jobField,level);
    }

    public List<Job> getJobsByFieldAndCareer(String jobField, List<String> jobCareer){
        return jobRepository.findByJobFieldAndJobCareerIn(jobField,jobCareer);
    }
    public List<Job> getJobsByFieldAndAddressAndLevel(String jobField, List<String> jobAddress, String level){
        return jobRepository.findByJobFieldAndJobAddressAndLevelIn(jobField,jobAddress,level);
    }

    public List<Job> getJobsByFieldAndLevelAndCareer(String jobField, String level, List<String> jobCareer){
        return jobRepository.findByJobFieldAndLevelAndJobCareerIn(jobField, level, jobCareer);
    }
    public List<Job> getJobsByFieldAndAddressAndCareer(String jobField, List<String> jobAddress, List<String> jobCareer){
        return jobRepository.findByJobFieldAndJobAddressAndJobCareerIn(jobField, jobAddress, jobCareer);
    }

    public List<Job> getJobsByAddressAndLevelAndCareer(List<String> jobAddress, String level, List<String> jobCareer){
        return jobRepository.findByJobAddressAndLevelAndJobCareerIn(jobAddress,level,jobCareer);
    }

    public List<Job> getJobsByAddressAndLevel(List<String> jobAddress, String level){
        return jobRepository.findByJobAddressAndLevelIn(jobAddress,level);
    }

    public List<Job> getJobsByAddressAndCareer(List<String> jobAddress, List<String> jobCareer){
        return jobRepository.findByJobAddressAndJobCareerIn(jobAddress,jobCareer);
    }
    public List<Job> getJobsByLevelAndCareer(String level, List<String> jobCareer){
        return jobRepository.findByLevelAndJobCareerIn(level,jobCareer);
    }
    public List<Job> getJobsByFieldAndAddressAndLevelAndCareerJob(String jobField, List<String> jobAddress, String level, List<String> jobCareer) {
        return jobRepository.findByJobFieldAndJobAddressAndLevelAndJobCareerIn(jobField,jobAddress,level, jobCareer);
    }

}