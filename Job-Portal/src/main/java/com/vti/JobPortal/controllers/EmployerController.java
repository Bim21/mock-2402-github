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
@RequestMapping("/api/employers")
public class EmployerController {

    @Autowired
    private EmployerService employerService;

    @GetMapping
    public ResponseEntity<List<Employer>> getAllEmployers() {
        List<Employer> employers = employerService.getAllEmployers();
        return new ResponseEntity<>(employers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employer> getEmployerById(@PathVariable String id) {
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
    public ResponseEntity<Employer> updateEmployer(@PathVariable String id, @RequestBody Employer updatedEmployer) {
        Employer updated = employerService.updateEmployer(id, updatedEmployer);
        if (updated != null) {
            return new ResponseEntity<>(updated, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployer(@PathVariable String id) {
        employerService.deleteEmployer(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
