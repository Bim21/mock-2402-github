package com.vti.JobPortal.services;

import com.vti.JobPortal.config.MailUtils;
import com.vti.JobPortal.entity.Applicant;
import com.vti.JobPortal.entity.Employer;
import com.vti.JobPortal.entity.Job;
import com.vti.JobPortal.entity.StatusJob;
import com.vti.JobPortal.repositories.IApplicantRepository;
import com.vti.JobPortal.repositories.IEmployerRepository;
import com.vti.JobPortal.repositories.IJobRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployerService {
    private final IEmployerRepository employerRepository;
    private final IApplicantRepository applicantRepository;
    private final IJobRepository jobRepository;
    private final MailUtils mailUtils;

    @Autowired
    public EmployerService(IEmployerRepository employerRepository, IApplicantRepository applicantRepository, IJobRepository jobRepository, MailUtils mailUtils) {
        this.employerRepository = employerRepository;
        this.applicantRepository = applicantRepository;
        this.jobRepository = jobRepository;
        this.mailUtils = mailUtils;
    }

    public List<Employer> getAllEmployers() {
        return employerRepository.findAll();
    }

    public Optional<Employer> getEmployerById(Long id) {
        return employerRepository.findById(id);
    }

    public Employer createEmployer(Employer employer) {
        return employerRepository.save(employer);
    }

    public Employer updateEmployer(Long id, Employer updatedEmployer) {
        Optional<Employer> existingEmployer = employerRepository.findById(id);
        if (existingEmployer.isPresent()) {
            updatedEmployer.setId(existingEmployer.get().getId());
            return employerRepository.save(updatedEmployer);
        }
        return null;
    }
    public boolean deleteEmployer(Long id) {
        Optional<Employer> employer = employerRepository.findById(id);
        if (employer.isPresent()) {
            employerRepository.deleteById(id);
            return true;
        }
        return false;
    }
    public void acceptJobApplication(Long applicantId) {
        Applicant applicant = applicantRepository.findById(applicantId)
                .orElseThrow(() -> new EntityNotFoundException("Applicant not found"));

        Job job = jobRepository.findByApplicantsId(applicantId)
                .stream()
                .findFirst()
                .orElseThrow(() -> new EntityNotFoundException("Job not found for the applicant"));

        applicant.setStatusJob(StatusJob.ACCEPT);
        applicantRepository.save(applicant);

        mailUtils.sendEmail(applicant.getEmail(), "Job Application Accepted", "Congratulations, your application for the job '" + job.getTitle() + "' has been accepted!");
    }

    public void rejectJobApplication(Long applicantId) {
        Applicant applicant = applicantRepository.findById(applicantId)
                .orElseThrow(() -> new EntityNotFoundException("Applicant not found"));

        Job job = jobRepository.findByApplicantsId(applicantId)
                .orElseThrow(() -> new EntityNotFoundException("Job not found for the applicant"));

        applicant.setStatusJob(StatusJob.REJECT);
        applicantRepository.save(applicant);

        mailUtils.sendEmail(applicant.getEmail(), "Job Application Rejected", "We regret to inform you that your application for the job '" + job.getTitle() + "' has been rejected.");
    }

    public List<Job> getJobsByEmployerId(Long employerId) {
        return jobRepository.findByEmployerId(employerId);
    }

//    public List<Applicant> getApplicantsWithAppliedJobs(Long employerId) {
//        Employer employer = employerRepository.findById(employerId)
//                .orElseThrow(() -> new EntityNotFoundException("Employer not found with id: " + employerId));
//
//        List<Applicant> applicantsWithAppliedJobs = new ArrayList<>();
//        for (Job job : employer.getJobs()) {
//            for (Applicant applicant : job.getApplicants()) {
//                if (!applicantsWithAppliedJobs.contains(applicant)) {
//                    applicantsWithAppliedJobs.add(applicant);
//                }
//            }
//        }
//
//        return applicantsWithAppliedJobs;
//    }
}
