package com.vti.JobPortal.controllers;
import com.vti.JobPortal.dto.JobDTO;
import com.vti.JobPortal.entity.Job;
import com.vti.JobPortal.services.JobService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = {
        "http://150.95.108.21/"
})
@RequestMapping("/api/jobs")
public class JobController {
    private final JobService jobService;

    @Autowired
    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Job>> getAllJobs() {
        List<Job> jobs = jobService.getAllJobs();
        return new ResponseEntity<>(jobs, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Job> getJobById(@PathVariable("id") Long id) {
        Optional<Job> job = jobService.getJobById(id);
        return job.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/create")
    public ResponseEntity<Job> createJob(@RequestBody Job job) {
        Job createdJob = jobService.createJob(job);
        return new ResponseEntity<>(createdJob, HttpStatus.CREATED);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Job> updateJob(@PathVariable("id") Long id, @RequestBody Job updatedJob) {
        Job job = jobService.updateJob(id, updatedJob);
        if (job != null) {
            return new ResponseEntity<>(job, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable("id") Long id) {
        boolean deleted = jobService.deleteJob(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/postJob")
    public ResponseEntity<String> postJob(@RequestBody JobDTO jobDTO, @RequestParam("employerId") Long employerId) {
        try {
            jobService.postJob(jobDTO, employerId);
            return ResponseEntity.ok("Job posted successfully.");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.badRequest().body("Invalid employer ID.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while posting the job.");
        }
    }

    //oki , b nên tạ 2 API riêg bệt
    // API applyForJob đú b à, theo nhu b noi, FE dang hieu
//    @PostMapping("/{jobId}/applicants/{applicantId}")
//    public ResponseEntity<String> applyForJob(@PathVariable Long jobId, @PathVariable Long applicantId) {
//        jobService.applyForJob(jobId, applicantId);
//        return ResponseEntity.ok("Job application successful.");
//    }

    // API get list applyForJob
    // b tạ thêm cái này, trả ra data làjob đã apply

    @GetMapping("/search")
    public List<Job> searchJobs(
            @RequestParam(value = "jobField", required = false) String jobField,
            @RequestParam(value = "jobAddress", required = false) List<String> jobAddress,
            @RequestParam(value = "level", required = false) String level,
            @RequestParam(value = "career", required = false) List<String> jobCareer)

    {
        if (jobField == null && jobAddress == null && level == null && jobCareer == null ) {
            // Handle case when both jobField and jobAddress are missing
            return jobService.getAllJobs();
        } else if (jobField != null && jobAddress == null && level == null && jobCareer == null ) {
            // Handle case when only jobField is provided
            return jobService.getJobsByField(jobField);
        } else if (jobField == null && jobAddress != null && level == null && jobCareer == null) {
            // Handle case when only jobAddress is provided
            return jobService.getJobsByAddress(jobAddress);
        } else if (jobField == null && jobAddress == null && level != null && jobCareer == null) {
            return jobService.getJobsByLevel(level);
        } else if (jobField == null && jobAddress == null && level == null && jobCareer != null) {
            return jobService.getJobsByCareerJob(jobCareer);
        } else if (jobField != null && jobAddress != null && level == null && jobCareer == null) {
            return jobService.getJobsByFieldAndAddress(jobField,jobAddress);
        } else if (jobField != null && jobAddress != null && level != null && jobCareer == null) {
            return jobService.getJobsByFieldAndAddressAndLevel(jobField,jobAddress,level);
        } else if (jobField == null && jobAddress != null && level != null && jobCareer != null) {
            return jobService.getJobsByAddressAndLevelAndCareer(jobAddress, level, jobCareer);
        } else if (jobField != null && jobAddress == null && level != null && jobCareer != null) {
            return jobService.getJobsByFieldAndLevelAndCareer(jobField, level, jobCareer);
        } else if (jobField != null && jobAddress != null && level == null && jobCareer != null) {
            return jobService.getJobsByFieldAndAddressAndCareer(jobField, jobAddress, jobCareer);
        } else if (jobField == null && jobAddress != null && level != null && jobCareer == null) {
            return jobService.getJobsByAddressAndLevel(jobAddress, level);
        } else if (jobField == null && jobAddress != null && level == null && jobCareer != null) {
            return jobService.getJobsByAddressAndCareer(jobAddress, jobCareer);
        } else if (jobField == null && jobAddress == null && level != null && jobCareer != null) {
            return jobService.getJobsByLevelAndCareer(level, jobCareer);
        } else {
            // Handle case when both jobField and jobAddress are provided
            return jobService.getJobsByFieldAndAddressAndLevelAndCareerJob(jobField,jobAddress,level,jobCareer);
        }
    }

}