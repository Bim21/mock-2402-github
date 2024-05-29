import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const JobItem = ({
  companyLogo,
  jobTitle,
  companyName,
  salary,
  location,
  tags,
  jobId,
}) => {
  const navigate = useNavigate();

  const handleClickSave = (event) => {
    event.stopPropagation();
    navigate(`/job-applied/save`);
  };

  const handleClickApply = (event) => {
    event.stopPropagation();
    navigate(`/job-applied/apply`);
  };

  return (
    <div className="rounded-lg flex items-center border-[1px] border-blue-300 p-4 mb-[10px] bg-blue-50 hover:bg-white">
      <div
        className="bg-white rounded-lg w-24 h-24 flex items-center justify-center mr-4"
        onClick={() => navigate(`/job-applied/view`)}
      >
        <img
          src={
            companyLogo ??
            "https://cdn.vectorstock.com/i/500p/13/65/page-not-found-error-404-system-updates-vector-45961365.jpg"
          }
          alt="Company Logo"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-1 p-1">
        <div className="flex items-center">
          <span className="text-blue-600 font-medium mr-1 rounded-md bg-blue-100 px-[4px] text-[12px]">
            Mới
          </span>
          <span className="text-[16px] font-medium  hover:text-orange-400">
            <Link to={`/jobs/${jobId}`}>{jobTitle}</Link>
          </span>
        </div>
        <div className="text-sm hover:text-orange-400">{companyName}</div>
        <div className="text-sm text-orange-400">
          {salary} <span className="text-black"> | {location}</span>
        </div>
        <div className="flex gap-1 text-[12px] text-slate-500">
          {tags.map((tag, index) => (
            <div key={index} className="bg-slate-200 rounded-md px-2">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="flex text-blue-500 flex-col items-end justify-around h-full">
        <AiOutlineHeart
          className="w-[24px] h-[24px] rounded-full hover:bg-blue-50 hover:cursor-pointer"
          onClick={handleClickSave}
        />
        <button
          className="bg-orange-400 p-1 rounded-md text-white hover:bg-orange-300"
          onClick={handleClickApply}
        >
          + Ứng tuyển
        </button>
      </div>
    </div>
  );
};

export default JobItem;
