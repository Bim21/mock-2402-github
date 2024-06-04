import React, { useState } from "react";
import EmployerHeader from "./EmployerHeader";
import Footer from "../../component/Footer";
import noImage from "../../assets/image.png";
import { API_URL_IMAGE, uploadFile } from "../../services/api";
import { BsHandbagFill } from "react-icons/bs";
import { FaWarehouse } from "react-icons/fa";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import jobService from "../../services/jobService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getEmployerInfo } from "../../utils/funcHelpers";

const RecruitmentPage = () => {
  const employerInfo = getEmployerInfo();
  const [formData, setFormData] = useState({
    title: "",
    level: "",
    fieldJob: "",
    addressJob: "",
    descriptionJob: "",
    requirementJob: "",
    salary: "",
    numberOfRecruitment: "",
    email: employerInfo.email,
    companyName: employerInfo.companyName,
    companyAddress: employerInfo.companyAddress,
    companySize: "",
    companyInformation: "",
    companyBenefits: "",
    companyLogoPath: "",
    companyImagePath: "",
  });

  const [file, setFile] = useState(noImage);
  const navigate = useNavigate();

  const handleFileUpload = async (file) => {
    // Handle the file upload logic here
    console.log(file);

    const response = await uploadFile(file);
    const fileResponse = API_URL_IMAGE + response.data;
    setFile(response.data);
    console.log("upload-file", response);

    setFormData((prevFormData) => ({
      ...prevFormData,
      companyLogoPath: response.data,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      delete formData.companyAddress;
      delete formData.companyBenefits;
      delete formData.requirementJob;
      const data = await jobService.post(formData, employerInfo.id);
      console.log("data: ", data);
      setFormData((prev) => [...prev, data]);
      navigate("/employerPage");
      toast.success("Đăng tin thành công");
    } catch (error) {
      toast.error("Đăng tin thất bại");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center box-border w-full">
      <EmployerHeader />
      <form onSubmit={handleSubmit}>
        <div className="w-full h-auto flex justify-center items-center mt-3">
          <div className="w-[900px] rounded-lg p-4 bg-slate-200">
            <div className="flex items-center gap-2 text-slate-700">
              <BsHandbagFill className="w-21 h-22" />
              <h1 className="font-bold text-[16px]">Đăng tin tuyển dụng</h1>
            </div>
            <div className="space-y-4 mt-4 p-4 bg-white rounded-lg">
              <div className="flex items-center gap-2 text-slate-700">
                <BsHandbagFill className="w-21 h-22" />
                <h1 className="font-bold text-[16px]">Mô tả công việc</h1>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Chức danh<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Eg. Senior UX Designer"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              {/* Replace the options with actual options as required */}
              <div className="flex space-x-4 justify-center w-full">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    Cấp bậc<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Vui lòng chọn</option>
                    <option value="Thực tập sinh/ sinh viên">
                      Thực tập sinh/ sinh viên
                    </option>
                    <option value="Mới tốt nghiệp">Mới tốt nghiệp</option>
                    <option value="Nhân viên">Nhân viên</option>
                    <option value="Trưởng phòng">Trưởng phòng</option>
                    <option value="Giám đốc và Cấp cao hơn">
                      Giám đốc và Cấp cao hơn
                    </option>
                    {/* Add specific options here */}
                  </select>
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    Lĩnh vực công việc<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="fieldJob"
                    value={formData.fieldJob}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
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
              </div>
              {/* Repeat for other selects */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Địa điểm làm việc<span className="text-red-500">*</span>
                </label>
                <select
                  name="addressJob"
                  value={formData.addressJob}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Vui lòng chọn</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                  {/* Add specific options here */}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mô tả<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="descriptionJob"
                  value={formData.descriptionJob}
                  onChange={handleChange}
                  placeholder="Nhập mô tả"
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Yêu cầu công việc<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="requirementJob"
                  value={formData.requirementJob}
                  onChange={handleChange}
                  placeholder="Nhập yêu cầu"
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div className="flex space-x-6 justify-start w-full">
                <div className="">
                  <label className="block text-sm font-medium text-gray-700 w-100">
                    Mức lương(USD)<span className="text-red-500">*</span>
                  </label>
                  <input
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    Số lượng ứng tuyển (Người)
                  </label>
                  <input
                    name="numberOfRecruitment"
                    value={formData.numberOfRecruitment}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Địa chỉ email nhận hồ sơ
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <FaWarehouse className="w-21 h-22" />
                <h1 className="font-bold text-[16px]">Thông tin công ty</h1>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tên công ty<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Tên công ty"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex space-x-4 w-full">
                <div className="w-[70%]">
                  <label className="block text-sm font-medium text-gray-700">
                    Địa chỉ công ty<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleChange}
                    placeholder="Địa chỉ công ty"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-[30%]">
                  <label className="block text-sm font-medium text-gray-700">
                    Quy mô công ty<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Chọn quy mô công ty</option>
                    <option value="50">5-50</option>
                    <option value="100">50-100</option>
                    <option value="200">100-200</option>
                    {/* Add specific options here */}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Thông tin công ty<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="companyInformation"
                  value={formData.companyInformation}
                  onChange={handleChange}
                  placeholder="Thông tin công ty"
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phúc lợi từ công ty
                </label>
                <textarea
                  name="companyBenefits"
                  value={formData.companyBenefits}
                  onChange={handleChange}
                  placeholder="Phúc lợi từ công ty"
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              {/* <div className="text-center w-full">
                <div className="mb-2">
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Logo công ty:{" "}
                    <span className="text-lg text-red-500">*</span>
                  </label>
                  <Upload
                    id="companyLogo"
                    name="companyLogo"
                    beforeUpload={() => false} // Prevent automatic file upload
                    onChange={(info) => handleFileUpload(info.file)}
                    maxCount={1}
                  >
                    <Button icon={<UploadOutlined />}>Chọn hình ảnh</Button>
                  </Upload>
                </div>
                <div className="mb-2 flex justify-center">
                  <img
                    src={API_URL_IMAGE + file}
                    className="w-[100px] h-auto"
                    alt=""
                  />
                </div>
              </div>{" "} */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Logo công ty<span className="text-red-500">*</span>
                </label>
                <input
                  name="companyLogoPath"
                  value={formData.companyLogoPath}
                  onChange={handleChange}
                  placeholder="Nhập link hình ảnh công ty"
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></input>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Hình ảnh công ty<span className="text-red-500">*</span>
                </label>
                <input
                  name="companyImagePath"
                  value={formData.companyImagePath}
                  onChange={handleChange}
                  placeholder="Nhập link hình ảnh công ty"
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></input>
              </div>
            </div>

            {/* Repeat for other fields */}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
        >
          Đăng tin
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default RecruitmentPage;
