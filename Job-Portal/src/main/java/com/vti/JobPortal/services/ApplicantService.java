package com.vti.JobPortal.services;

import com.vti.JobPortal.dto.ApplicantDetailsDTO;
import com.vti.JobPortal.entity.Applicant;
import com.vti.JobPortal.entity.ApplicantDetails;
import com.vti.JobPortal.repositories.IApplicantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicantService {
    private final IApplicantRepository applicantRepository;

    @Autowired
    public ApplicantService(IApplicantRepository applicantRepository) {
        this.applicantRepository = applicantRepository;
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

    public void updateApplicantDetails(Long applicantId, ApplicantDetails details) {
        Applicant applicant = applicantRepository.findById(applicantId).orElse(null);
        if (applicant != null) {
            applicant.setDetails(details);
            applicantRepository.save(applicant);
        } else {
            throw new IllegalArgumentException("Applicant not found.");
        }
    }
    public List<Applicant> getApplicantsByAppliedJobId(String jobId) {
        return applicantRepository.findByAppliedJobIdsContains(jobId);
    }
}