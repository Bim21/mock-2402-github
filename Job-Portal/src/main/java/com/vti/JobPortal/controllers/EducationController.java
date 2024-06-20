package com.vti.JobPortal.controllers;

import com.vti.JobPortal.entity.Education;
import com.vti.JobPortal.services.EducationService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/educations")
public class EducationController {
    private final EducationService educationService;

    public EducationController(EducationService educationService) {
        this.educationService = educationService;
    }

    @PostMapping
    public ResponseEntity<Education> createEducation(@RequestBody Education education) {
        Education createdEducation = educationService.createEducation(education);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdEducation);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Education> getEducation(@PathVariable Long id) {
        Education education = educationService.getEducationById(id);
        return ResponseEntity.ok(education);
    }

    @GetMapping
    public ResponseEntity<Page<Education>> getAllEducationsByPage(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Page<Education> educations = educationService.getAllEducationsByPage(page, size);
        return ResponseEntity.ok(educations);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Education> updateEducation(@PathVariable Long id, @RequestBody Education updatedEducation) {
        Education updated = educationService.updateEducation(id, updatedEducation);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEducation(@PathVariable Long id) {
        educationService.deleteEducation(id);
        return ResponseEntity.noContent().build();
    }
}
