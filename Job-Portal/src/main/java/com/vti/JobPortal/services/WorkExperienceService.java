package com.vti.JobPortal.services;

import com.vti.JobPortal.entity.WorkExperience;
import com.vti.JobPortal.repositories.IWorkExperienceRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class WorkExperienceService {
    private final IWorkExperienceRepository workExperienceRepository;

    public WorkExperienceService(IWorkExperienceRepository workExperienceRepository) {
        this.workExperienceRepository = workExperienceRepository;
    }

    public Page<WorkExperience> getAllWorkExperiencesByPage(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return workExperienceRepository.findAll(pageable);
    }

    public WorkExperience createWorkExperience(WorkExperience workExperience) {
        return workExperienceRepository.save(workExperience);
    }

    public WorkExperience getWorkExperienceById(Long id) {
        return workExperienceRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Work Experience not found with id: " + id));
    }

    public WorkExperience updateWorkExperience(Long id, WorkExperience updatedWorkExperience) {
        WorkExperience workExperience = getWorkExperienceById(id);
        workExperience.setLevelExp(updatedWorkExperience.getLevelExp());
        workExperience.setCompanyName(updatedWorkExperience.getCompanyName());
        workExperience.setYearOfExperience(updatedWorkExperience.getYearOfExperience());
        workExperience.setDescription(updatedWorkExperience.getDescription());
        return workExperienceRepository.save(workExperience);
    }

    public void deleteWorkExperience(Long id) {
        WorkExperience workExperience = getWorkExperienceById(id);
        workExperienceRepository.delete(workExperience);
    }
}
