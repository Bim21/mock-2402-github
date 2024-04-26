import React from 'react';
import { BsSearch } from "react-icons/bs";

const ComSection1 = () => {
    return (
        <div className='w-full flex flex-col box-border'>
            <h1 className='text-[40px] font-bold mb-[8px]'>
                Khám Phá Văn Hóa Công Ty
            </h1>
            <p className='font-400 text-[14px] leading-[17px] mb-[24px]'>
                Tìm hiểu văn hoá công ty và chọn cho bạn nơi làm việc phù hợp nhất.</p>
            <div className='w-[70%] bg-blue-50 rounded-[6px] p-[8px] mb-[8px] flex justify-around'>
                <div className='flex rounded-[6px] border-solid border-[1px] bg-white border-gray-200 hover:border-blue-300 w-[83%]'>
                    <div className='h-[40px] w-[40px] flex justify-center items-center bg-white rounded-[6px]'>
                        <BsSearch className='text-gray-200' />
                    </div>
                    <input placeholder='Nhập tên công ty' className='w-full mr-[16px] text-[13px] border-transparent focus:outline-none focus:ring-0' />
                </div>
                <div className='w-[17%] pl-[8px] flex justify-center items-center'>
                    <button className='w-full font-normal rounded-[8px] pr-0 flex items-center justify-center text-[14px] h-[40px] leading-[20px] text-white bg-orange-400 hover:bg-orange-300'>
                        Tìm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComSection1;