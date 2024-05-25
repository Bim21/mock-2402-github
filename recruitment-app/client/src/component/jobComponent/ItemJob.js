import React from "react";
import JobItem from "./JobItems";
import jsonData from "../json/jobData.json";

const ItemJob = (props) => {
  const jobs = props.jobs;
  console.log("jobs...", jobs);

  return (
    <div className="flex w-full">
      <div className="flex flex-col gap-0 w-full">
        {jobs.map((job) => (
          <JobItem
            key={job.id}
            companyLogo={job.employer.companyLogoPath}
            jobTitle={job.title}
            companyName={job.employer.companyName}
            salary={job.salary ?? "thương lượng"}
            location={job.jobAddress}
            tags={job.requirementJob ?? ["default 1", "default 2"]}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemJob;
