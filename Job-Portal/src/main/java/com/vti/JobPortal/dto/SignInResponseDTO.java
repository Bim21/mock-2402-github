package com.vti.JobPortal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignInResponseDTO {
    private String name;
    private String email;
    private String password;
    private String companyName;
    private String companyAddress;
    private String companyField;
}
