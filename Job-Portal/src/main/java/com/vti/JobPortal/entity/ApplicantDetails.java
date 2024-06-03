package com.vti.JobPortal.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApplicantDetails {
    private String level;
    private Integer yearsOfExperience;
    private String qualifications;
    private String career;
    private Integer salary;
    private Date dateOfBirth;
    private String country;
    private String sex;
    private String maritalStatus;
    private String address;
    private String fileCV;
    private String workObjective;
    private List<WorkExperience> workExperiences;
    private List<Education> educations;
    private List<Language> languages;

}
