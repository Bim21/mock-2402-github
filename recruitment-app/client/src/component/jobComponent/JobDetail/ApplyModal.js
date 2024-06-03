import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { getUserInfo } from "../../../utils/funcHelpers";

const userInfo = getUserInfo();

const ApplyModal = ({ isOpen, onClose, setIsApply }) => {
  const [formData, setFormData] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    gender: "",
    title: "",
    dob: "",
    degree: "",
    fieldJob: "",
    level: "",
    minimumYearsOfExperience: "",
    career: "",
    salary: "",
    phoneNumber: "",
    address: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
    setIsApply(false);
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
            <div className="w-[700px] h-auto ">
              <div className="flex items-center justify-between border-b-[1px] py-[10px] pl-[24px] pr-[14px] rounded-t-[12px] bg-orange-400">
                <h2 className="text-[20px] text-white font-semibold leading-[22px] ">
                  Ứng tuyển công việc
                </h2>
                <AiOutlineClose
                  onClick={onClose}
                  className="hover:cursor-pointer"
                />
              </div>
              <div className="p-2 ">
                <div className="p-2 border-[1px] rounded-lg w-full bg-slate-50">
                  <div className="flex justify-start items-center">
                    <div className="text-[18px] font-semibold mr-2">
                      Hồ sơ của bạn:
                    </div>
                    <Upload>
                      <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                  </div>
                  <div className="mt-2 w-full">
                    <div className="text-[18px] font-semibold mt-2">
                      Thông tin ứng tuyển:
                    </div>
                    <div className="flex flex-row gap-4">
                      <div className="flex flex-col gap-2 w-[50%]">
                        <div className="block text-gray-700">
                          <label className="block text-gray-700">
                            Họ<span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1 p-1 w-full border rounded"
                            required
                          />
                        </div>
                        <div className="block text-gray-700">
                          <label className="block text-gray-700">
                            Chức danh<span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-1 p-1 w-full border rounded"
                            required
                          />
                        </div>
                        <div className="">
                          <label className="block text-gray-700">
                            Bằng cấp cao nhất
                            <span className="text-red-600">*</span>
                          </label>
                          <select
                            name="degree"
                            value={formData.degree}
                            onChange={handleChange}
                            className="mt-1 p-1 w-full border rounded"
                            required
                          >
                            <option value="" disabled>
                              Select position
                            </option>
                            <option value="Trung cấp">Trung cấp</option>
                            <option value="Cao đẳng">Cao đẳng</option>
                            <option value="Đại học">Đại học</option>
                            <option value="Thạc sĩ">Thạc sĩ</option>
                            <option value="Tiến sĩ">Tiến sĩ</option>
                          </select>
                        </div>
                        <div className="">
                          <label className="block text-gray-700">
                            Lĩnh vực hiện tại
                            <span className="text-red-600">*</span>
                          </label>
                          <select
                            name="fieldJob"
                            value={formData.fieldJob}
                            onChange={handleChange}
                            className="mt-1 p-1 w-full border rounded"
                            required
                          >
                            <option value="" disabled>
                              Select position
                            </option>

                            <option value="Bán lẻ/ Tiêu dùng">
                              Bán lẻ/ Tiêu dùng
                            </option>
                            <option value="CEO & General Manangement">
                              CEO & General Manangement
                            </option>
                            <option value="Công Nghệ thông tin/ Viễn thông">
                              Công Nghệ thông tin/ Viễn thông
                            </option>
                            <option value="Dệt may/ Da giày">
                              Dệt may/ Da giày
                            </option>
                            <option value="Dịch vụ ăn uống">
                              Dịch vụ ăn uống
                            </option>
                          </select>
                        </div>
                        <div className="">
                          <label className="block text-gray-700">
                            Cấp bậc hiện tại
                            <span className="text-red-600">*</span>
                          </label>
                          <select
                            name="level"
                            value={formData.level}
                            onChange={handleChange}
                            className="mt-1 p-1 w-full border rounded"
                            required
                          >
                            <option value="" disabled>
                              Select position
                            </option>
                            <option value="Thực tập sinh">
                              Quản lí/Bán hàng
                            </option>
                            <option value="Mới tốt nghiệp">
                              Mới tốt nghiệp
                            </option>
                            <option value="Nhân viên">Nhân viên</option>
                            <option value="Trưởng phòng">Trưởng phòng</option>
                            <option value="Giám đốc và Cấp cao hơn">
                              Giám đốc và Cấp cao hơn
                            </option>
                          </select>
                        </div>
                        <div className="">
                          <label className="block text-gray-700">
                            Ngày sinh<span className="text-red-600">*</span>
                          </label>
                          <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="mt-1 p-1 w-full border rounded"
                            required
                          />
                        </div>

                        <div className=" flex justify-around items-center">
                          <label className="block text-gray-700">
                            Gender:<span className="text-red-600">*</span>
                          </label>
                          <div className="mt-1 ">
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="gender"
                                value="male"
                                onChange={handleChange}
                                className="form-radio"
                                required
                              />
                              <span className="ml-2">Male</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                              <input
                                type="radio"
                                name="gender"
                                value="female"
                                onChange={handleChange}
                                className="form-radio"
                                required
                              />
                              <span className="ml-2">Female</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-[50%] gap-2">
                        <div className="">
                          <label className="block text-gray-700">
                            Tên<span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 p-1 w-full border rounded"
                            required
                          />
                        </div>
                        <div className="">
                          <label className="block text-gray-700">
                            Số năm kinh nghiệm
                            <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="number"
                            name="minimumYearsOfExperience"
                            value={formData.minimumYearsOfExperience}
                            onChange={handleChange}
                            className="mt-1 p-1 w-full border rounded"
                            required
                          />
                        </div>
                        <div className="">
                          <label className="block text-gray-700">
                            Lĩnh vực hiện tại
                            <span className="text-red-600">*</span>
                          </label>
                          <select
                            name="career"
                            value={formData.career}
                            onChange={handleChange}
                            className="mt-1 p-1 w-full border rounded"
                            required
                          >
                            <option value="" disabled>
                              Select position
                            </option>
                            <option value="Quản lí/Bán hàng">
                              Quản lí/Bán hàng
                            </option>
                            <option value="Bán lẻ/ Tiêu dùng">
                              Bán le/ Tiêu dùng
                            </option>
                            <option value="Bảo hiểm">Trung cấp</option>
                          </select>
                        </div>
                        <div className="">
                          <label className="block text-gray-700">
                            Mức lương hiện tại
                            <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            className="mt-1 p-1 w-full border rounded"
                            required
                          />
                        </div>
                        <div className="">
                          <label className="block text-gray-700">
                            Số điện thoại<span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="mt-1 p-1 w-full border rounded"
                            required
                          />
                        </div>
                        <div className="">
                          <label className="block text-gray-700">
                            Địa chỉ<span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 p-1 w-full border rounded"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-4 flex justify-end">
                <button className="bg-orange-400 text-white p-2 rounded-lg hover:bg-orange-300">
                  Ứng tuyển
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default ApplyModal;
