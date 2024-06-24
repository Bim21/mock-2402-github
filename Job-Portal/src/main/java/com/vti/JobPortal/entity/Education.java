package com.vti.JobPortal.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Education {
    @Id
    private Long id;
    private String specialize;
    private String schoolName;
    private String qualifications;
    private int yearOfStudy;
    private String achievement;

}
