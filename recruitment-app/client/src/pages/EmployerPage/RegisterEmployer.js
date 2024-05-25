import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import { toast } from "react-toastify";

const RegisterEmployer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    companyField: "",
    companyAddress: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await authService.registerByEmployer(formData);
      console.log("data: ", data);
      toast.success("Đăng kí thành công");
      navigate("/loginEmployer");
    } catch (error) {
      toast.error("Đăng kí thất bại");
    }
  };

  const goToLoginEmployer = () => {
    navigate("/loginEmployer");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-4 max-w-md mx-auto bg-slate-50 rounded-lg"
      >
        <h1 className="text-[26px] font-bold my-3 text-center">Đăng Ký</h1>
        <div className="flex space-x-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tên<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="flex-1 p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Họ<span className="text-red-500">*</span>
            </label>
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
          <label className="block text-sm font-medium text-gray-700">
            Điện thoại<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Địa chỉ email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mật khẩu<span className="text-red-500">*</span>
          </label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nhập lại mật khẩu<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tên Công Ty<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        {/* <div>
          <label className="block text-sm font-medium text-gray-700">
            Ngành nghề<span className="text-red-500">*</span>
          </label>
          <select
            name="career"
            value={formData.career}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          >
            <option value="">Vui lòng chọn</option>
            <option value="">Bán lẻ/ Tiêu dùng</option>
            <option value="">CEO & General Manangement</option>
            <option value="">Công Nghệ thông tin/ Viễn thông</option>
            <option value="">Dệt may/ Da giày</option>
            <option value="">Dịch vụ ăn uống</option>
            {/* Add specific options here */}
        {/* </select> */}
        {/* </div> */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ngành nghề<span className="text-red-500">*</span>
          </label>
          <select
            name="companyField"
            value={formData.companyField}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          >
            <option value="">Vui lòng chọn</option>
            <option value="Bán lẻ/ Tiêu dùng">Bán lẻ/ Tiêu dùng</option>
            <option value="CEO & General Manangement">
              CEO & General Manangement
            </option>
            <option value="Công Nghệ thông tin/ Viễn thông">
              Công Nghệ thông tin/ Viễn thông
            </option>
            <option value="Dệt may/ Da giày">Dệt may/ Da giày</option>
            <option value="Dịch vụ ăn uống">Dịch vụ ăn uống</option>
            {/* Add specific options here */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Địa chỉ công ty<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="companyAddress"
            value={formData.companyAddress}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-400 text-white p-2 rounded hover:bg-orange-700"
        >
          Đăng ký
        </button>
        <div className="text-center text-sm">
          <p>
            Bạn đã có tài khoản?{" "}
            <div
              onClick={goToLoginEmployer}
              className="font-medium text-indigo-600 hover:text-indigo-500 hover:cursor-pointer"
            >
              Đăng nhập
            </div>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterEmployer;
