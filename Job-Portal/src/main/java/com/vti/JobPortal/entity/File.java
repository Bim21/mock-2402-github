package com.vti.JobPortal.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "files")
public class File {
    @Id
    private Long id;
    private String fileName;
    private String contentType;
    private byte[] data;
    @Transient
    public static final String SEQUENCE_NAME = "file_sequence";

}
