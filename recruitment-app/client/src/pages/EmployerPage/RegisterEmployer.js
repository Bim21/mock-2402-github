import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterEmployer = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tiến hành kiểm tra dữ liệu, xử lý đăng ký tại đây
        console.log(formData);
    }

    const goToLoginEmployer = () => {
        navigate("/loginEmployer")
    }

    return (
        <div className='h-screen flex justify-center items-center'>

        <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-slate-50 rounded-lg">
            <h1 className='text-[26px] font-bold my-3'>Đăng Ký</h1>
            <div className="flex space-x-4 mb-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tên<span className='text-red-500'>*</span></label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="flex-1 p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Họ<span className='text-red-500'>*</span></label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="flex-1 p-2 border rounded"
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Điện thoại<span className='text-red-500'>*</span></label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Địa chỉ email<span className='text-red-500'>*</span></label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Mật khẩu<span className='text-red-500'>*</span></label>

                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Nhập lại mật khẩu<span className='text-red-500'>*</span></label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                />
            </div>
            <button type="submit" className="w-full bg-orange-400 text-white p-2 rounded hover:bg-orange-700">
                Đăng ký
            </button>
            <div className="text-center text-sm">
                    <p>
                        Bạn đã có tài khoản?{' '}
                        <div onClick={goToLoginEmployer} className="font-medium text-indigo-600 hover:text-indigo-500 hover:cursor-pointer">
                            Đăng nhập
                        </div>
                    </p>
                </div>
        </form>
        </div>
    );
};

export default RegisterEmployer;
