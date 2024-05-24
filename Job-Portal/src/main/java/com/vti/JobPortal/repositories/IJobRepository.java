package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.Job;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface IJobRepository extends MongoRepository<Job, Long> {
    @Query("{ 'jobField' : { $in: ?0 }, 'level' : { $in: ?1 }, 'jobAddress' : { $in: ?2 } }")
    List<Job> findByFieldLevelAndAddress(List<String> jobField, List<String> level, List<String> jobAddress);
}
