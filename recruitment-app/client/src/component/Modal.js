import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, loginRequest } from '../services/api';

const Modal = ({ isOpen, onClose, handleChangeLoginName}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const goToRegister = () => {
        navigate('/register')
    }


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("email:", email);
        console.log("password:", password);
        const result = await loginRequest(email, password);
        if (result.success === 200) {
            const token = result.data.message;
            const user = result.data
            console.log("user...", user)
            handleChangeLoginName(user.userName);
            //login(token, user);
            onClose();

        } else {
            console.log("resultLogin:", result);
        }
        // navigate('/admin');
        setEmail('');
        setPassword('');
    };

    useEffect(() => {
        const checkAuthentication = async () => {
          const authenticated = await isAuthenticated();
          if (authenticated) {
            navigate("/");
          } else {
          }
        };
          // eslint-disable-next-line react-hooks/exhaustive-deps
        checkAuthentication();
      }, []);

    return (
        <>
            {isOpen && (
                <form className="fixed inset-0 flex items-center justify-center z-50" onSubmit={handleSubmit}>
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-white rounded-[12px] shadow-md z-50">
                        <div className='w-[700px] h-auto '>
                            <div className='flex items-center justify-between border-b-[1px] py-[20px] pl-[24px] pr-[14px]'>
                                <h2 className="text-[18px] font-semibold leading-[22px] ">Đăng nhập để tiếp tục</h2>
                                <AiOutlineClose onClick={onClose} className='hover:cursor-pointer' />
                            </div>
                            <div className='h-auto p-[24px]'>
                                <div className='flex justify-center mb-[24px] '>
                                    <button className='mr-[8px] px-[8px] font-medium rounded-[8px] inline-flex items-center justify-center h-[40px] leading-[20px] bg-slate-100'>
                                        <FcGoogle />
                                        <span className='ml-[8px] text-[14px] '>với tài khoản Google</span>
                                    </button>
                                    <button className='mr-[8px] px-[8px] font-medium rounded-[8px] inline-flex items-center justify-center h-[40px] leading-[20px] bg-slate-100'>
                                        <BsFacebook className='text-blue-600' />
                                        <span className='ml-[8px] text-[14px] '>với tài khoản Facebook</span>
                                    </button>
                                </div>
                                <p className='mx-auto mb-[16px] leading-[20px] text-[16px] font-semibold text-center'>hoặc đăng nhập bằng Email</p>

                                <div className="mb-[16px]">
                                    <label className="block text-gray-700 text-[14px] font-medium mb-2" htmlFor="email">
                                        Email <span className='text-red-600'>*</span>
                                    </label>
                                    <input
                                        className="w-full h-[40px] rounded-[4px] text-[13px] border-[1px] hover:border-blue-400 px-[10px] focus:outline-none focus:ring-0"
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        required
                                    />
                                </div>
                                <div className="mb-[16px]">
                                    <label className="block text-gray-700 text-[14px] font-medium mb-2" htmlFor="password">
                                        Password <span className='text-red-600'>*</span>
                                    </label>
                                    <input
                                        className="w-full h-[40px] rounded-[4px] text-[13px] border-[1px] hover:border-blue-400 px-[10px] focus:outline-none focus:ring-0"
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                    {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                                </div>


                            </div>
                            <div className="w-full pb-[16px] mt-[-24px] flex justify-end border-b-[1px]"

                            >
                                <a href='/' className='text-sm text-blue-500 hover:text-orange-400 px-6'>Quên mật khẩu? </a>
                            </div>
                            <div className="flex items-center p-[24px] rounded-b[12px] ">
                                <div className='justify-start w-[50%] items-center '>Chưa có tài khoản? <button onClick={goToRegister} className='text-blue-500'>Đăng ký</button></div>
                                <div className='w-[50%] flex justify-end items-end'>
                                    <button className='mr-[6px] rounded-[8px] font-medium p-[8px] bg-slate-100 hover:bg-slate-200' onClick={onClose}>Hủy</button>
                                    <button className='rounded-[8px] font-medium py-[8px] px-[10px] text-white bg-orange-500 hover:bg-orange-300' >
                                        Đăng Nhập
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </form>
            )}
        </>
    );
};

export default Modal