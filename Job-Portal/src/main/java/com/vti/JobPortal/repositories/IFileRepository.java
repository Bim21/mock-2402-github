package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.File;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IFileRepository extends MongoRepository<File, Long> {
}
