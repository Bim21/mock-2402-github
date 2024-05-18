import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the jobs!', error);
      });
  }, []);

  return (
    <div className='flex w-full'>
      <div className='flex flex-col gap-0 w-full'>
        <ul>
          {jobs.map(job => (
            <li key={job.id}>
              <h2>{job.title}</h2>
              <p>{job.description}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Posted Date:</strong> {new Date(job.postedDate).toLocaleDateString()}</p>
              <p><strong>Expired Date:</strong> {new Date(job.expiredDate).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemJob;