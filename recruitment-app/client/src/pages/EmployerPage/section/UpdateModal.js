import React, { useEffect, useState } from "react";
import { addressOptions, careerOptions } from "../../../utils/constants";

const UpdateModal = ({ isOpen, onClose, onUpdate, job }) => {
  console.log("job...", job);

  const [updateData, setUpdateData] = useState({
    level: "",
    jobField: "", //Tất cả lĩnh vực công ty
    jobAddress: [""],
    careerJob: [""], //Ngành nghề
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressJobChange = (index, value) => {
    setUpdateData((prevFormData) => {
      const updatedAddressJob = [...prevFormData.jobAddress];
      updatedAddressJob[index] = value;
      return {
        ...prevFormData,
        jobAddress: updatedAddressJob,
      };
    });
  };

  const handleCareerJobChange = (index, value) => {
    setUpdateData((prevFormData) => {
      const updatedCareerJob = [...prevFormData.careerJob];
      updatedCareerJob[index] = value;
      return {
        ...prevFormData,
        careerJob: updatedCareerJob,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updateData);
    onUpdate({
      ...updateData,
      jobAddress: updateData.jobAddress,
      careerJob: updateData.careerJob,
    });
  };

  useEffect(() => {
    if (job) {
      setUpdateData({
        level: job.level,
        jobField: job.jobField,
        jobAddress: job.jobAddress,
        careerJob: job.careerJob,
      });
    }
  }, [job]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Cập nhật thông tin
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="px-4 py-5 sm:px-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Địa điểm<span className="text-red-500">*</span>
            </label>
            {updateData.jobAddress?.map((address, index) => (
              <select
                key={index}
                value={address}
                onChange={(e) => handleAddressJobChange(index, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Chọn địa chỉ</option>
                {addressOptions?.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ))}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Ngành nghề<span className="text-red-500">*</span>
            </label>
            {updateData.careerJob?.map((career, index) => (
              <select
                key={index}
                value={career}
                onChange={(e) => handleCareerJobChange(index, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Chọn nghề nghiệp</option>
                {careerOptions?.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ))}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Lĩnh vực<span className="text-red-500">*</span>
            </label>
            <select
              name="jobField"
              value={updateData.jobField}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Vui lòng chọn</option>
              <option value="Cơ khí/Máy móc/Thiết bị công nghiệp">
                Cơ khí/Máy móc/Thiết bị công nghiệp
              </option>
              <option value="Bán lẻ/Bán sỉ">Bán lẻ/Bán sỉ</option>
              <option value="Bảo hiểm">Bảo hiểm</option>
              <option value="Chuỗi cung ứng">Chuỗi cung ứng</option>
              <option value="Bất Động Sản/Cho thuê">
                Bất Động Sản/Cho thuê
              </option>
              <option value="Chính phủ & NGO">Chính phủ & NGO</option>
              <option value="Bao bì/ In ấn/ Dán nhãn">
                Bao bì/ In ấn/ Dán nhãn
              </option>
              <option value="Hành chính văn phòng">Hành chính văn phòng</option>
              {/* Add specific options here */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Cấp bậc<span className="text-red-500">*</span>
            </label>
            <select
              name="level"
              value={updateData.level}
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
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cập nhật
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Hủy bỏ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
