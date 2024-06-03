import React, { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5";
import { LiaLanguageSolid } from "react-icons/lia";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";




const ApplicantHeader = () => {
    return (
        <div className="w-full min-h-[64px] bg-blue-800 flex items-center">
            <div className="flex ml-2">
                <a href="/" title="Home Page">
                    <img
                        src="https://www.vietnamworks.com/assets-page-container/images/vnw_empower_growth_logo_white.png"
                        alt=""
                        className="w-[167px] h-[40]"
                    />
                </a>
            </div>


            <div className="w-[1000px]">
                <div className='flex rounded-[32px] bg-white ml-56 '>
                    <div className='w-full flex'>
                        <div className='inline-flex pl-[16px] justify-center items-center w-full'>
                            <button className='mr-[10px]'>
                                <BsSearch />
                            </button>
                            <div className='flex w-full'>
                                <input type='text' className='h-[48px] rounded-[32px] text-[15px] w-full pl-[10px] border-transparent focus:outline-none focus:ring-0'
                                    placeholder='Tìm Kiếm Việc Làm'></input>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="flex ml-5">
                <a href="/" title="Home Page">
                    <img
                        src="https://vietnamworks.com/assets-page-container/images/vnw_intech_logo_white.svg?ver=412.png"
                        alt=""
                        className="w-[167px] h-[40]"
                    />
                </a>
            </div>



            <div className="w-48  text-[16px] flex justify-center items-center  rounded-[95px] border-solid border-2 gap-x-[8px] border-blue-500 text-white ml-3">
                <IoMenuOutline className="text-white h-7 w-7" />
                Tất cả danh mục
            </div>

            <div className=" w-36 h-8 text-[16px] flex justify-center items-center  rounded-[95px] border-solid border-2 gap-x-[8px] border-blue-500 text-white ml-3 mr-3"> 
                Nhà tuyển dụng
            </div>


            <div className=" flex justify-center items-center p-[7px] rounded-[95px] border-solid border-2 gap-x-[8px] border-blue-500 text-white ml-28"> 
            <LiaLanguageSolid className="bg-blue-800 text-blue-300 hover:text-white rounded-[95px] w-[24px] h-full" />
            <IoIosNotifications className="bg-blue-800 text-blue-300 hover:text-white rounded-[95px] w-[24px] h-full" />
            <MdOutlineAccountCircle className="bg-blue-800 text-blue-300 hover:text-white rounded-[95px] w-[24px] h-full" />
            </div>



        </div>

    )



}

export default ApplicantHeader
