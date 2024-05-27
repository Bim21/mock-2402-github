import React, { createContext, useContext, useEffect, useState } from "react";
import jobService from "../services/jobService";

const JobContext = createContext({});

const JobProvider = ({ children }) => {
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

  return <JobContext.Provider value={dataJobs}>{children}</JobContext.Provider>;
};

export const useJobContext = () => {
  const dataJobs = useContext(JobContext);
  return dataJobs;
};

export default JobProvider;
