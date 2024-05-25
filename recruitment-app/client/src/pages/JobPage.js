import React, { useEffect, useState } from "react";
import JobContent from "../component/jobComponent/JobContent";
import Header from "../component/Header";
import Footer from "../component/Footer";
import jobService from "../services/jobService";

const JobPage = () => {
  const [dataJobs, setDataJobs] = useState([]);
  console.log(dataJobs);

  const getJobs = async () => {
    try {
      const response = await jobService.getAll();
      setDataJobs(response);
    } catch (error) {
      console.log("có lỗi", error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center box-border bg-slate-50">
        <Header />
        <JobContent jobs={dataJobs} />
        <Footer />
      </div>
    </div>
  );
};

export default JobPage;
