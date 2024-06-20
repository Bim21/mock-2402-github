package com.vti.JobPortal.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WorkExperience {
    private Long id;
    private String levelExp;
    private String companyName;
    private int yearOfExperience;
    private String description;

}