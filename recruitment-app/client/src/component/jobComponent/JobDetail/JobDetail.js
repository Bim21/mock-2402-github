import React, { useEffect, useState } from "react";

import SectionJobDetail from "./SectionJobDetail ";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import { useParams } from "react-router-dom";
import jobService from "../../../services/jobService";

const JobDetail = () => {
  const { jobId } = useParams();
  const [jobs, setJobs] = useState({});
  console.log(jobId);
  console.log("jobs::::...", jobs);

  const getJob = async () => {
    try {
      const response = await jobService.getJobById(jobId);
      setJobs(response);
    } catch (error) {
      console.log("có lỗi", error);
    }
  };

  useEffect(() => {
    getJob();
  }, [jobId]);

  return (
    <div className="mt-[20px] box-border bg-slate-50">
      <div className="w-[1200px] px-[16px] mx-[auto] flex flex-col justify-start bg-slate-50">
        <SectionJobDetail jobs={jobs} />
        <Section3 jobs={jobs} />
        <Section4 />
        <Section5 />
        <Section6 jobs={jobs} />
      </div>
    </div>
  );
};

export default JobDetail;
