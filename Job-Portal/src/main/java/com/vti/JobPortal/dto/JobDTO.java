package com.vti.JobPortal.dto;

import com.vti.JobPortal.entity.StatusJob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobDTO {
    private String level;
    private String title;
    private String jobField;
    private List<String> jobAddress;
    private String descriptionJob;
    private List<String> jobRequirement;
    private List<String> jobCareer;
    private List<String> skills;
    private Integer salary;
    private Integer views;
    private Date expiredDate;
    private Integer numberOfRecruitment;
    private Integer minimumYearsOfExperience;   // số năm kinh nghiệm tối thiểu
    private String maritalStatus;               // tình trạng hôn nhân
    private String minimumQualifications;       // bằng cấp tối thiểu
    private String workingTime;
    private String contactPerson;
    private String email;
    private String status;
    private String companyName;
    private String companyAddress;
    private String companyInformation;
    private String companySize;
    private String companyLogoPath;
    private String companyImagePath;

}