package com.vti.JobPortal.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "applicants")
public class Applicant {
    @Id
    private Long id;
    private String name;
    private String level;
    private Integer yearsOfExperience;
    private String qualifications;
    private String career;
    private Integer salary;
    private String email;
    private String password;
    private String phoneNumber;
    private Date dateOfBirth;
    private String country;
    private String sex;
    private String maritalStatus;
    private String address;
    private String fileCV;
    private ApplicantDetails details;

}
