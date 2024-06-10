import React from "react";
import { CgCalendarDates } from "react-icons/cg";
import { GiStairsGoal } from "react-icons/gi";
import { IoIosFiling } from "react-icons/io";
import { DiReact } from "react-icons/di";

const Section6 = ({ jobs }) => {
  return (
    <div div class="flex w-full h-[auto] mb-[16px] mt-2 flex-col">
      <div className="w-full rounded-[6px] flex items-center justify-between  bg-White border-gray-200">
        <div className="text-[20px] font-bold">Thông tin việc làm</div>
      </div>
      <div className="flex ">
        <div div class="flex w-full h-auto flex-col gap-2 mt-5">
          <div className=" flex items-center justify-between ">
            <div className=" flex justify-center items-center  mr-[8px]">
              <CgCalendarDates />
            </div>
            <div className="flex flex-col w-full p-[4px]">
              <div className="text-gray-500">NGÀY ĐĂNG</div>
              <div>20/05/2024</div>
            </div>
          </div>

          <div className=" flex items-center justify-between ">
            <div className=" flex justify-center items-center  mr-[8px]">
              <IoIosFiling />
            </div>
            <div className="flex flex-col w-full p-[4px]">
              <div className="text-gray-500">NGÀNH NGHỀ</div>
              <div>{jobs.careerJob}</div>
            </div>
          </div>

          <div className=" flex items-center justify-between ">
            <div className=" flex justify-center items-center  mr-[8px]">
              <CgCalendarDates />
            </div>
            <div className="flex flex-col w-full p-[4px]">
              <div className="text-gray-500">LĨNH VỰC</div>
              <div>{jobs.jobField}</div>
            </div>
          </div>

          <div className=" flex items-center justify-between ">
            <div className=" flex justify-center items-center  mr-[8px]">
              <CgCalendarDates />
            </div>
            <div className="flex flex-col w-full p-[4px]">
              <div className="text-gray-500">SỐ NĂM KINH NGHIỆM TỐI THIỂU</div>
              <div>{jobs.minimumYearsOfExperience}</div>
            </div>
          </div>

          <div className=" flex items-center justify-between ">
            <div className=" flex justify-center items-center  mr-[8px]">
              <CgCalendarDates />
            </div>
            <div className="flex flex-col w-full p-[4px]">
              <div className="text-gray-500">TRÌNH ĐỘ HỌC VẤN TỐI THIỂU</div>
              <div>Không giới hạn</div>
            </div>
          </div>

          <div className=" flex items-center justify-between ">
            <div className=" flex justify-center items-center  mr-[8px]">
              <CgCalendarDates />
            </div>
            <div className="flex flex-col w-full p-[4px]">
              <div className="text-gray-500">ĐỘ TUỔI MONG MUỐN</div>
              <div>Không hiển thị</div>
            </div>
          </div>

          <div className=" flex items-center justify-between ">
            <div className=" flex justify-center items-center  mr-[8px]">
              <CgCalendarDates />
            </div>
            <div className="flex flex-col w-full p-[4px]">
              <div className="text-gray-500">SỐ LƯỢNG TUYỂN DỤNG</div>
              <div>Không hiển thị</div>
            </div>
          </div>
        </div>

        <div className=" flex w-full h-auto flex-col gap-2 mt-5 ">
          <div className=" flex items-center justify-between ">
            <div className=" flex justify-center items-center  mr-[8px]">
              <GiStairsGoal />
            </div>
            <div className="flex flex-col w-full p-[4px]">
              <div className="text-gray-500">CẤP BẬC</div>
              <div>{jobs.level}</div>
            </div>
          </div>

          <div className=" flex items-center justify-between ">
            <div className=" flex justify-center items-center  mr-[8px]">
              <DiReact />
            </div>
            <div className="flex flex-col w-full p-[4px]">
              <div className="text-gray-500">KỸ NĂNG</div>
              <div>{jobs.skills}</div>
            </div>
          </div>

          <div className=" flex items-center justify-between ">
            <div className=" flex justify-center items-center  mr-[8px]">
              <CgCalendarDates />
            </div>
            <div className="flex flex-col w-full p-[4px]">
              <div className="text-gray-500">NGÔN NGỮ TRÌNH BÀY HỒ SƠ</div>
              <div>Bất kỳ</div>
            </div>
          </div>

          <div className=" flex items-center justify-between ">
            <div className=" flex justify-center items-center  mr-[8px]">
              <CgCalendarDates />
            </div>
            <div className="flex flex-col w-full p-[4px]">
              <div className="text-gray-500">QUỐC TỊCH</div>
              <div>Không hiển thị</div>
            </div>
          </div>

          <div className=" flex items-center justify-between ">
            <div className=" flex justify-center items-center  mr-[8px]">
              <CgCalendarDates />
            </div>
            <div className="flex flex-col w-full p-[4px]">
              <div className="text-gray-500">GIỚI TÍNH</div>
              <div>Không hiển thị</div>
            </div>
          </div>

          <div className=" flex items-center justify-between ">
            <div className=" flex justify-center items-center  mr-[8px]">
              <CgCalendarDates />
            </div>
            <div className="flex flex-col w-full p-[4px]">
              <div className="text-gray-500">TÌNH TRẠNG HÔN NHÂN</div>
              <div>Không hiển thị</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
