package com.vti.JobPortal.controllers;

import com.vti.JobPortal.config.MailUtils;
import com.vti.JobPortal.database.SequenceGeneratorService;
import com.vti.JobPortal.dto.SignInResponseDTO;
import com.vti.JobPortal.dto.SignUpDTO;
import com.vti.JobPortal.entity.Applicant;
import com.vti.JobPortal.entity.Employer;
import com.vti.JobPortal.entity.Role;
import com.vti.JobPortal.jwt.JWTUtility;
import com.vti.JobPortal.repositories.IApplicantRepository;
import com.vti.JobPortal.repositories.IEmployerRepository;
import com.vti.JobPortal.requests.AuthRequest;
import com.vti.JobPortal.security.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = {
        "http://150.95.108.21/"
})
@RequestMapping("/api/auth")
public class AuthController {
    private final IEmployerRepository employerRepository;
    private final IApplicantRepository applicantRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTUtility jwtUtil;
    private final MailUtils mailUtils;

    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;

    @Autowired
    public AuthController(IEmployerRepository employerRepository, IApplicantRepository applicantRepository, PasswordEncoder passwordEncoder, JWTUtility jwtUtil, MailUtils mailUtils) {
        this.employerRepository = employerRepository;
        this.applicantRepository = applicantRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
        this.mailUtils = mailUtils;
    }


    @PostMapping("/employer/signup")
    public ResponseEntity<String> employerSignUp(@RequestBody SignUpDTO employerSignUpDTO) {
        if (employerRepository.findByEmail(employerSignUpDTO.getEmail()).isPresent()) {
            return new ResponseEntity<>("Email is already registered.", HttpStatus.BAD_REQUEST);
        }

        if (employerSignUpDTO.getCompanyName() == null || employerSignUpDTO.getCompanyAddress() == null || employerSignUpDTO.getCompanyField() == null) {
            return new ResponseEntity<>("Missing employer information.", HttpStatus.BAD_REQUEST);
        }
        long nextId = sequenceGeneratorService.generateSequence("employer_sequence");
        Employer employer = new Employer();
        employer.setId(nextId);
        employer.setRole(Role.EMPLOYER);
        employer.setFirstName(employerSignUpDTO.getFirstName());
        employer.setLastName(employerSignUpDTO.getLastName());
        employer.setEmail(employerSignUpDTO.getEmail());
        employer.setPhoneNumber(employerSignUpDTO.getPhoneNumber());
        employer.setPassword(employerSignUpDTO.getPassword());
        employer.setCompanyName(employerSignUpDTO.getCompanyName());
        employer.setCompanyAddress(employerSignUpDTO.getCompanyAddress());
        employer.setCompanyField(employerSignUpDTO.getCompanyField());

        employer.setPassword(passwordEncoder.encodePassword(employer.getPassword()));
        employerRepository.save(employer);
        String emailContent = "Chào" + employer.getRole() + employer.getEmail() + "\n" + "Bạn vừa dùng email này để đăng ký tài khoản cho hệ thống MockTimViec\n" + "Tài khoản của bạn là: " + employer.getEmail() + "\n" + "Mật khẩu đăng nhập là: " + employer.getPassword() + "\n\n" + "Đây là email tự động, vui lòng không reply email này.\nCảm ơn.\n\n";
        mailUtils.sendEmail(employer.getEmail(), "Thư xác thực tài khoản", emailContent);
        return new ResponseEntity<>("Employer registered successfully.", HttpStatus.OK);
    }

    @PostMapping("/employer/signin")
    public ResponseEntity<SignInResponseDTO> employerSignIn(@RequestBody AuthRequest authRequest) {
        Optional<Employer> employerOptional = employerRepository.findByEmail(authRequest.getEmail());
        if (employerOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }

        Employer employer = employerOptional.get();
        if (!passwordEncoder.matches(authRequest.getPassword(), employer.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }

        // Generate JWT token
        String token = jwtUtil.generateTokenWithEmail(employer.getEmail());
        SignInResponseDTO responseDTO = new SignInResponseDTO();
        responseDTO.setId(employer.getId());
        responseDTO.setFirstName(employer.getFirstName());
        responseDTO.setLastName(employer.getLastName());
        responseDTO.setEmail(employer.getEmail());
        responseDTO.setPassword(employer.getPassword());
        responseDTO.setCompanyName(employer.getCompanyName());
        responseDTO.setCompanyAddress(employer.getCompanyAddress());
        responseDTO.setCompanyField(employer.getCompanyField());
        responseDTO.setToken(token);
        return ResponseEntity.ok(responseDTO);
    }

    @PostMapping("/applicant/signup")
    public ResponseEntity<String> applicantSignUp(@RequestBody SignUpDTO signUpDTO) {
        if (applicantRepository.findByEmail(signUpDTO.getEmail()).isPresent()) {
            return new ResponseEntity<>("Email is already registered.", HttpStatus.BAD_REQUEST);
        }
        long nextId = sequenceGeneratorService.generateSequence("applicant_sequence");

        Applicant applicant = new Applicant();
        applicant.setId(nextId);
        applicant.setRole(Role.APPLICANT);
        applicant.setFirstName(signUpDTO.getFirstName());
        applicant.setLastName(signUpDTO.getLastName());
        applicant.setEmail(signUpDTO.getEmail());
        applicant.setPhoneNumber(signUpDTO.getPhoneNumber());
        applicant.setPassword(signUpDTO.getPassword());

        applicant.setPassword(passwordEncoder.encodePassword(applicant.getPassword()));
        applicantRepository.save(applicant);
        String emailContent = "Chào" + applicant.getRole() + applicant.getEmail() + "\n" + "Bạn vừa dùng email này để đăng ký tài khoản cho hệ thống MockTimViec\n" + "Tài khoản của bạn là: " + applicant.getEmail() + "\n" + "Mật khẩu đăng nhập là: " + applicant.getPassword() + "\n\n" + "Đây là email tự động, vui lòng không reply email này.\nCảm ơn.\n\n";
        mailUtils.sendEmail(applicant.getEmail(), "Thư xác thực tài khoản", emailContent);

        return new ResponseEntity<>("Applicant registered successfully.", HttpStatus.OK);
    }

    @PostMapping("/applicant/signin")
    public ResponseEntity<SignInResponseDTO> applicantSignIn(@RequestBody AuthRequest authRequest) {
        Optional<Applicant> applicantOptional = applicantRepository.findByEmail(authRequest.getEmail());
        if (applicantOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }


        Applicant applicant = applicantOptional.get();
        if (!passwordEncoder.matches(authRequest.getPassword(), applicant.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }

        String token = jwtUtil.generateTokenWithEmail(applicant.getEmail());
        SignInResponseDTO responseDTO = new SignInResponseDTO();
        responseDTO.setId(applicant.getId());
        responseDTO.setFirstName(applicant.getFirstName());
        responseDTO.setLastName(applicant.getLastName());
        responseDTO.setEmail(applicant.getEmail());
        responseDTO.setPassword(applicant.getPassword());
        responseDTO.setToken(token);
        return ResponseEntity.ok(responseDTO);

    }

}
