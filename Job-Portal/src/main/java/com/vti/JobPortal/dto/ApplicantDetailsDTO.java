package com.vti.JobPortal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApplicantDetailsDTO {

    private Long applicantId;
    private String level;
    private Integer yearsOfExperience;
    private String qualifications;
    private String career;
    private Integer salary;
}
