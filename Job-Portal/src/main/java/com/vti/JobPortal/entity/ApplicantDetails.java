package com.vti.JobPortal.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApplicantDetails {
    private String workObjective;
    private List<WorkExperience> workExperiences;
    private List<Education> educations;
    private List<Language> languages;

}
