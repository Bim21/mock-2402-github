package com.vti.JobPortal.services;

import com.vti.JobPortal.entity.Employer;
import com.vti.JobPortal.repositories.IEmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployerService {
    private final IEmployerRepository employerRepository;

    @Autowired
    public EmployerService(IEmployerRepository employerRepository) {
        this.employerRepository = employerRepository;
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
}
