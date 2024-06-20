package com.vti.JobPortal.controllers;

import com.vti.JobPortal.entity.WorkExperience;
import com.vti.JobPortal.services.WorkExperienceService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/work-experiences")
public class WorkExperienceController {
    private final WorkExperienceService workExperienceService;

    public WorkExperienceController(WorkExperienceService workExperienceService) {
        this.workExperienceService = workExperienceService;
    }
    @GetMapping
    public ResponseEntity<Page<WorkExperience>> getAllWorkExperiencesByPage(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Page<WorkExperience> workExperiences = workExperienceService.getAllWorkExperiencesByPage(page, size);
        return ResponseEntity.ok(workExperiences);
    }
    @PostMapping
    public ResponseEntity<WorkExperience> createWorkExperience(@RequestBody WorkExperience workExperience) {
        WorkExperience createdWorkExperience = workExperienceService.createWorkExperience(workExperience);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdWorkExperience);
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkExperience> getWorkExperience(@PathVariable Long id) {
        WorkExperience workExperience = workExperienceService.getWorkExperienceById(id);
        return ResponseEntity.ok(workExperience);
    }

    @PutMapping("/{id}")
    public ResponseEntity<WorkExperience> updateWorkExperience(
            @PathVariable Long id, @RequestBody WorkExperience updatedWorkExperience) {
        WorkExperience updated = workExperienceService.updateWorkExperience(id, updatedWorkExperience);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWorkExperience(@PathVariable Long id) {
        workExperienceService.deleteWorkExperience(id);
        return ResponseEntity.noContent().build();
    }
}