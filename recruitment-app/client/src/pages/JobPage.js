import React, { useEffect, useState } from "react";
import JobContent from "../component/jobComponent/JobContent";
import Header from "../component/Header";
import Footer from "../component/Footer";
import jobService from "../services/jobService";
import JobProvider from "../contexts/JobProvider";

const JobPage = () => {
  const [dataJobs, setDataJobs] = useState([]);

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
        <JobProvider>
          <JobContent />
        </JobProvider>
        <Footer />
      </div>
    </div>
  );
};

export default JobPage;
