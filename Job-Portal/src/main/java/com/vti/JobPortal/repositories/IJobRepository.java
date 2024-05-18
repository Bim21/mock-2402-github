package com.vti.JobPortal.repositories;

import com.vti.JobPortal.entity.Job;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface IJobRepository extends MongoRepository<Job, String> {

    @Query("{ 'specialize' : { $in: ?0}, 'position' : { $in: ?1}, 'location' : {$in: ?2 }}")
    List<Job> findBySpecializePositionAndLocation(List<String> specializes, List<String> positions, List<String> locations);
}
