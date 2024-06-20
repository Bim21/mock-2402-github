package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.Language;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ILanguageRepository extends MongoRepository<Language, Long> {
}
