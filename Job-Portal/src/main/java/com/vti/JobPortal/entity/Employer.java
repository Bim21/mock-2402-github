package com.vti.JobPortal.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "employers")
public class Employer {
    @Id
    private Long id;
    private String name;
    private String phoneNumber;
    private String email;
    private String password;
    private String companyName;
    private String companyAddress;
    private String contactPerson;
    private Integer companySize;
    private String companyInformation;
    private String companyField;
    private String companyLogoPath;
    private String companyImagePath;
    private List<Job> jobs;

}
