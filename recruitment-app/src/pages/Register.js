import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        agreementChecked: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Đưa dữ liệu đăng ký lên server hoặc xử lý tại đây
        console.log(formData);
    };

    return (
        <div className="w-full flex items-center justify-center ">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-[650px] py-[64px] px-[64px]">
                <h2 className="text-2xl mb-4">Đăng Ký Thành Viên!</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                        Tên
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="Tên"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                        Họ
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="Họ"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                        Số điện thoại
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phoneNumber"
                        type="tel"
                        placeholder="Số điện thoại"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Mật Khẩu
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Mật khẩu"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,50}$"
                        required
                    />
                    <p className="text-gray-600 text-xs italic">Từ 6 đến 50 ký tự, ít nhất 1 chữ hoa và 1 số.</p>
                </div>
                <div className="mb-4">
                    <input
                        className="mr-2 leading-tight"
                        id="agreementChecked"
                        type="checkbox"
                        name="agreementChecked"
                        checked={formData.agreementChecked}
                        onChange={(e) => setFormData({ ...formData, agreementChecked: e.target.checked })}
                        required
                    />
                    <label className="text-gray-700 text-sm" htmlFor="agreementChecked">
                        Tôi đồng ý với <a href="#">Thoả thuận sử dụng</a> và <a href="#">Quy định bảo mật</a> của VietnamWorks.
                    </label>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Đăng ký
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Bạn là thành viên VietnamWorks? Đăng Nhập
                    </a>
                </div>
                <p className="text-center text-gray-500 text-xs">
                    Nếu bạn đang có nhu cầu tuyển dụng, vui lòng đăng ký <a href="#">tại đây</a>.
                </p>
            </form>
        </div>
    );
};

export default Register;