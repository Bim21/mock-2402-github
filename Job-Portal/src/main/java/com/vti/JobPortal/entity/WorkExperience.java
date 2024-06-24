package com.vti.JobPortal.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WorkExperience {
    @Id
    private Long id;
    private String levelExp;
    private String companyName;
    private int yearOfExperience;
    private String description;

}