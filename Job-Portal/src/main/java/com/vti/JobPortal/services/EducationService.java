package com.vti.JobPortal.services;

import com.vti.JobPortal.database.SequenceGeneratorService;
import com.vti.JobPortal.entity.Education;
import com.vti.JobPortal.repositories.IEducationRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class EducationService {
    private final IEducationRepository educationRepository;
    private final SequenceGeneratorService sequenceGeneratorService;

    @Autowired
    public EducationService(IEducationRepository educationRepository, SequenceGeneratorService sequenceGeneratorService) {
        this.educationRepository = educationRepository;
        this.sequenceGeneratorService = sequenceGeneratorService;
    }

    public Education createEducation(Education education) {
        long sequence = sequenceGeneratorService.generateSequence("education_sequence");
        education.setId(sequence);
        return educationRepository.save(education);
    }

    public Education getEducationById(Long id) {
        return educationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Education not found"));
    }

    public Page<Education> getAllEducationsByPage(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return educationRepository.findAll(pageable);
    }

    public Education updateEducation(Long id, Education updatedEducation) {
        Education existingEducation = getEducationById(id);
        existingEducation.setSpecialize(updatedEducation.getSpecialize());
        existingEducation.setSchoolName(updatedEducation.getSchoolName());
        existingEducation.setQualifications(updatedEducation.getQualifications());
        existingEducation.setYearOfStudy(updatedEducation.getYearOfStudy());
        existingEducation.setAchievement(updatedEducation.getAchievement());
        return educationRepository.save(existingEducation);
    }

    public void deleteEducation(Long id) {
        Education existingEducation = getEducationById(id);
        educationRepository.delete(existingEducation);
    }
}
