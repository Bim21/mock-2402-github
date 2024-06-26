import React, { useEffect, useState } from "react";
import AppliedJobItem from "./AppliedJobItem";
import jobList from "../../json/jobData.json";

import { getUserInfo } from "../../../utils/funcHelpers";
import applicantService from "../../../services/applicantService";

const objApi = {
  apply: applicantService.getAppliedJobs,
  save: applicantService.getSavedJobs,
  view: applicantService.getViewedJobs,
};

// objApi.save
// objApi['save']

const AppliedJobList = ({ type }) => {
  const [dataList, setDataList] = useState([]);
  const userInfo = getUserInfo();

  const getDataList = async () => {
    console.log("call API");
    try {
      const res = await objApi[type](userInfo?.id);
      console.log(res);
      setDataList(res);
    } catch (error) {
      console.error("error");
    }
  };

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <div>
      {dataList.map((item) => (
        <AppliedJobItem key={item.id} job={item} />
      ))}
    </div>
  );
};

export default AppliedJobList;
