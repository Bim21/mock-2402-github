import React, { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { LiaLanguageSolid } from 'react-icons/lia';
import { MdLocalGroceryStore } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import RecruitmentMenu from './RecruitmentMenu';


const EmployerHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex p-[20px] h-[56px] bg-gradient-to-r from-sky-950 via-blue-950 to-blue-600 w-full items-center'>
            <a href='/'>
                <img src="https://www.vietnamworks.com/assets-page-container/images/vnw_empower_growth_logo_white.png" alt=''
                    className='w-auto h-[40px]'
                />
            </a>
            <div className='flex items-center w-full'>
                <ul className='flex text-white gap-x-4 ml-2 text-[14px] font-normal'>
                    <li className='hover:cursor-pointer hover:text-orange-600'>Dashboard</li>
                    <li className='hover:cursor-pointer hover:text-orange-600'>Việc Làm</li>
                    <div className='flex hover:cursor-pointer hover:text-orange-600'>Ứng Viên
                        <MdKeyboardArrowDown className="h-6 w-6" />
                    </div>
                    <div className='flex hover:cursor-pointer hover:text-orange-600'>Onboarding
                        <MdKeyboardArrowDown className="h-6 w-6" />
                    </div>
                    <div className='flex hover:cursor-pointer hover:text-orange-600'>Đơn Hàng
                        <MdKeyboardArrowDown className="h-6 w-6" />
                    </div>
                    <li className='hover:cursor-pointer hover:text-orange-600'>Báo Cáo</li>
                </ul>
                <div className='ml-2'>
                    <ul className='flex gap-x-2 text-white'>
                        <button className='bg-orange-400 hover:bg-orange-600 rounded-lg flex'>
                            <RecruitmentMenu />
                        </button>
                        <button className='bg-orange-400 hover:bg-orange-600 rounded-lg p-2'>Tìm ứng viên</button>
                        <button className='bg-orange-400 hover:bg-orange-600 rounded-lg p-2 px-8'>Mua</button>
                    </ul>
                </div>
            </div>
                <div className='flex justify-end items-center gap-x-4'>
                    <div className='flex justify-center items-center relative group' ref={dropdownRef}>
                        <button onClick={toggleMenu}
                            className=" focus:outline-none">
                            <LiaLanguageSolid className=' text-white hover:cursor-pointer hover:text-white rounded-[95px] w-[24px] h-full' />
                        </button>
                        {isOpen && (
                            <div className="absolute top-0 right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md z-10 ">
                                <ul>
                                    <li className="py-2 px-4 text-[14px] text-blue-600 hover:bg-gray-100 cursor-pointer">Tiếng Việt</li>
                                    <li className="py-2 px-4 text-[14px] text-blue-600 hover:bg-gray-100 cursor-pointer">Tiếng Anh</li>
                                    <li className="py-2 px-4 text-[14px] text-blue-600 hover:bg-gray-100 cursor-pointer">Tiếng Nhật</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div><MdLocalGroceryStore className=' text-white hover:cursor-pointer hover:text-white rounded-[95px] w-[24px] h-full' /></div>
                    <div><IoIosNotifications className=' text-white hover:cursor-pointer hover:text-white rounded-[95px] w-[24px] h-full' /></div>
                    <ul><MdAccountCircle className=' text-white hover:cursor-pointer hover:text-white rounded-[95px] w-[24px] h-full' /></ul>
                </div>
        </div>
    );
};

export default EmployerHeader;