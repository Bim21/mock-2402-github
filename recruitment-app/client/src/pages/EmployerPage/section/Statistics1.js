import React from 'react';

const Statistics1 = () => {
    return (
        <div className='mb-[10px] flex flex-row w-full '>
            <div className='w-[42%] mx-2 flex-col gap-2'>
                <div className='bg-sky-100 flex justify-between rounded-lg shadow-md w-full'>
                    <div className='p-4'>
                        <p className='text-[20px] font-semibold'>Xin chào,</p>
                        <p className='text-[20px] font-semibold text-orange-400'>Tran Chien</p>
                        <p className='pt-5 text-[14px]'>Đây là một số thông tin để bạn có thể bắt đầu sử dụng:</p>
                        <div className='flex mt-[10px] text-[14px]'>
                            <img src='https://employer.vietnamworks.com/v2/dashboard/static/media/icon-faq.ad3cd0ec16d625ec8311dfb4f79f84a8.svg' alt=''
                                className='mr-[15px]' />
                            <a href='https://faq.vietnamworks.com/employers-vi/' className='text-blue-400 hover:text-slate-900'>FAQ/Hướng dẫn sử dụng</a>
                        </div>
                        <div className='flex mt-[10px] text-[14px]'>
                            <img src='https://employer.vietnamworks.com/v2/dashboard/static/media/icon-explore.8af54e41c9357aaac43454ac42dc1da4.svg' alt=''
                                className='mr-[15px]' />
                            <a href='https://employer.vietnamworks.com/choose-services' className='text-blue-400 hover:text-slate-900'>Khám phá sản phẩm</a>
                        </div>
                    </div>
                    <div className='flex flex-col items-end justify-end pr-4 pb-0'>
                        <img src='https://employer.vietnamworks.com/v2/dashboard/static/media/img-section-welcome.44cf26351d8ef0e81c024194906421ae.svg' alt=''
                            className=' w-[291px] h-[171px] py-0'
                        />
                    </div>
                </div>
                <div className=' w-full rounded-lg mt-4 py-4 px-2 shadow-[0_0_6px_-3px_rgba(0,0,0,0.3)] bg-white'>
                    <div className='text-[18px] font-semibold'>Điểm khả dụng</div>
                    <div className='flex w-full mt-4 min-h-[170px]'>
                        <div className='w-[50%] bg-gray-100 px-[4px] mr-2 flex items-center rounded-lg'>
                            <div className='ml-2'>
                                <div className='text-[24px] font-semibold text-orange-400'>0</div>
                                <div className='text-[14px] leading-[22px]'>Điểm đăng tuyển</div>
                            </div>
                        </div>
                        <div className='w-[50%] bg-gray-100 px-[4px] flex items-center rounded-lg'>
                            <div className='ml-2'>
                                <div className='text-[24px] font-semibold text-orange-400'>0</div>
                                <div className='text-[14px] leading-[22px]'>Điểm xem hồ sơ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[58%] mx-2 bg-white rounded-lg flex-col justify-center items-end shadow-[0_0_6px_-3px_rgba(0,0,0,0.3)]'>
                <div className='p-[20px] w-full h-[90%]'>
                    <div className='text-[18px] font-semibold'>Tình trạng hiện tại</div>
                    <div className=' w-full flex justify-center mt-[70px]'>
                        <img src='https://employer.vietnamworks.com/v2/dashboard/static/media/icon-empty-current-status.dc7c121ad253b15972a4bb894e7084fd.svg' alt='' />
                    </div>
                    <div className='text-center mt-[10px]'>Không có dữ liệu cho báo cáo này</div>
                </div>
                <div className='h-[10%] bg-sky-100 text-center py-[10px] rounded-b-lg border-t-[1px]'>
                    <div className='text-[14px] text-blue-400 hover:cursor-pointer hover:text-slate-800'>Xem tất cả báo cáo {">"} </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics1;