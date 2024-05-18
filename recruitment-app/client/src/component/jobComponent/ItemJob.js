import React from 'react';
import JobItem from './JobItems';
import jsonData from '../json/jobData.json';


const ItemJob = ({jobs}) => {
    console.log("jobs...", jobs);
  
    return (
      <div className='flex w-full'>
        <div className='flex flex-col gap-0 w-full'>
          {jobs.map(job => (
            <JobItem key= {job.id} 
                companyLogo= {"https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fpictureofcompany%2F58%2F10395466.png&w=1920&q=75"}
                jobTitle= {job.title}
                companyName= {"FPT"}
                salary={job.salary}
                location={job.location}
                tags={job.requirements}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ItemJob;