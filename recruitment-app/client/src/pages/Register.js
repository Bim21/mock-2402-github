import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { toast } from "react-toastify";
import validator from "validator";

const Register = () => {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   phoneNumber: "",
  //   email: "",
  //   password: "",
  //   agreementChecked: false,
  // });

  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    agreementChecked: false,
  });

  const [validationErrors, setValidationErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the validation error for the corresponding field when it is changed
    setValidationErrors({ ...validationErrors, [name]: "" });
  };

  const goToLogin = () => {
    navigate("/login-user");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = {};
    if (!formData.firstName) {
      validationErrors.firstName = "Please enter your first name";
    } else if (formData.firstName.length < 3) {
      validationErrors.firstName =
        "First name should be at least 3 characters long";
    }

    if (!formData.lastName) {
      validationErrors.lastName = "Please enter your last name";
    } else if (formData.lastName.length < 3) {
      validationErrors.lastName =
        "Last name should be at least 3 characters long";
    }

    if (!formData.phoneNumber) {
      validationErrors.phoneNumber = "Please enter your phone number";
    } else if (!/^[0-9]+$/.test(formData.phoneNumber)) {
      validationErrors.phoneNumber = "Phone number should contain only numbers";
    }

    if (!formData.email) {
      validationErrors.email = "Please enter your email";
    } else if (!validator.isEmail(formData.email)) {
      validationErrors.email = "Please enter a valid email";
      // You can add more specific email validation conditions here if needed
    }
    if (!formData.password) {
      validationErrors.password = "Please enter your password";
    } else if (formData.password.length < 8) {
      validationErrors.password =
        "Password should be at least 8 characters long";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      validationErrors.password =
        "Password should contain at least one special character";
    }
    if (!formData.agreementChecked) {
      validationErrors.agreementChecked =
        "Please agree to the terms and conditions";
    }

    if (Object.keys(validationErrors).length > 0) {
      // Display validation errors
      setValidationErrors(validationErrors);
      return;
    }

    // Proceed with form submission if validation passes
    try {
      const data = await authService.registerByUser(formData);
      console.log("data: ", data);
      toast.success("Đăng kí thành công");
      navigate("/login-user");
    } catch (error) {
      toast.error("Đăng kí thất bại");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-sky-950 via-blue-950 to-blue-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded pt-6 pb-8 mb-4 max-w-[650px] py-[64px] px-[64px]"
      >
        <h2 className="text-2xl mb-4 text-center">Đăng Ký Thành Viên!</h2>
        <div className="flex flex-row gap-2">
          <div className="mb-4 flex-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
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
            {validationErrors.firstName && (
              <p className="text-red-500 text-xs italic">
                {validationErrors.firstName}
              </p>
            )}
          </div>
          <div className="mb-4 flex-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
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
            {validationErrors.lastName && (
              <p className="text-red-500 text-xs italic">
                {validationErrors.lastName}
              </p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
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
          {validationErrors.phoneNumber && (
            <p className="text-red-500 text-xs italic">
              {validationErrors.phoneNumber}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
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
          {validationErrors.email && (
            <p className="text-red-500 text-xs italic">
              {validationErrors.email}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
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
            // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,50}$"
            required
          />
          {validationErrors.password && (
            <p className="text-red-500 text-xs italic">
              {validationErrors.password}
            </p>
          )}
          <p className="text-gray-600 text-xs italic">
            Từ 6 đến 50 ký tự, ít nhất 1 chữ hoa và 1 số.
          </p>
        </div>
        <div className="mb-4">
          <input
            className="mr-2 leading-tight"
            id="agreementChecked"
            type="checkbox"
            name="agreementChecked"
            checked={formData.agreementChecked}
            onChange={(e) =>
              setFormData({ ...formData, agreementChecked: e.target.checked })
            }
            required
          />
          <label className="text-gray-700 text-sm" htmlFor="agreementChecked">
            Tôi đồng ý với <a href="#">Thoả thuận sử dụng</a> và{" "}
            <a href="#">Quy định bảo mật</a> của VietnamWorks.
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Đăng ký
          </button>
          <div
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 hover:cursor-pointer"
            onClick={goToLogin}
          >
            Bạn là thành viên VietnamWorks? Đăng Nhập
          </div>
        </div>
        <p className="text-center text-gray-500 text-xs">
          Nếu bạn đang có nhu cầu tuyển dụng, vui lòng đăng ký{" "}
          <a href="#">tại đây</a>.
        </p>
      </form>
    </div>
  );
};

export default Register;
