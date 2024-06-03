
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsFillPersonFill } from "react-icons/bs";
import { Input, Select } from "antd";
import { TfiPencil } from "react-icons/tfi";


const ModalApplicant = ({ isOpen, onClose }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const goToRegister = () => {
        navigate("/register");
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //   const data = await authService.loginByUser({ email, password });
            //   localStorage.setItem("userToken", data.token);
            //   localStorage.setItem("userInfo", JSON.stringify(data));
            //   toast.success("Đăng nhập thành công");
            onClose();
            setEmail("");
            setPassword("");
        } catch (error) {
            toast.error("Đăng nhập thất bại");
        }
    };

    return (
        <>
            {isOpen && (
                <form
                    className="fixed inset-0 flex items-center justify-center z-50"
                    onSubmit={handleSubmit}
                >
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-white rounded-[12px] shadow-md z-50">
                        <div className="w-[800px] h-auto ">
                            <div className="flex items-center justify-between border-b-[1px] py-[20px] pl-[24px] pr-[14px]">
                                <h1 className="text-[24px] font-bold leading-[22px] ">
                                    Thông tin cơ bản
                                </h1>
                                <AiOutlineClose
                                    onClick={onClose}
                                    className="hover:cursor-pointer text-2xl"
                                />
                            </div>

                            <div className='flex flex-row mt-5'>
                                <div className="flex flex-col gap-4">
                                    <BsFillPersonFill className='text-slate-200 text-9xl ml-2' />
                                    <TfiPencil className="text-2xl ml-14 mt-0" />
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex flex-row">

                                        <div className='flex flex-col ml-5'>
                                            <div className='text-lg font-medium'> <span className="text-red-800 font-bold">*</span> Ho</div>
                                            <Input className="mt-2 h-12 w-72" />

                                        </div>

                                        <div className='flex flex-col ml-5'>
                                            <div className='text-lg font-medium'> <span className="text-red-800 font-bold">*</span> Ten</div>
                                            <Input className="mt-2 h-12 w-72" />
                                        </div>


                                    </div>

                                    <div className='flex flex-col ml-5 mt-7'>
                                        <div className='text-lg font-medium'> <span className="text-red-800 font-bold">*</span> Chuc danh</div>
                                        <Input className="mt-0 h-12 w-144" />
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-row ml-4 mt-10">

                                <div className='flex flex-col ml-5'>
                                    <div className='text-lg font-medium'> <span className="text-red-800 font-bold">*</span> So nam kinh nhiem</div>
                                    <Input className="mt-2 h-12 w-80" />

                                </div>

                                <div className='flex flex-col ml-5 '>
                                    <div className='text-lg font-medium'> <span className="text-red-800 font-bold">*</span> Bang cap cao nhat</div>
                                    <Input className="mt-2 h-12 w-[395px]" />
                                </div>
                            </div>


                            <div className="flex flex-row ml-4 mt-10">

                                <div className='flex flex-col ml-5'>
                                    <div className='text-lg font-medium'> <span className="text-red-800 font-bold">*</span> Nganh nghe hien tai</div>
                                    <Input className="mt-2 h-12 w-80" />

                                </div>

                                <div className='flex flex-col ml-5 '>
                                    <div className='text-lg font-medium'> <span className="text-red-800 font-bold">*</span>Linh Vuc hien tai</div>
                                    <Input className="mt-2 h-12 w-[395px]" />
                                </div>
                            </div>


                            <div className="flex flex-row ml-4 mt-10">

                                <div className='flex flex-col ml-5'>
                                    <div className='text-lg font-medium'> <span className="text-red-800 font-bold">*</span> Muc luong hien tai</div>
                                    <Input className="mt-2 h-12 w-80" />

                                </div>

                                <div className='flex flex-col ml-5 '>
                                    <div className='text-lg font-medium'> <span className="text-red-800 font-bold">*</span>Cap bac hien tai</div>
                                    <Input className="mt-2 h-12 w-[395px]" />
                                </div>
                            </div>


                            <div className="flex flex-row ml-4 mt-10">

                                <div className='flex flex-col ml-5'>
                                    <div className='text-lg font-medium'> <span className="text-red-800 font-bold">*</span>Email</div>
                                    <Input className="mt-2 h-12 w-80" />

                                </div>

                                <div className="flex flex-row">
                                    <div className='flex flex-col ml-5 '>
                                        <div className='text-lg font-medium'> <span className="text-red-800 font-bold">*</span>Dien thoai</div>
                                        <Select className="mt-2 h-12 w-[100px]" />

                                    </div>
                                    <div className='flex flex-col ml-5 '>
                                        <div className='text-lg font-medium'></div>
                                        <Input className="mt-9 h-12 w-[275px]" />
                                    </div>

                                </div>

                            </div>


                            <div className="flex flex-row ml-4 mt-10">

                                <div className='flex flex-col ml-5'>
                                    <div className='text-lg font-medium'> <span className="text-red-800 font-bold">*</span>Ngay sinh</div>
                                    <Input className="mt-2 h-12 w-80" />

                                </div>

                                <div className='flex flex-col ml-5 '>
                                    <div className='text-lg font-medium'> <span className="text-red-800 font-bold">*</span>Quoc tich</div>
                                    <Input className="mt-2 h-12 w-[395px]" />
                                </div>
                            </div>


















                        </div>
                    </div>
                </form>
            )}
        </>
    )
}

export default ModalApplicant
