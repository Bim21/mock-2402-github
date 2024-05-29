import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";

const Section7 = () => {
  return (
    <div div class="flex w-full h-[auto] mb-[16px] mt-4 flex-col">
      <div className="w-full rounded-[6px] flex items-center justify-between  bg-White border-gray-200">
        <div className="text-[20px] font-bold">Địa điểm làm việc</div>
      </div>

      <div className="mt-5 flex flex-row gap-6">
        <div>
          <FaLocationDot />
        </div>

        <div>
          Đường Bào, Dương Tơ, Thành phố Phú Quốc, tỉnh Kiên Giang, Việt Nam
        </div>
      </div>

      <div className="mt-10 flex flex-row gap-2">
        <div>
          <IoMdPricetags />
        </div>
        <div>Từ khoá:</div>
      </div>

      <div className="flex flex-row gap-4">
        <button className="bg-white w-40 h-8 rounded-[6px] border-gray-600 border-[1px] mt-5">
          Kế Toán/kiểm toán
        </button>
        <button className="bg-white w-40 h-8 rounded-[6px] border-gray-600 border-[1px] mt-5">
          Kế Toán Tài Chính
        </button>
        <button className="bg-white w-60 h-8 rounded-[6px] border-gray-600 border-[1px] mt-5">
          Bất Động Sản/Cho Thuê
        </button>

        <button className="bg-white w-40 h-8 rounded-[6px] border-gray-600 border-[1px] mt-5">
          Kế Toán
        </button>

        <button className="bg-white w-80 h-8 rounded-[6px] border-gray-600 border-[1px] mt-5">
          Công Ty BIM Group Kiên Giang{" "}
        </button>
        <button className="bg-white w-40 h-8 rounded-[6px] border-gray-600 border-[1px] mt-5">
          {" "}
          Kiên Giang{" "}
        </button>
      </div>
    </div>
  );
};

export default Section7;
