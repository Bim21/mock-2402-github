package com.vti.JobPortal.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Document(collection = "jobs")
public class Job {
    @Id
    private Long id;
    private String title;                       // nội dung công việc
    private Long employerId;
    private String description;                 // mô tả công việc
    private List<String> jobRequirement;        // Yêu cầu công việc
    private List<String> skills;                      // kỹ năng
    private String level;                       // cấp độ
    private Integer salary;                     // mức lương
    private String workingTime;                 // thời gian làm việc (part,full,free-lance)
    private String jobField;              // lĩnh vực công việc
    private Integer numberOfRecruitment;       // số lượng người ứng tuyển trong công việc.
    private List<String> careerJob;                   // Ngành nghề
    private List<String> jobAddress;            // địa chỉ job
    private Integer minimumYearsOfExperience;   // số năm kinh nghiệm tối thiểu
    private String maritalStatus;               // tình trạng hôn nhân
    private String minimumQualifications;       // bằng cấp tối thiểu
    private String minimumEducationalQualification;
    private Integer views;                      // số lượng ng xem job
    private String contactPerson;               // người liên hệ
    private String email;
    private Date postedDate;                    // ngày đăng
    private Date expiredDate;                   // ngày hết hạn
    private Employer employer;
    @DBRef
    @JsonIgnore
    private List<Applicant> applicants;
    private StatusJob statusJob = StatusJob.PENDING;

    public void addApplicant(Applicant applicant) {
        if (applicants == null) {
            applicants = new ArrayList<>(); // Initialize the list if it's null
        }
        if (!applicants.contains(applicant)) {
            applicants.add(applicant);
        }
    }
}