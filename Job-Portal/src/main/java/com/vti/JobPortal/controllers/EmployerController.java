package com.vti.JobPortal.controllers;
import com.vti.JobPortal.entity.Employer;
import com.vti.JobPortal.services.EmployerService;
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
@RequestMapping("/api/employers")
public class EmployerController {
    private final EmployerService employerService;

    @Autowired
    public EmployerController(EmployerService employerService) {
        this.employerService = employerService;
    }

    @GetMapping
    public ResponseEntity<List<Employer>> getAllEmployers() {
        List<Employer> employers = employerService.getAllEmployers();
        return new ResponseEntity<>(employers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employer> getEmployerById(@PathVariable("id") Long id) {
        Optional<Employer> employer = employerService.getEmployerById(id);
        return employer.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Employer> createEmployer(@RequestBody Employer employer) {
        Employer createdEmployer = employerService.createEmployer(employer);
        return new ResponseEntity<>(createdEmployer, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employer> updateEmployer(@PathVariable("id") Long id, @RequestBody Employer updatedEmployer) {
        Employer employer = employerService.updateEmployer(id, updatedEmployer);
        if (employer != null) {
            return new ResponseEntity<>(employer, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployer(@PathVariable("id") Long id) {
        boolean deleted = employerService.deleteEmployer(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/jobs/{jobId}/applicants/{applicantId}/accept")
    public void acceptJobApplication(@PathVariable Long jobId, @PathVariable Long applicantId) {
        employerService.acceptJobApplication(jobId, applicantId);
    }

    @PostMapping("/jobs/{jobId}/applicants/{applicantId}/reject")
    public void rejectJobApplication(@PathVariable Long jobId, @PathVariable Long applicantId) {
        employerService.rejectJobApplication(jobId, applicantId);
    }
}

