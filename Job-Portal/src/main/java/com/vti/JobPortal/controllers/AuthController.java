package com.vti.JobPortal.controllers;

import com.vti.JobPortal.dto.SignUpDTO;
import com.vti.JobPortal.entity.Applicant;
import com.vti.JobPortal.entity.Employer;
import com.vti.JobPortal.jwt.JWTUtility;
import com.vti.JobPortal.repositories.IApplicantRepository;
import com.vti.JobPortal.repositories.IEmployerRepository;
import com.vti.JobPortal.requests.AuthRequest;
import com.vti.JobPortal.security.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final IEmployerRepository employerRepository;
    private final IApplicantRepository applicantRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTUtility jwtUtil;

    @Autowired
    public AuthController(IEmployerRepository employerRepository, IApplicantRepository applicantRepository, PasswordEncoder passwordEncoder, JWTUtility jwtUtil) {
        this.employerRepository = employerRepository;
        this.applicantRepository = applicantRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }


    @PostMapping("/employer/signup")
    public ResponseEntity<String> employerSignUp(@RequestBody SignUpDTO employerSignUpDTO) {
        if (employerRepository.findByEmail(employerSignUpDTO.getEmail()).isPresent()) {
            return new ResponseEntity<>("Email is already registered.", HttpStatus.BAD_REQUEST);
        }

        if (employerSignUpDTO.getCompanyName() == null || employerSignUpDTO.getCompanyAddress() == null || employerSignUpDTO.getCompanyField() == null) {
            return new ResponseEntity<>("Missing employer information.", HttpStatus.BAD_REQUEST);
        }

        Employer employer = new Employer();
        employer.setName(employerSignUpDTO.getName());
        employer.setEmail(employerSignUpDTO.getEmail());
        employer.setPhoneNumber(employerSignUpDTO.getPhoneNumber());
        employer.setPassword(employerSignUpDTO.getPassword());
        employer.setCompanyName(employerSignUpDTO.getCompanyName());
        employer.setCompanyAddress(employerSignUpDTO.getCompanyAddress());
        employer.setCompanyField(employerSignUpDTO.getCompanyField());

        employer.setPassword(passwordEncoder.encodePassword(employer.getPassword()));
        employerRepository.save(employer);

        return new ResponseEntity<>("Employer registered successfully.", HttpStatus.OK);
    }

    @PostMapping("/employer/signin")
    public ResponseEntity<String> employerSignIn(@RequestBody AuthRequest authRequest) {
        Optional<Employer> employerOptional = employerRepository.findByEmail(authRequest.getEmail());
        if (employerOptional.isEmpty()) {
            return new ResponseEntity<>("Invalid email or password.", HttpStatus.UNAUTHORIZED);
        }

        Employer employer = employerOptional.get();
        if (!passwordEncoder.matches(authRequest.getPassword(), employer.getPassword())) {
            return new ResponseEntity<>("Invalid email or password.", HttpStatus.UNAUTHORIZED);
        }

        // Generate JWT token
        String token = jwtUtil.generateTokenWithEmail(employer.getEmail());

        return new ResponseEntity<>(token, HttpStatus.OK);
    }

    @PostMapping("/applicant/signup")
    public ResponseEntity<String> applicantSignUp(@RequestBody SignUpDTO signUpDTO) {
        if (applicantRepository.findByEmail(signUpDTO.getEmail()).isPresent()) {
            return new ResponseEntity<>("Email is already registered.", HttpStatus.BAD_REQUEST);
        }

        Applicant applicant = new Applicant();
        applicant.setName(signUpDTO.getName());
        applicant.setEmail(signUpDTO.getEmail());
        applicant.setPhoneNumber(signUpDTO.getPhoneNumber());
        applicant.setPassword(signUpDTO.getPassword());

        applicant.setPassword(passwordEncoder.encodePassword(applicant.getPassword()));
        applicantRepository.save(applicant);

        return new ResponseEntity<>("Applicant registered successfully.", HttpStatus.OK);
    }

    @PostMapping("/applicant/signin")
    public ResponseEntity<String> applicantSignIn(@RequestBody AuthRequest authRequest) {
        Optional<Applicant> applicantOptional = applicantRepository.findByEmail(authRequest.getEmail());
        if (applicantOptional.isEmpty()) {
            return new ResponseEntity<>("Invalid email or password.", HttpStatus.UNAUTHORIZED);
        }

        Applicant applicant = applicantOptional.get();
        if (!passwordEncoder.matches(authRequest.getPassword(), applicant.getPassword())) {
            return new ResponseEntity<>("Invalid email or password.", HttpStatus.UNAUTHORIZED);
        }

        String token = jwtUtil.generateTokenWithEmail(applicant.getEmail());
        return new ResponseEntity<>(token, HttpStatus.OK);
    }
}
