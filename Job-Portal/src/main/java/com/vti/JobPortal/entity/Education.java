package com.vti.JobPortal.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Education {
    private Long id;
    private String specialize;
    private String schoolName;
    private String qualifications;
    private int yearOfStudy;
    private String achievement;

}
