import React, { createContext, useContext, useEffect, useState } from "react";
import jobService from "../services/jobService";
import { removeEmptyValue, removeNullItems } from "../utils/funcHelpers";

const JobContext = createContext({});

const JobProvider = ({ children }) => {
  const [dataJobs, setDataJobs] = useState([]);
  const [valueLocation, setValueLocation] = useState({});
  const [valueCareer, setValueCareer] = useState({});
  const [valueJobField, setValueJobField] = useState("");
  const [valueLevel, setValueLevel] = useState("");

  const handeLocationChange = (event) => {
    const { name, checked } = event.target;

    setValueLocation({
      ...valueLocation,
      [name]: checked ? event.target.value : "",
    });
  };
  const handeCareerChange = (event) => {
    const { name, checked } = event.target;

    setValueCareer({
      ...valueCareer,
      [name]: checked ? event.target.value : "",
    });
  };
  const handeJobFieldChange = (event) => {
    setValueJobField(event.target.value);
  };

  const handeLevelChange = (event) => {
    setValueLevel(event.target.value);
  };

  const getJobs = async () => {
    try {
      const searchParams = {
        jobAddress: removeNullItems(Object.values(valueLocation)),
        career: removeNullItems(Object.values(valueCareer)),
        jobField: valueJobField,
        level: valueLevel,
      };

      const response = await jobService.search(removeEmptyValue(searchParams));
      setDataJobs(response);
    } catch (error) {
      console.log("có lỗi", error);
    }
  };

  useEffect(() => {
    getJobs();
  }, [valueLevel, valueCareer, valueJobField, valueLocation]);

  const value = {
    dataJobs,
    valueLocation,
    valueCareer,
    valueJobField,
    valueLevel,
    handeLocationChange,
    handeCareerChange,
    handeJobFieldChange,
    handeLevelChange,
  };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

export const useJobContext = () => {
  const jobValue = useContext(JobContext);
  return jobValue;
};

export default JobProvider;
