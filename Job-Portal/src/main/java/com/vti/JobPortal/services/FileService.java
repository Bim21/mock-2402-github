package com.vti.JobPortal.services;

import com.vti.JobPortal.database.SequenceGeneratorService;
import com.vti.JobPortal.entity.File;
import com.vti.JobPortal.repositories.IFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class FileService {
    private final IFileRepository fileRepository;


    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    @Autowired
    public FileService(IFileRepository fileRepository) {
        this.fileRepository = fileRepository;
    }

    public File savePDF(MultipartFile file) throws IOException {
        byte[] data = file.getBytes();
        File pdfFile = new File();

        Long id = sequenceGeneratorService.generateSequence(File.SEQUENCE_NAME);
        pdfFile.setId(id);

        // Set other properties of the File object if applicable
        pdfFile.setFileName(file.getOriginalFilename());
        pdfFile.setContentType(file.getContentType());
        pdfFile.setData(data);
        return fileRepository.save(pdfFile);
    }



    public Optional<File> getFile(Long id) {
        return fileRepository.findById(id);
    }
}
