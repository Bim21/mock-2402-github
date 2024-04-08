import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const CompanyItems = () => {
    return (
        <div className='flex flex-col gap-[20px] px-[32px] pt-[32px] pb-[16px] mt-[8px] bg-white border-solid border-[1px]'>
            <div className='flex items-center'>
                <div className='w-full flex justify-between items-center'>
                    <h2 className='leading-[28px] text-[23px] font-medium h-[40px] flex items-center'>Công ty nổi bật <span></span></h2>
                    <button className='flex flex-row gap-[3px] items-center pl-[8px] pr-[3px] h-[40px] border-[1px] rounded-[6px] text-[14px] hover:border-blue-300'>
                        <div>Tất cả lĩnh vực</div>
                        <div className='w-[24px] h-[24px] flex justify-center items-center'>
                            <IoIosArrowDown />
                        </div>
                    </button>

                </div>
            </div>
            <div class="flex flex-wrap w-full">
                <div className='w-1/3 pt-[16px] px-[6px] leading-3'>
                    <div className='w-full mr-[16px] mb-[16px] p-[8px] rounded-[6px] border-solid border-[1px] border-slate-200'>
                        <div className=''>
                            <div className='w-full h-[90px] rounded-t-[6px] mb-[8px] '>
                                <img src='https://images02.vietnamworks.com/companyprofile/null/en/VNW_Banner.png' alt=''
                                    className=' w-full h-full rounded-t-[6px]'
                                />
                            </div>
                            <div className='flex px-[8px] '>
                                <a href='https://www.vietnamworks.com/company/fpt-software'
                                    className='w-[88px] h-[88px] rounded-[6px] shadow-lg '>
                                    <img src='	https://images.vietnamworks.com/pictureofcompany/14/11129135.png' alt=''
                                        className='object-contain w-full h-full p-[10px]'
                                    />
                                </a>
                                <div className='grow pl-[12px] pt-[12px] truncate'>
                                    <a href='https://www.vietnamworks.com/company/fpt-software'
                                        className='font-medium text-[18px] leading-[22px] mb-[6px] overflow-hidden hover:text-orange-400'>
                                        FPT Software
                                    </a>
                                    <div>
                                        <p className='text-slate-400 text-[12px] font-normal leading-[18px] '>3116 lượt theo dõi</p>
                                        <button className='text-blue-500 h-[32px] float-right px-[4px] font-medium rounded-[8px] hover:bg-blue-50'> + Theo dõi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-[8px] pt-[16px] pb-[8px] h-[165px]'>
                            <div className='py-[12px] px-[16px] rounded-[12px] border-solid border-[1px] mb-[8px] '>
                                <p className='mb-[4px] text-[14px] font-semibold leading-[18px] '>
                                    <a href='/company' className='hover:text-orange-400'>Solution Architect (.NET)</a>
                                </p>
                                <div className='flex '>
                                    <p className='text-[14px] text-orange-400 mr-[4px]'>Thương lượng</p>
                                    <p className='text-[14px] text-gray-400'>| Đà Nẵng</p>
                                </div>
                            </div>
                            <div className='py-[12px] px-[16px] rounded-[12px] border-solid border-[1px] mb-[8px] '>
                                <p className='mb-[4px] text-[14px] font-semibold leading-[18px] truncate'>
                                    <a href='/company' className='hover:text-orange-400'>General Administration - Service Center Manager</a>
                                </p>
                                <div className='flex '>
                                    <p className='text-[14px] text-orange-400 mr-[4px]'>Thương lượng</p>
                                    <p className='text-[14px] text-gray-400'>| Đà Nẵng</p>
                                </div>
                            </div>
                        </div>
                        <div className='px-[8px] pb-[16px]'>
                            <button className='w-full font-medium px-[16px] flex items-center justify-center rounded-[8px] text-orange-400 border-solid border-[1px] border-orange-400 h-[40px] text-[14px]'>
                                Xem công ty
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-1/3 pt-[16px] px-[6px] leading-3'>
                    <div className='w-full mr-[16px] mb-[16px] p-[8px] rounded-[6px] border-solid border-[1px] border-slate-200'>
                        <div className=''>
                            <div className='w-full h-[90px] rounded-t-[6px] mb-[8px] '>
                                <img src='https://images02.vietnamworks.com/companyprofile/null/en/VNW_Banner.png' alt=''
                                    className=' w-full h-full rounded-t-[6px]'
                                />
                            </div>
                            <div className='flex px-[8px] '>
                                <a href='https://www.vietnamworks.com/company/fpt-software'
                                    className='w-[88px] h-[88px] rounded-[6px] shadow-lg '>
                                    <img src='	https://images.vietnamworks.com/pictureofcompany/14/11129135.png' alt=''
                                        className='object-contain w-full h-full p-[10px]'
                                    />
                                </a>
                                <div className='grow pl-[12px] pt-[12px] truncate'>
                                    <a href='https://www.vietnamworks.com/company/fpt-software'
                                        className='font-medium text-[18px] leading-[22px] mb-[6px] overflow-hidden hover:text-orange-400'>
                                        FPT Software
                                    </a>
                                    <div>
                                        <p className='text-slate-400 text-[12px] font-normal leading-[18px] '>3116 lượt theo dõi</p>
                                        <button className='text-blue-500 h-[32px] float-right px-[4px] font-medium rounded-[8px] hover:bg-blue-50'> + Theo dõi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-[8px] pt-[16px] pb-[8px] h-[165px]'>
                            <div className='py-[12px] px-[16px] rounded-[12px] border-solid border-[1px] mb-[8px] '>
                                <p className='mb-[4px] text-[14px] font-semibold leading-[18px] '>
                                    <a href='/company' className='hover:text-orange-400'>Solution Architect (.NET)</a>
                                </p>
                                <div className='flex '>
                                    <p className='text-[14px] text-orange-400 mr-[4px]'>Thương lượng</p>
                                    <p className='text-[14px] text-gray-400'>| Đà Nẵng</p>
                                </div>
                            </div>
                            <div className='py-[12px] px-[16px] rounded-[12px] border-solid border-[1px] mb-[8px] '>
                                <p className='mb-[4px] text-[14px] font-semibold leading-[18px] truncate'>
                                    <a href='/company' className='hover:text-orange-400'>General Administration - Service Center Manager</a>
                                </p>
                                <div className='flex '>
                                    <p className='text-[14px] text-orange-400 mr-[4px]'>Thương lượng</p>
                                    <p className='text-[14px] text-gray-400'>| Đà Nẵng</p>
                                </div>
                            </div>
                        </div>
                        <div className='px-[8px] pb-[16px]'>
                            <button className='w-full font-medium px-[16px] flex items-center justify-center rounded-[8px] text-orange-400 border-solid border-[1px] border-orange-400 h-[40px] text-[14px]'>
                                Xem công ty
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-1/3 pt-[16px] px-[6px] leading-3'>
                    <div className='w-full mr-[16px] mb-[16px] p-[8px] rounded-[6px] border-solid border-[1px] border-slate-200'>
                        <div className=''>
                            <div className='w-full h-[90px] rounded-t-[6px] mb-[8px] '>
                                <img src='https://images02.vietnamworks.com/companyprofile/null/en/VNW_Banner.png' alt=''
                                    className=' w-full h-full rounded-t-[6px]'
                                />
                            </div>
                            <div className='flex px-[8px] '>
                                <a href='https://www.vietnamworks.com/company/fpt-software'
                                    className='w-[88px] h-[88px] rounded-[6px] shadow-lg '>
                                    <img src='	https://images.vietnamworks.com/pictureofcompany/14/11129135.png' alt=''
                                        className='object-contain w-full h-full p-[10px]'
                                    />
                                </a>
                                <div className='grow pl-[12px] pt-[12px] truncate'>
                                    <a href='https://www.vietnamworks.com/company/fpt-software'
                                        className='font-medium text-[18px] leading-[22px] mb-[6px] overflow-hidden hover:text-orange-400'>
                                        FPT Software
                                    </a>
                                    <div>
                                        <p className='text-slate-400 text-[12px] font-normal leading-[18px] '>3116 lượt theo dõi</p>
                                        <button className='text-blue-500 h-[32px] float-right px-[4px] font-medium rounded-[8px] hover:bg-blue-50'> + Theo dõi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-[8px] pt-[16px] pb-[8px] h-[165px]'>
                            <div className='py-[12px] px-[16px] rounded-[12px] border-solid border-[1px] mb-[8px] '>
                                <p className='mb-[4px] text-[14px] font-semibold leading-[18px] '>
                                    <a href='/company' className='hover:text-orange-400'>Solution Architect (.NET)</a>
                                </p>
                                <div className='flex '>
                                    <p className='text-[14px] text-orange-400 mr-[4px]'>Thương lượng</p>
                                    <p className='text-[14px] text-gray-400'>| Đà Nẵng</p>
                                </div>
                            </div>
                            <div className='py-[12px] px-[16px] rounded-[12px] border-solid border-[1px] mb-[8px] '>
                                <p className='mb-[4px] text-[14px] font-semibold leading-[18px] truncate'>
                                    <a href='/company' className='hover:text-orange-400'>General Administration - Service Center Manager</a>
                                </p>
                                <div className='flex '>
                                    <p className='text-[14px] text-orange-400 mr-[4px]'>Thương lượng</p>
                                    <p className='text-[14px] text-gray-400'>| Đà Nẵng</p>
                                </div>
                            </div>
                        </div>
                        <div className='px-[8px] pb-[16px]'>
                            <button className='w-full font-medium px-[16px] flex items-center justify-center rounded-[8px] text-orange-400 border-solid border-[1px] border-orange-400 h-[40px] text-[14px]'>
                                Xem công ty
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-1/3 pt-[16px] px-[6px] leading-3'>
                    <div className='w-full mr-[16px] mb-[16px] p-[8px] rounded-[6px] border-solid border-[1px] border-slate-200'>
                        <div className=''>
                            <div className='w-full h-[90px] rounded-t-[6px] mb-[8px] '>
                                <img src='https://images02.vietnamworks.com/companyprofile/null/en/VNW_Banner.png' alt=''
                                    className=' w-full h-full rounded-t-[6px]'
                                />
                            </div>
                            <div className='flex px-[8px] '>
                                <a href='https://www.vietnamworks.com/company/fpt-software'
                                    className='w-[88px] h-[88px] rounded-[6px] shadow-lg '>
                                    <img src='	https://images.vietnamworks.com/pictureofcompany/14/11129135.png' alt=''
                                        className='object-contain w-full h-full p-[10px]'
                                    />
                                </a>
                                <div className='grow pl-[12px] pt-[12px] truncate'>
                                    <a href='https://www.vietnamworks.com/company/fpt-software'
                                        className='font-medium text-[18px] leading-[22px] mb-[6px] overflow-hidden hover:text-orange-400'>
                                        FPT Software
                                    </a>
                                    <div>
                                        <p className='text-slate-400 text-[12px] font-normal leading-[18px] '>3116 lượt theo dõi</p>
                                        <button className='text-blue-500 h-[32px] float-right px-[4px] font-medium rounded-[8px] hover:bg-blue-50'> + Theo dõi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-[8px] pt-[16px] pb-[8px] h-[165px]'>
                            <div className='py-[12px] px-[16px] rounded-[12px] border-solid border-[1px] mb-[8px] '>
                                <p className='mb-[4px] text-[14px] font-semibold leading-[18px] '>
                                    <a href='/company' className='hover:text-orange-400'>Solution Architect (.NET)</a>
                                </p>
                                <div className='flex '>
                                    <p className='text-[14px] text-orange-400 mr-[4px]'>Thương lượng</p>
                                    <p className='text-[14px] text-gray-400'>| Đà Nẵng</p>
                                </div>
                            </div>
                            <div className='py-[12px] px-[16px] rounded-[12px] border-solid border-[1px] mb-[8px] '>
                                <p className='mb-[4px] text-[14px] font-semibold leading-[18px] truncate'>
                                    <a href='/company' className='hover:text-orange-400'>General Administration - Service Center Manager</a>
                                </p>
                                <div className='flex '>
                                    <p className='text-[14px] text-orange-400 mr-[4px]'>Thương lượng</p>
                                    <p className='text-[14px] text-gray-400'>| Đà Nẵng</p>
                                </div>
                            </div>
                        </div>
                        <div className='px-[8px] pb-[16px]'>
                            <button className='w-full font-medium px-[16px] flex items-center justify-center rounded-[8px] text-orange-400 border-solid border-[1px] border-orange-400 h-[40px] text-[14px]'>
                                Xem công ty
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-1/3 pt-[16px] px-[6px] leading-3'>
                    <div className='w-full mr-[16px] mb-[16px] p-[8px] rounded-[6px] border-solid border-[1px] border-slate-200'>
                        <div className=''>
                            <div className='w-full h-[90px] rounded-t-[6px] mb-[8px] '>
                                <img src='https://images02.vietnamworks.com/companyprofile/null/en/VNW_Banner.png' alt=''
                                    className=' w-full h-full rounded-t-[6px]'
                                />
                            </div>
                            <div className='flex px-[8px] '>
                                <a href='https://www.vietnamworks.com/company/fpt-software'
                                    className='w-[88px] h-[88px] rounded-[6px] shadow-lg '>
                                    <img src='	https://images.vietnamworks.com/pictureofcompany/14/11129135.png' alt=''
                                        className='object-contain w-full h-full p-[10px]'
                                    />
                                </a>
                                <div className='grow pl-[12px] pt-[12px] truncate'>
                                    <a href='https://www.vietnamworks.com/company/fpt-software'
                                        className='font-medium text-[18px] leading-[22px] mb-[6px] overflow-hidden hover:text-orange-400'>
                                        FPT Software
                                    </a>
                                    <div>
                                        <p className='text-slate-400 text-[12px] font-normal leading-[18px] '>3116 lượt theo dõi</p>
                                        <button className='text-blue-500 h-[32px] float-right px-[4px] font-medium rounded-[8px] hover:bg-blue-50'> + Theo dõi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-[8px] pt-[16px] pb-[8px] h-[165px]'>
                            <div className='py-[12px] px-[16px] rounded-[12px] border-solid border-[1px] mb-[8px] '>
                                <p className='mb-[4px] text-[14px] font-semibold leading-[18px] '>
                                    <a href='/company' className='hover:text-orange-400'>Solution Architect (.NET)</a>
                                </p>
                                <div className='flex '>
                                    <p className='text-[14px] text-orange-400 mr-[4px]'>Thương lượng</p>
                                    <p className='text-[14px] text-gray-400'>| Đà Nẵng</p>
                                </div>
                            </div>
                            <div className='py-[12px] px-[16px] rounded-[12px] border-solid border-[1px] mb-[8px] '>
                                <p className='mb-[4px] text-[14px] font-semibold leading-[18px] truncate'>
                                    <a href='/company' className='hover:text-orange-400'>General Administration - Service Center Manager</a>
                                </p>
                                <div className='flex '>
                                    <p className='text-[14px] text-orange-400 mr-[4px]'>Thương lượng</p>
                                    <p className='text-[14px] text-gray-400'>| Đà Nẵng</p>
                                </div>
                            </div>
                        </div>
                        <div className='px-[8px] pb-[16px]'>
                            <button className='w-full font-medium px-[16px] flex items-center justify-center rounded-[8px] text-orange-400 border-solid border-[1px] border-orange-400 h-[40px] text-[14px]'>
                                Xem công ty
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-1/3 pt-[16px] px-[6px] leading-3'>
                    <div className='w-full mr-[16px] mb-[16px] p-[8px] rounded-[6px] border-solid border-[1px] border-slate-200'>
                        <div className=''>
                            <div className='w-full h-[90px] rounded-t-[6px] mb-[8px] '>
                                <img src='https://images02.vietnamworks.com/companyprofile/null/en/VNW_Banner.png' alt=''
                                    className=' w-full h-full rounded-t-[6px]'
                                />
                            </div>
                            <div className='flex px-[8px] '>
                                <a href='https://www.vietnamworks.com/company/fpt-software'
                                    className='w-[88px] h-[88px] rounded-[6px] shadow-lg '>
                                    <img src='	https://images.vietnamworks.com/pictureofcompany/14/11129135.png' alt=''
                                        className='object-contain w-full h-full p-[10px]'
                                    />
                                </a>
                                <div className='grow pl-[12px] pt-[12px] truncate'>
                                    <a href='https://www.vietnamworks.com/company/fpt-software'
                                        className='font-medium text-[18px] leading-[22px] mb-[6px] overflow-hidden hover:text-orange-400'>
                                        FPT Software
                                    </a>
                                    <div>
                                        <p className='text-slate-400 text-[12px] font-normal leading-[18px] '>3116 lượt theo dõi</p>
                                        <button className='text-blue-500 h-[32px] float-right px-[4px] font-medium rounded-[8px] hover:bg-blue-50'> + Theo dõi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-[8px] pt-[16px] pb-[8px] h-[165px]'>
                            <div className='py-[12px] px-[16px] rounded-[12px] border-solid border-[1px] mb-[8px] '>
                                <p className='mb-[4px] text-[14px] font-semibold leading-[18px] '>
                                    <a href='/company' className='hover:text-orange-400'>Solution Architect (.NET)</a>
                                </p>
                                <div className='flex '>
                                    <p className='text-[14px] text-orange-400 mr-[4px]'>Thương lượng</p>
                                    <p className='text-[14px] text-gray-400'>| Đà Nẵng</p>
                                </div>
                            </div>
                            <div className='py-[12px] px-[16px] rounded-[12px] border-solid border-[1px] mb-[8px] '>
                                <p className='mb-[4px] text-[14px] font-semibold leading-[18px] truncate'>
                                    <a href='/company' className='hover:text-orange-400'>General Administration - Service Center Manager</a>
                                </p>
                                <div className='flex '>
                                    <p className='text-[14px] text-orange-400 mr-[4px]'>Thương lượng</p>
                                    <p className='text-[14px] text-gray-400'>| Đà Nẵng</p>
                                </div>
                            </div>
                        </div>
                        <div className='px-[8px] pb-[16px]'>
                            <button className='w-full font-medium px-[16px] flex items-center justify-center rounded-[8px] text-orange-400 border-solid border-[1px] border-orange-400 h-[40px] text-[14px]'>
                                Xem công ty
                            </button>
                        </div>
                    </div>
                </div>
              


            </div>
            <div></div>
        </div>
    );
};

export default CompanyItems;