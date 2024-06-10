import React from "react";
import JobItem from "./JobItems";
import { useJobContext } from "../../contexts/JobProvider";

const ItemJob = () => {
  const { dataJobs } = useJobContext();
  console.log(dataJobs);
  return (
    <div className="flex w-full">
      <div className="flex flex-col gap-0 w-full">
        {dataJobs.map((job) => (
          <JobItem
            key={job.id}
            jobId={job.id}
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
