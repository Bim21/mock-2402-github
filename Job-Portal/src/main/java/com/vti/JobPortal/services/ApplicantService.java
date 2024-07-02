package com.vti.JobPortal.services;

import com.vti.JobPortal.entity.Applicant;
import com.vti.JobPortal.entity.Job;
import com.vti.JobPortal.repositories.IApplicantRepository;
import com.vti.JobPortal.repositories.IJobRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicantService {
    private final IApplicantRepository applicantRepository;
    private final IJobRepository jobRepository;
    @Autowired
    public ApplicantService(IApplicantRepository applicantRepository, IJobRepository jobRepository) {
        this.applicantRepository = applicantRepository;
        this.jobRepository = jobRepository;
    }

    public List<Applicant> getAllApplicants() {
        return applicantRepository.findAll();
    }

    public Optional<Applicant> getApplicantById(Long id) {
        return applicantRepository.findById(id);
    }

    public Applicant createApplicant(Applicant applicant) {
        return applicantRepository.save(applicant);
    }

    public Applicant updateApplicant(Long id, Applicant updatedApplicant) {
        Optional<Applicant> existingApplicant = applicantRepository.findById(id);
        if (existingApplicant.isPresent()) {
            updatedApplicant.setId(existingApplicant.get().getId());
            return applicantRepository.save(updatedApplicant);
        }
        return null;
    }

    public boolean deleteApplicant(Long id) {
        Optional<Applicant> applicant = applicantRepository.findById(id);
        if (applicant.isPresent()) {
            applicantRepository.deleteById(id);
            return true;
        }
        return false;
    }

//    public Applicant updateApplicantDetails(Long applicantId, ApplicantDetails details) {
//        Applicant applicant = applicantRepository.findById(applicantId).orElse(null);
//        if (applicant != null) {
//            applicant.setDetails(details);
//            applicantRepository.save(applicant);
//        } else {
//            throw new IllegalArgumentException("Applicant not found.");
//        }
//        return details;
//    }

    public void applyJob(Long jobId, Long applicantId) {
        Applicant applicant = applicantRepository.findById(applicantId)
                .orElseThrow(() -> new EntityNotFoundException("Applicant not found."));

        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new EntityNotFoundException("Job not found."));

        applicant.applyJob(job);
        applicantRepository.save(applicant);
        jobRepository.save(job);
    }

    public List<Job> getAppliedJobsForApplicant(Long applicantId) {
        Applicant applicant = applicantRepository.findById(applicantId)
                .orElseThrow(() -> new EntityNotFoundException("Applicant not found."));

        return applicant.getAppliedJobs();
    }

    public void saveJob(Long applicantId, Long jobId) {
        Applicant applicant = applicantRepository.findById(applicantId)
                .orElseThrow(() -> new EntityNotFoundException("Applicant not found."));

        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new EntityNotFoundException("Job not found."));

        applicant.saveJob(job);
        applicantRepository.save(applicant);
    }

    public List<Job> getSavedJobsForApplicant(Long applicantId) {
        Applicant applicant = applicantRepository.findById(applicantId)
                .orElseThrow(() -> new EntityNotFoundException("Applicant not found."));

        return applicant.getSavedJobs();
    }

    public void viewJob(Long applicantId, Long jobId) {
        Applicant applicant = applicantRepository.findById(applicantId)
                .orElseThrow(() -> new EntityNotFoundException("Applicant not found."));

        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new EntityNotFoundException("Job not found."));

        applicant.viewJob(job);
        applicantRepository.save(applicant);
    }
    public List<Job> getViewedJobsForApplicant(Long applicantId) {
        Applicant applicant = applicantRepository.findById(applicantId)
                .orElseThrow(() -> new EntityNotFoundException("Applicant not found."));

        return applicant.getViewedJobs();
    }
}