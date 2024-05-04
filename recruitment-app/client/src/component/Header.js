import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsHandbagFill } from "react-icons/bs";
import { HiHomeModern } from "react-icons/hi2";
import { AiFillHeart } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { LiaLanguageSolid } from "react-icons/lia";
import { IoIosNotifications } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import Modal from './Modal';



const Header = (props) => {

    const isLogin = props.isLogin;

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [loginName, setLoginName] =useState('');
    const navigate = useNavigate();

    const goToCompany = () => {
        navigate('/company')
    }

    const goToJobPage = () => {
        navigate('/job')
    }

    const openModal = () => {
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    const handleChangeLoginName = (value) => {
        setLoginName(value)
    }

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
        <div className='w-full min-h-[64px] bg-blue-800 flex items-center'>
            <div className='flex justify-around w-full my-0 mx-[20px]'>
                <a href='/' title='Home Page'>
                    <img src='https://www.vietnamworks.com/assets-page-container/images/vnw_empower_growth_logo_white.png' alt=''
                        className='w-[167px] h-[40]'
                    />
                </a>
                <div className='flex items-center w-[916px]'>
                    <div className='w-full px-[20px] py-[0px] flex items-center justify-between'>
                        <div className='p-0'>
                            <ul className='flex list-none p-0 mb-0 bg-blue-800 items-center'>
                                <li className='mr-[46px] h-full text-blue-300'>
                                    <div href='/' className='flex items-center gap-x-[8px] gap-y-[4px]'>
                                        <BsHandbagFill className='w-21 h-22' />
                                        <div className="relative group">
                                            <button className="flex items-start justify-start hover:text-white"
                                            onClick={goToJobPage}>
                                                Việc Làm
                                            </button>
                                            <ul className="absolute hidden w-[150px] space-y-1 bg-white border rounded-md border-gray-200 shadow-lg group-hover:block">
                                                <li>
                                                    <a
                                                        className="block text-[12px] px-4 py-2 text-blue-600 hover:bg-gray-200"
                                                        href="/"
                                                    >
                                                        Việc Làm Mới Nhất
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="block text-[12px] px-4 py-2 text-blue-600 hover:bg-gray-200"
                                                        href="/"
                                                    >
                                                        Quản Lí Việc Làm
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="block text-[12px] px-4 py-2 text-blue-600 hover:bg-gray-200"
                                                        href="/"
                                                    >
                                                        Tìm Việc Làm
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className='mr-[46px] h-full text-blue-300'>
                                    <div href='/' className='flex items-center gap-x-[8px] gap-y-[4px]'>
                                        <HiHomeModern className='w-21 h-22' />
                                        <div className="relative group">
                                            <button className="flex items-start justify-start hover:text-white" onClick={goToCompany}>
                                                Công Ty
                                            </button>

                                        </div>
                                    </div>
                                </li>

                                <li className='mr-[46px] h-full text-blue-300'>
                                    <div href='/' className='flex items-center gap-x-[8px] gap-y-[4px]'>
                                        <AiFillHeart className='w-21 h-22' />
                                        <div className="relative group">
                                            <button className="flex items-start justify-start hover:text-white">
                                                Việc Của Tôi
                                            </button>
                                            <ul className="absolute hidden space-y-1 w-[150px] bg-white border rounded-md border-gray-200 shadow-lg group-hover:block">
                                                <li>
                                                    <a
                                                        className="block text-[12px] px-4 py-2 text-blue-600 hover:bg-gray-200"
                                                        href="/"
                                                    >
                                                        Việc Đã Lưu
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="block text-[12px] px-4 py-2 text-blue-600 hover:bg-gray-200"
                                                        href="/"
                                                    >
                                                        Việc Ứng Tuyển
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="block text-[12px] px-4 py-2 text-blue-600 hover:bg-gray-200"
                                                        href="/"
                                                    >
                                                        Thông Báo Việc Làm
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="block text-[12px] px-4 py-2 text-blue-600 hover:bg-gray-200"
                                                        href="/"
                                                    >
                                                        Việc Dành Cho Bạn
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className='mr-[46px] h-full text-blue-300'>
                                    <div href='/' className='flex items-center gap-x-[8px] gap-y-[4px]'>
                                        <AiFillSetting className='w-21 h-22' />
                                        <div className="relative group">
                                            <button className="flex items-start justify-start hover:text-white">
                                                Nghề Nghiệp
                                            </button>
                                            <ul className="absolute hidden space-y-1 w-[150px] bg-white border rounded-md border-gray-200 shadow-lg group-hover:block">
                                                <li>
                                                    <a
                                                        className="block text-[12px] px-4 py-2 text-blue-600 hover:bg-gray-200"
                                                        href="https://www.vietnamworks.com/wowcv"
                                                    >
                                                        Thư Viện CV Mẫu
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="block text-[12px] px-4 py-2 text-blue-600 hover:bg-gray-200"
                                                        href="https://www.vietnamworks.com/cau-hoi-phong-van?utm_source_navi=Header"
                                                    >
                                                        Câu Hỏi Phỏng Vấn
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        className="block text-[12px] px-4 py-2 text-blue-600 hover:bg-gray-200"
                                                        href="https://www.vietnamworks.com/tram-sac/"
                                                    >
                                                        Trạm Sạc
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="block text-[12px] px-4 py-2 text-blue-600 hover:bg-gray-200"
                                                        href="https://www.vietnamworks.com/tinh-luong-gross-net"
                                                    >
                                                        Công Cụ Tính Lương
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='flex items-center mr-[0px]'>
                            <div className='w-[1px] h-[48px] my-0 mx-[32px] bg-blue-200'></div>
                            <a href='/' className='grid gap-y-[4px] text-blue-300 hover:text-white text-center '>
                                <span className='text-sm'>NHÀ TUYỂN DỤNG</span>
                                <span className='text-xs'>Tìm kiếm nhân tài</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-center items-center p-[7px] rounded-[95px] border-solid border-2 gap-x-[8px] border-blue-500'>
                    <div className='flex justify-center items-center relative group' ref={dropdownRef}>
                        <button onClick={toggleMenu}
                            className=" focus:outline-none">
                            <LiaLanguageSolid className='bg-blue-800 text-blue-300 hover:text-white rounded-[95px] w-[24px] h-full' />
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
                    <div className='flex justify-center items-center'>
                        <button>
                            <IoIosNotifications className='bg-blue-800 text-blue-300 hover:text-white rounded-[95px] w-[24px] h-full' />
                        </button>
                    </div>
                    {
                        isLogin === false ? 
                    <div className='flex justify-center items-center'>
                        <button className='flex items-center text-blue-300 hover:text-white' onClick={openModal}>
                            <CiLogin className='bg-blue-800 rounded-[95px] w-[24px] h-full' />
                            <span className='font-bold'>Đăng Nhập</span>
                        </button>
                        <Modal isOpen={isOpenModal} onClose={closeModal} handleChangeLoginName={handleChangeLoginName}/>
                    </div> : 
                    <div className='flex justify-center items-center'>
                        <button className='flex items-center text-blue-100 hover:text-white' onClick={openModal}>
                            <MdOutlineAccountCircle className='bg-blue-800 rounded-[95px] w-[24px] h-full' />
                            <span className='font-bold'>{loginName}</span>
                        </button>
                        
                    </div> 
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;