import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const RecruitmentMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const goToRecruimentPage = () => {
        navigate("/RecruitmentPage")
    }
    

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative " ref={menuRef}>
            <button
                onClick={toggleMenu}
                className="flex items-center justify-center rounded-[6px] border-gray-300 px-2 p-[3px] h-[40px] hover:border-blue-400"
            >
                <div className="">
                    Đăng Tuyển Dụng
                </div>
                <MdKeyboardArrowDown className="h-6 w-6" />
            </button>
            {isOpen && (
                <div className="absolute z-10 mt-1 w-[200px] bg-white shadow-lg rounded-md" >
                    <div className="p-[8px] flex flex-col ">
                        
                        <div className="relative min-h-[60px] mb-[8px] mt-[4px]">
                            <div className="absolute w-full" >
                                <div className="flex flex-col gap-1 h-[40px] pr-[4px] text-black " >
                                    <div className="py-[4px] px-[8px] inline-flex items-center rounded-md hover:bg-blue-50"
                                    onClick={goToRecruimentPage}>
                                        <label className="ml-[10px] hover:cursor-pointer">Đăng tin</label>
                                    </div>
                                    <div className="py-[4px] px-[8px] inline-flex items-center rounded-md hover:bg-blue-50">
                                        <label className="ml-[10px] hover:cursor-pointer">Tạo việc làm ảo</label>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                      
                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecruitmentMenu;