package com.vti.JobPortal.services;

import com.vti.JobPortal.entity.Employer;
import com.vti.JobPortal.repositories.IEmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployerService {
    @Autowired
    private IEmployerRepository employerRepository;

    public List<Employer> getAllEmployers() {
        return employerRepository.findAll();
    }

    public Optional<Employer> getEmployerById(String id) {
        return employerRepository.findById(id);
    }

    public Employer createEmployer(Employer employer) {
        return employerRepository.save(employer);
    }

    public Employer updateEmployer(String id, Employer updatedEmployer) {
        Optional<Employer> existingEmployerOptional = employerRepository.findById(id);
        if (existingEmployerOptional.isPresent()) {
            Employer existingEmployer = existingEmployerOptional.get();
            existingEmployer.setCompanyName(updatedEmployer.getCompanyName());
            existingEmployer.setIndustry(updatedEmployer.getIndustry());
            existingEmployer.setCompanySize(updatedEmployer.getCompanySize());
            existingEmployer.setLocation(updatedEmployer.getLocation());
            existingEmployer.setWebsite(updatedEmployer.getWebsite());
            existingEmployer.setContactPerson(updatedEmployer.getContactPerson());
            existingEmployer.setContactEmail(updatedEmployer.getContactEmail());
            existingEmployer.setContactPhone(updatedEmployer.getContactPhone());
            existingEmployer.setDescription(updatedEmployer.getDescription());
            return employerRepository.save(existingEmployer);
        } else {
            // Handle error when employer with given id does not exist
            return null;
        }
    }

    public void deleteEmployer(String id) {
        employerRepository.deleteById(id);
    }
}
