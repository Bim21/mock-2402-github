import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const SectionJobDetail = ({ jobs }) => {
  return (
    <div className="w-full p-[2rem] flex flex-col border-[1px] px-[10px] bg-gray-100 border-gray-200 rounded-[6px]">
      <div className="w-full flex flex-row mb-[10px]">
        <div className="basis-8/12 text-[18px] font-bold flex items-center">
          {jobs.title} - {jobs.jobAddress}
        </div>
      </div>
      <div className="w-full flex-grow">
        <div className="font-semibold text-[13px] text-orange-400">
          {jobs.salary}
        </div>
        <div className="mt-[12px] leading-[16px] flex">
          <span className="text-[16px] text-slate-600">
            Hết hạn trong 1 tháng | {jobs.views} lượt xem | {jobs.jobAddress}
          </span>
        </div>
      </div>
      <div className="mt-[20px] flex flex-row gap-6">
        <button className="rounded-[8px] font-medium text-white h-[40px] w-[600px] text-[14px] leading-[20px] bg-orange-400 hover:bg-orange-300">
          Nộp đơn
        </button>

        <div className="flex flex-row rounded-[8px]  font-medium text-black h-[40px] w-[300px] text-[14px] leading-[20px] bg-gray-200 border-gray-500 hover:bg-orange-300 justify-center items-center gap-3">
          <AiOutlineHeart className=" flex w-[24px] h-[24px] rounded-full hover:bg-blue-50 hover:cursor-pointer justify-center items-center" />
          <button>Lưu công việc này</button>
        </div>
      </div>
    </div>
  );
};

export default SectionJobDetail;
