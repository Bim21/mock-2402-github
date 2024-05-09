package com.vti.JobPortal.services;

import com.vti.JobPortal.entity.Applicant;
import com.vti.JobPortal.repositories.IApplicantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service

public class ApplicantService {
    @Autowired
    private IApplicantRepository applicantRepository;

    public List<Applicant> getAllApplicants() {
        return applicantRepository.findAll();
    }

    public Optional<Applicant> getApplicantById(String id) {
        return applicantRepository.findById(id);
    }

    public Applicant createApplicant(Applicant applicant) {
        return applicantRepository.save(applicant);
    }

    public Applicant updateApplicant(String id, Applicant updatedApplicant) {
        Optional<Applicant> existingApplicantOptional = applicantRepository.findById(id);
        if (existingApplicantOptional.isPresent()) {
            Applicant existingApplicant = existingApplicantOptional.get();
            existingApplicant.setFullName(updatedApplicant.getFullName());
            existingApplicant.setEmail(updatedApplicant.getEmail());
            existingApplicant.setPassword(updatedApplicant.getPassword());
            existingApplicant.setSkills(updatedApplicant.getSkills());
            existingApplicant.setExperience(updatedApplicant.getExperience());
            existingApplicant.setEducation(updatedApplicant.getEducation());
            existingApplicant.setResume(updatedApplicant.getResume());
            return applicantRepository.save(existingApplicant);
        } else {
            // Handle error when applicant with given id does not exist
            return null;
        }
    }

    public void deleteApplicant(String id) {
        applicantRepository.deleteById(id);
    }
}
