import React from 'react';
import { FaWarehouse } from "react-icons/fa";

const CompanyDescription = ({ companyName, companyAddress, companySize, companyInfo, companyBenefits, handleChange, companyVideo }) => {
    return (
        <div className='w-full h-auto flex justify-center items-center mt-3'>
            <div className='w-[900px] rounded-lg p-4 bg-slate-200'>
                <div className='flex items-center gap-2 text-slate-700'>
                    <FaWarehouse className='w-21 h-22' />
                    <h1 className='font-bold text-[16px]'>Thông tin công ty</h1>
                </div>
                <div className="space-y-4  mt-4 p-4 bg-white rounded-lg">
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
                    <div className="flex space-x-4">
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
                            <label className="block text-sm font-medium text-gray-700">Quy mô công ty<span className='text-red-500'>*</span></label>
                            <select
                                name="companySize"
                                value={companySize}
                                onChange={handleChange}
                                className="flex-1 p-2 border border-gray-300 rounded-md"
                            >
                                <option value="">Chọn quy mô công ty</option>
                                {/* Add specific options here */}
                            </select>
                        </div>
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
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Hình ảnh công ty<span className='text-red-500'>*</span></label>
                        <input
                            type="file"
                            name="companyImage"
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Video công ty<span className='text-red-500'>*</span></label>

                        <input
                            type="text"
                            name="companyVideo"
                            value={companyVideo}
                            onChange={handleChange}
                            placeholder="Sao chép và dán liên kết Youtube của bạn vào đây"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CompanyDescription;