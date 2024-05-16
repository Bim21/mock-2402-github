import React, { useState } from 'react';
import { BsHandbagFill } from 'react-icons/bs';
import { FaWarehouse } from 'react-icons/fa';

const JobDescripstion = ({
    title,
    level,
    jobType,
    career,
    workField,
    location,
    description,
    requirements,
    salary,
    quantity,
    contactEmail,
    handleChange,
    companyName,
    companyAddress,
    companyInfo,
    companyBenefits,
    companyLogo

}) => {

    return (
        <div className='w-full h-auto flex justify-center items-center mt-3'>
            <div className='w-[900px] rounded-lg p-4 bg-slate-200'>
                <div className='flex items-center gap-2 text-slate-700'>
                    <BsHandbagFill className='w-21 h-22' />
                    <h1 className='font-bold text-[16px]'>Đăng tin tuyển dụng</h1>
                </div>
                <div className="space-y-4 mt-4 p-4 bg-white rounded-lg">
                    <div className='flex items-center gap-2 text-slate-700'>
                        <BsHandbagFill className='w-21 h-22' />
                        <h1 className='font-bold text-[16px]'>Mô tả công việc</h1>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Chức danh<span className='text-red-500'>*</span></label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={handleChange}
                            placeholder='Eg. Senior UX Designer'
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    {/* Replace the options with actual options as required */}
                    <div className="flex space-x-4 justify-center w-full">
                        <div className='w-full'>
                            <label className="block text-sm font-medium text-gray-700">Cấp bậc<span className='text-red-500'>*</span></label>
                            <select name="level" value={level} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                                <option value="">Vui lòng chọn</option>
                                <option value="">Thực tập sinh/ sinh viên</option>
                                <option value="">Mới tốt nghiệp</option>
                                <option value="">Nhân viên</option>
                                <option value="">Trưởng phòng</option>
                                <option value="">Giám đốc và Cấp cao hơn</option>
                                {/* Add specific options here */}
                            </select>
                        </div>
                        <div className='w-full'>
                            <label className="block text-sm font-medium text-gray-700">Loại việc làm</label>
                            <select name="jobType" value={jobType} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                                <option value="">Toàn thời gian</option>
                                <option value="">Bán thời gian</option>

                                {/* Add specific options here */}
                            </select>
                        </div>
                    </div>
                    {/* Repeat for other selects */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Ngành nghề chi tiết<span className='text-red-500'>*</span></label>
                        <select name="career" value={career} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                            <option value="">Vui lòng chọn</option>
                            <option value="">Bán lẻ/ Tiêu dùng</option>
                            <option value="">CEO & General Manangement</option>
                            <option value="">Công Nghệ thông tin/ Viễn thông</option>
                            <option value="">Dệt may/ Da giày</option>
                            <option value="">Dịch vụ ăn uống</option>
                            {/* Add specific options here */}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Lĩnh vực công việc<span className='text-red-500'>*</span></label>
                        <select name="workField" value={workField} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                            <option value="">Vui lòng chọn</option>
                            {/* Add specific options here */}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Địa điểm làm việc<span className='text-red-500'>*</span></label>
                        <select name="location" value={location} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                            <option value="">Vui lòng chọn</option>
                            {/* Add specific options here */}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Mô tả<span className='text-red-500'>*</span></label>
                        <textarea
                            name="description"
                            value={description}
                            onChange={handleChange}
                            placeholder="Nhập mô tả"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Yêu cầu công việc<span className='text-red-500'>*</span></label>
                        <textarea
                            name="requirements"
                            value={requirements}
                            onChange={handleChange}
                            placeholder="Nhập yêu cầu"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        ></textarea>
                    </div>
                    <div className="flex space-x-6 justify-start w-full">
                        <div className=''>
                            <label className="block text-sm font-medium text-gray-700 w-100">Mức lương(USD)<span className='text-red-500'>*</span></label>
                            <input name="salary" value={salary} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />

                        </div>
                        <div className=''>
                            <label className="block text-sm font-medium text-gray-700">Số lượng ứng tuyển (Người)</label>
                            <input name="quantity" value={quantity} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />

                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Địa chỉ email nhận hồ sơ<span className='text-red-500'>*</span></label>
                        <input
                            type="email"
                            name="contactEmail"
                            value={contactEmail}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className='flex items-center gap-2 text-slate-700'>
                        <FaWarehouse className='w-21 h-22' />
                        <h1 className='font-bold text-[16px]'>Thông tin công ty</h1>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Tên công ty<span className='text-red-500'>*</span></label>
                        <input
                            type="text"
                            name="companyName"
                            value={companyName}
                            onChange={handleChange}
                            placeholder="Tên công ty"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Địa chỉ công ty<span className='text-red-500'>*</span></label>
                        <input
                            type="text"
                            name="companyAddress"
                            value={companyAddress}
                            onChange={handleChange}
                            placeholder="Địa chỉ công ty"
                            className="flex-1 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Thông tin công ty<span className='text-red-500'>*</span></label>
                        <textarea
                            name="companyInfo"
                            value={companyInfo}
                            onChange={handleChange}
                            placeholder="Thông tin công ty"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phúc lợi từ công ty<span className='text-red-500'>*</span></label>
                        <textarea
                            name="companyBenefits"
                            value={companyBenefits}
                            onChange={handleChange}
                            placeholder="Phúc lợi từ công ty"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Logo công ty<span className='text-red-500'>*</span></label>
                        <input
                            type="file"
                            name="companyLogo"
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Repeat for other fields */}


                </div>
            </div>
        </div>
    );
};

export default JobDescripstion;