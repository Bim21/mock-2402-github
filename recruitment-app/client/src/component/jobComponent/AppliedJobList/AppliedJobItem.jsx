import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const AppliedJobItem = ({ job }) => {
  console.log("jobdetai;l..", job);
  return (
    <div className="rounded-lg flex items-center border-[1px] border-blue-300 p-4 mb-[10px] bg-blue-50 hover:bg-white">
      <div className="bg-white rounded-lg w-24 h-24 flex items-center justify-center mr-4">
        <img
          src={
            job.companyLogo ??
            "https://cdn.vectorstock.com/i/500p/13/65/page-not-found-error-404-system-updates-vector-45961365.jpg"
          }
          alt="Company Logo"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-1 p-1">
        <div className="flex items-center">
          <span className="text-[16px] font-medium  hover:text-orange-400">
            <Link to={`/jobs/${job.id}`}>{job.title}</Link>
          </span>
        </div>
        <div className="text-sm hover:text-orange-400">
          {job.employer.companyName}
        </div>
        <span className="text-black">{job.jobAddress}</span>
        <div className="text-sm text-orange-400">${job.salary}</div>
      </div>
      {/* <button className="bg-orange-400 p-1 rounded-md text-white hover:bg-orange-300">
        + Ứng tuyển
      </button> */}
    </div>
  );
};

export default AppliedJobItem;
