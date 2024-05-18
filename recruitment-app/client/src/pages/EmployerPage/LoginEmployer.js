// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginEmployer = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [stayLoggedIn, setStayLoggedIn] = useState(false);
    const navigate = useNavigate();


    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials(prevState => ({
            ...prevState, [name]:value
        }));
        
    };

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Login Credentials:', credentials);
        console.log('Stay Logged In:', stayLoggedIn);
        // Handle authentication here
    };

    const goToRegisterEmployer = () => {
        navigate("/RegisterEmployer")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 ">
            <form className="space-y-6 w-[30%] bg-slate-100 p-4 rounded-lg" onSubmit={handleLogin}>
                <h1 className='text-[26px] font-bold'>Đăng Nhập</h1>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tài Khoản Đăng Nhập<span className='text-red-500'>*</span></label>
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mật Khẩu<span className='text-red-500'>*</span></label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="stay-logged-in"
                            name="stayLoggedIn"
                            type="checkbox"
                            checked={stayLoggedIn}
                            onChange={(e) => setStayLoggedIn(e.target.checked)}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="stay-logged-in" className="ml-2 block text-sm text-gray-900">
                            Duy trì đăng nhập
                        </label>
                    </div>
                    <div className="text-sm">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Quên mật khẩu?
                        </a>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-400 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Đăng nhập
                    </button>
                </div>
                <div className="text-center text-sm">
                    <p>
                        Bạn chưa đăng ký?{' '}
                        <div onClick={goToRegisterEmployer} className="font-medium text-indigo-600 hover:text-indigo-500 hover:cursor-pointer">
                            Đăng ký ngay
                        </div>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginEmployer;
