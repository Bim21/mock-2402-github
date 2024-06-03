import React from "react";

const Section5 = () => {
  return (
    <div div class="flex w-full h-[150px] mb-[16px] mt-4">
      <div className="w-full rounded-[6px] flex items-center justify-between border-[1px] px-[10px] bg-gray-100 border-gray-200">
        <div className=" flex justify-center items-center w-[150px] mr-[10px]">
          <img
            src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fjob-detail%2Fcompetitive.png&w=256&q=75"
            alt=""
            // className='mx-[auto] w-[70px] h-[70px]'
          />
        </div>

        <div className="flex flex-col w-full p-[4px]">
          <div className="text-[20px] text-green-500 font-bold  ">
            Tỷ lệ cạnh tranh
          </div>
          <div className="text-[15px]  text-black  ">
            VietnamWorks tính toán tỷ lệ cạnh tranh của bạn dựa trên thông tin
            ứng tuyển của bạn và so sánh nó với các ứng viên khác cho công việc
            này sau khi bạn ứng tuyển.
          </div>
        </div>
        <button className="rounded-[8px] font-medium text-white h-[40px] w-[100px] text-[14px] leading-[20px] bg-orange-400 hover:bg-orange-300">
          Xem ngay
        </button>

        {/* <div className='leading-[18px] w-[200px] flex justify-center items-center '>
                    <button className='bg-slate-100 hover:bg-slate-200 h-[40px] rounded-[6px] flex items-center justify-center px-4 text-[14px]'>Nhận thông báo</button>
                </div> */}
      </div>
    </div>
  );
};

export default Section5;
