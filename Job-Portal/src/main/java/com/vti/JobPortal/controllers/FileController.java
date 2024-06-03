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
            com.vti.JobPortal.entity.File savedFile = fileService.savePDF(file);
            return ResponseEntity.ok(savedFile);
        } catch (IOException e) {
            // Handle the exception appropriately
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
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
