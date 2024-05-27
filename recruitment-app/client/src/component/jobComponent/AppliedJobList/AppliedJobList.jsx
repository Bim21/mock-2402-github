import React, { useEffect, useState } from "react";
import AppliedJobItem from "./AppliedJobItem";
import jobList from "../../json/jobData.json";
import jobService from "../../../services/jobService";
import { getUserInfo } from "../../../utils/funcHelpers";

const objApi = {
  apply: jobService.getAppliedJobs,
  save: jobService.getSavedJobs,
  view: jobService.getViewedJobs,
};

// objApi.save
// objApi['save']

const AppliedJobList = ({ type }) => {
  const [dataList, setDataList] = useState([]);
  const userInfo = getUserInfo();

  const getDataList = async () => {
    console.log("call API");
    // try {
    //   const res = await objApi[type](id, userInfo?.id);
    //   console.log(res);
    //   setDataList(res);
    // } catch (error) {
    //   console.error("error");
    // }
  };

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <div>
      {jobList.map((item) => (
        <AppliedJobItem key={item.id} job={item} />
      ))}
    </div>
  );
};

export default AppliedJobList;
