package com.vti.JobPortal.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "jobs")
public class Job {
    @Id
    private Long id;
    private String title;
    private Long employerId;
    private String description;
    private String requirementJob;
    private String skills;
    private String level;
    private Integer salary;
    private String workingTime;
    private String jobField;
    private String jobAddress;
    private Integer minimumYearsOfExperience;
    private String minimumQualifications;
    private String maritalStatus;
    private String minimumEducationalQualification;
    private Integer views;
    private String contactPerson;
    private String email;
    private Date postedDate;
    private Date expiredDate;
    private Employer employer;
    private List<Applicant> applicants;
    private String status;

    public void applyForJob(Applicant applicant){
        applicants.add(applicant);
    }
}