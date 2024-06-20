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
    private String email;
    private String password;
    private String phoneNumber;
    private ApplicantDetails details;
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
    }

}

