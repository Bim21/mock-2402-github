import React from 'react';
import { RiCheckboxCircleFill } from "react-icons/ri";

const Insurance = () => {
    return (
        <div className='w-full p-[2rem] flex flex-col'>
            <div className='w-full flex flex-row mb-[10px]'>
                <div className='basis-8/12 text-[18px] font-bold flex items-center'>Bảo Hiểm Sức Khỏe Cho Người Dùng VietnamWorks | Hợp tác cùng Tokio Marine Vietnam</div>
                <div className='basis-4/12 flex items-center'>
                    <img src='https://images.vietnamworks.com/tokio-marine.png' alt='logo' />
                </div>
            </div>
            <div className='w-full flex-grow'>
                <div className='font-semibold text-[13px]'>Bảo Hiểm Sức Khoẻ giá ưu đãi. Đăng ký nhận tư vấn ngay!</div>
                <div className='mt-[12px] leading-[16px] flex'>
                    <span className='mr-[4px]'>
                        <RiCheckboxCircleFill className='text-green-500' />
                    </span>
                    <span className='text-[13px] text-slate-600'>Mức phí tốt nhất chỉ từ 600.000 VND/năm</span>
                </div>
                <div className='mt-[12px] leading-[16px] flex '>
                    <span className='mr-[4px]'>
                        <RiCheckboxCircleFill className='text-green-500' />
                    </span>
                    <span className='text-[13px] text-slate-600'>Cung cấp bảo hiểm cho người thân: Cha Mẹ (lên tới 70 tuổi) và Con</span>
                </div>
                <div className='mt-[12px] leading-[16px] flex '>
                    <span className='mr-[4px]'>
                        <RiCheckboxCircleFill className='text-green-500' />
                    </span>
                    <span className='text-[13px] text-slate-600'>Vững vàng sức khoẻ, vững tâm sự nghiệp</span>
                </div>
            </div>
            <div className='mt-[20px]'>
                <button className='rounded-[8px] font-medium text-white h-[40px] w-[120px] text-[14px] leading-[20px] bg-orange-400 hover:bg-orange-300'>Đăng ký ngay!</button>
            </div>
        </div>
    );
};

export default Insurance;