import React from 'react';
import JobItem from './JobItems';
import jsonData from '../json/jobData.json';


const ItemJob = () => {
  
    return (
      <div className='flex w-full'>
        <div className='flex flex-col gap-0 w-full'>
          {jsonData.map(job => (
            <JobItem key= {job.id} 
                companyLogo= {job.companyLogo}
                jobTitle= {job.jobTitle}
                companyName= {job.companyName}
                salary={job.salary}
                location={job.location}
                tags={job.tags}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ItemJob;