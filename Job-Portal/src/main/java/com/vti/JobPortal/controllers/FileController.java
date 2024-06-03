package com.vti.JobPortal.controllers;

import com.vti.JobPortal.entity.File;
import com.vti.JobPortal.services.FileService;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api/files")
public class FileController {
    private final FileService fileService;

    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {

        try {
            // Validate file type
            if (!file.getContentType().equals("application/pdf")) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Only PDF files are allowed.");
            }

            File savedFile = fileService.savePDF(file);
            return ResponseEntity.ok("File uploaded successfully. File ID: " + savedFile.getId());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload file.");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable("id") Long id) {
        Optional<File> optionalFile = fileService.getFile(id);
        if (optionalFile.isPresent()) {
            File file = optionalFile.get();
            // Set appropriate headers for file download
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_PDF);
//            headers.setContentDisposition(ContentDisposition.builder("attachment").filename("file.pdf").build());
            return new ResponseEntity<>(file.getData(), headers, HttpStatus.OK);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
