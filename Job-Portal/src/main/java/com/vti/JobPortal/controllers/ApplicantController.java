package com.vti.JobPortal.controllers;
import com.vti.JobPortal.entity.Applicant;
import com.vti.JobPortal.entity.Job;
import com.vti.JobPortal.services.ApplicantService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = {
        "http://150.95.108.21/"
})
@RequestMapping("/api/applicants")
public class ApplicantController {
    private final ApplicantService applicantService;

    @Autowired
    public ApplicantController(ApplicantService applicantService) {
        this.applicantService = applicantService;
    }

    @GetMapping
    public ResponseEntity<List<Applicant>> getAllApplicants() {
        List<Applicant> applicants = applicantService.getAllApplicants();
        return new ResponseEntity<>(applicants, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Applicant> getApplicantById(@PathVariable("id") Long id) {
        Optional<Applicant> applicant = applicantService.getApplicantById(id);
        return applicant.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Applicant> createApplicant(@RequestBody Applicant applicant) {
        Applicant createdApplicant = applicantService.createApplicant(applicant);
        return new ResponseEntity<>(createdApplicant, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Applicant> updateApplicant(@PathVariable("id") Long id, @RequestBody Applicant updatedApplicant) {
        Applicant applicant = applicantService.updateApplicant(id, updatedApplicant);
        if (applicant != null) {
            return new ResponseEntity<>(applicant, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteApplicant(@PathVariable("id") Long id) {
        boolean deleted = applicantService.deleteApplicant(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

//    @PostMapping("/applicant/details/{applicantId}")
//    public Applicant updateApplicantDetails(@PathVariable Long applicantId, @RequestBody ApplicantDetails details) {
////        try {
////            applicantService.updateApplicantDetails(applicantId, details);
////
////            return ResponseEntity.ok("Applicant details updated successfully.");
////
////        } catch (IllegalArgumentException e) {
////            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Applicant not found.");
////        } catch (Exception e) {
////            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update applicant details.");
////        }
//        return applicantService.updateApplicantDetails(applicantId, details);
//    }

    @PostMapping("/{jobId}/apply/{applicantId}")
    public ResponseEntity<String> applyJob(@PathVariable Long jobId,@PathVariable Long applicantId) {
        try {
            applicantService.applyJob(jobId, applicantId);
            return ResponseEntity.ok("Job applied successfully.");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{applicantId}/applied-jobs")
    public ResponseEntity<List<Job>> getAppliedJobs(@PathVariable Long applicantId) {
        try {
            List<Job> appliedJobs = applicantService.getAppliedJobsForApplicant(applicantId);
            return ResponseEntity.ok(appliedJobs);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{applicantId}/jobs/{jobId}/save")
    public ResponseEntity<String> saveJob(@PathVariable Long applicantId, @PathVariable Long jobId) {
        try {
            applicantService.saveJob(applicantId, jobId);
            return ResponseEntity.ok("Job saved successfully.");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{applicantId}/jobs/saved")
    public ResponseEntity<List<Job>> getSavedJobs(@PathVariable Long applicantId) {
        try {
            List<Job> savedJobs = applicantService.getSavedJobsForApplicant(applicantId);
            return ResponseEntity.ok(savedJobs);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{applicantId}/jobs/{jobId}/view")
    public ResponseEntity<String> viewJob(@PathVariable Long applicantId, @PathVariable Long jobId) {
        try {
            applicantService.viewJob(applicantId, jobId);
            return ResponseEntity.ok("Job viewed successfully.");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{applicantId}/jobs/viewed")
    public ResponseEntity<List<Job>> getViewedJobs(@PathVariable Long applicantId) {
        try {
            List<Job> viewedJobs = applicantService.getViewedJobsForApplicant(applicantId);
            return ResponseEntity.ok(viewedJobs);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
}