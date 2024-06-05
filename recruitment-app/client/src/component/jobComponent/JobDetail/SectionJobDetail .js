import { Button } from "antd/es/radio";
import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import ApplyModal from "./ApplyModal";
import { getUserInfo } from "../../../utils/funcHelpers";

const SectionJobDetail = ({ jobs }) => {
  const userInfo = getUserInfo();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isApply, setIsApply] = useState(true);
  const [formData, setFormData] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    gender: "",
    title: "",
    dob: "",
    degree: "",
    fieldJob: "",
    level: "",
    minimumYearsOfExperience: "",
    career: "",
    salary: "",
    phoneNumber: "",
    address: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    closeModal();
    setIsApply(false);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

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
      <div className="flex justify-between items-center mt-5 w-full">
        {isApply ? (
          <div className="w-[55%]">
            <button
              className="rounded-[8px] w-full font-medium text-white h-[40px] text-[14px] leading-[20px] bg-orange-400 hover:bg-orange-300"
              onClick={openModal}
            >
              <span className="font-bold">Nộp đơn</span>
            </button>
            <ApplyModal
              data={formData}
              isOpen={isOpenModal}
              handleChange={handleChange}
              onClose={closeModal}
              handleSubmit={handleSubmit}
              title={"Ứng tuyển"}
            />
          </div>
        ) : (
          <div className="w-[55%]">
            <button className="rounded-[8px] w-full font-medium text-white h-[40px] text-[14px] leading-[20px] bg-gray-400">
              <span className="font-bold">Đã nộp đơn</span>
            </button>
          </div>
        )}

        <div className="flex flex-row rounded-[8px] w-[40%] font-medium text-black h-[40px] text-[14px] leading-[20px] bg-gray-200 border-gray-500 hover:bg-orange-300 justify-center items-center gap-3">
          <AiOutlineHeart className=" flex w-[24px] h-[24px] rounded-full hover:bg-blue-50 hover:cursor-pointer justify-center items-center" />
          <button>Lưu công việc này</button>
        </div>
      </div>
    </div>
  );
};

export default SectionJobDetail;
