import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { toast } from "react-toastify";
import Validator from "../utils/Validator";

const LoginUser = (props) => {
  // super(props);
  this.state = {
    name: "",
    email: "",
    address: "",
    subject: "",
    message: "",
    errors: {},
  };

  const requiredWith = (value, field, state) =>
    (!state[field] && !value) || !!value;
  const rules = [
    {
      field: "password",
      method: "isEmpty",
      validWhen: false,
      message: "The name field is required.",
    },
    {
      field: "password",
      method: "isLength",
      args: [{ min: 5 }],
      validWhen: true,
      message: "The name must be at least 5 characters.",
    },
    {
      field: "email",
      method: "isEmpty",
      validWhen: false,
      message: "The email field is required.",
    },
    {
      field: "email",
      method: "isEmail",
      validWhen: true,
      message: "The email must be a valid email address.",
    },
    {
      field: "address",
      method: "isEmpty",
      validWhen: false,
      message: "The address field is required.",
    },
    {
      field: "message",
      method: requiredWith,
      args: ["subject"],
      validWhen: true,
      message: "The message field is required when subject is present.",
    },
  ];
  this.validator = new Validator(rules);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      handleSubmit = (e) => {
        this.setState({
          errors: this.validator.validate(this.state),
        });
        console.log(this.state);
      };

      const data = await authService.loginByUser({ email, password });
      localStorage.setItem("userToken", data.token);
      localStorage.setItem("userInfo", JSON.stringify(data));
      toast.success("Đang nhap thanh cong");
      navigate("/");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error("Đang nhap thai bai");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-sky-950 via-blue-950 to-blue-600">
      <form
        className="flex items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="bg-white rounded-[12px] shadow-md z-50">
          <div className="w-[700px] h-auto ">
            <div className="flex items-center justify-between border-b-[1px] py-[20px] pl-[24px] pr-[14px]">
              <h2 className="text-[18px] font-semibold leading-[22px] ">
                Đăng nhập để tiếp tục
              </h2>
            </div>
            <div className="h-auto p-[24px]">
              <div className="flex justify-center mb-[24px] ">
                <button className="mr-[8px] px-[8px] font-medium rounded-[8px] inline-flex items-center justify-center h-[40px] leading-[20px] bg-slate-100">
                  <FcGoogle />
                  <span className="ml-[8px] text-[14px] ">
                    với tài khoản Google
                  </span>
                </button>
                <button className="mr-[8px] px-[8px] font-medium rounded-[8px] inline-flex items-center justify-center h-[40px] leading-[20px] bg-slate-100">
                  <BsFacebook className="text-blue-600" />
                  <span className="ml-[8px] text-[14px] ">
                    với tài khoản Facebook
                  </span>
                </button>
              </div>
              <p className="mx-auto mb-[16px] leading-[20px] text-[16px] font-semibold text-center">
                hoặc đăng nhập bằng Email
              </p>

              <div className="mb-[16px]">
                <label
                  className="block text-gray-700 text-[14px] font-medium mb-2"
                  htmlFor="email"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  className="w-full h-[40px] rounded-[4px] text-[13px] border-[1px] hover:border-blue-400 px-[10px] focus:outline-none focus:ring-0"
                  id="email"
                  type="email"
                  value={this.state.email}
                  onChange={handleInput}
                  required
                  checked
                />
                {props.errors.email && (
                  <div className="validation" style={{ display: "block" }}>
                    {props.errors.email}
                  </div>
                )}
              </div>
              <div className="mb-[16px]">
                <label
                  className="block text-gray-700 text-[14px] font-medium mb-2"
                  htmlFor="password"
                >
                  Password <span className="text-red-600">*</span>
                </label>
                <input
                  className="w-full h-[40px] rounded-[4px] text-[13px] border-[1px] hover:border-blue-400 px-[10px] focus:outline-none focus:ring-0"
                  id="password"
                  type="password"
                  value={this.state.password}
                  onChange={handleInput}
                  required
                />
                {props.errors.password && (
                  <div className="validation" style={{ display: "block" }}>
                    {props.errors.password}
                  </div>
                )}

                {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
              </div>
            </div>
            <div className="w-full pb-[16px] mt-[-24px] flex justify-end border-b-[1px]">
              <a
                href="/"
                className="text-sm text-blue-500 hover:text-orange-400 px-6"
              >
                Quên mật khẩu?{" "}
              </a>
            </div>
            <div className="flex items-center p-[24px] rounded-b[12px] ">
              <div className="justify-start w-[50%] items-center ">
                Chưa có tài khoản?{" "}
                <button onClick={goToRegister} className="text-blue-500">
                  Đăng ký
                </button>
              </div>
              <div className="w-[50%] flex justify-end items-end">
                <button className="rounded-[8px] font-medium py-[8px] px-[10px] text-white bg-orange-500 hover:bg-orange-300">
                  Đăng Nhập
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginUser;
