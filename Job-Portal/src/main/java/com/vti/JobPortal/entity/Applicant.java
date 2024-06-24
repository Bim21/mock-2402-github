package com.vti.JobPortal.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.vti.JobPortal.repositories.IJobRepository;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "applicants")
public class Applicant {
    @Id
    private Long id;
    private String firstName;
    private String lastName;
    private Role role;
    private String email;
    private String password;
    private String phoneNumber;
    private String level;
    private Integer yearsOfExperience;
    private String qualifications;
    private String title;
    private String career;
    private Integer salary;
    private Date dateOfBirth;
    private String sex;
    private String address;
    private String fileCV;
    private List<WorkExperience> workExperiences;
    private List<Education> educations;
    private List<Language> languages;
    private StatusJob statusJob;
    @DBRef
    @JsonIgnore
    private List<Job> appliedJobs;


    public void applyJob(Job job) {
        if (appliedJobs == null) {
            appliedJobs = new ArrayList<>(); // Initialize the list if it's null
        }
        if (!appliedJobs.contains(job)) {
            appliedJobs.add(job);
            job.addApplicant(this); // Add the applicant to the job's applicants list
        }
        this.setStatusJob(StatusJob.PENDING);
    }
}

