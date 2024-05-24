package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.Image;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ImageRepository extends MongoRepository<Image, Long> {

}
