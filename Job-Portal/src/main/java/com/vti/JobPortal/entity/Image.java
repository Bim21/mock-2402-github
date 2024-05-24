package com.vti.JobPortal.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Image {
    @Id
    private Long id;
    private byte[] data;

    @Transient
    public static final String SEQUENCE_NAME = "image_sequence";


}
