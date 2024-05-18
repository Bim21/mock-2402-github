import React from 'react';

const Statistics3 = () => {
    return (
        <div className='mb-[10px] h-[257px] flex flex-row w-full '>
            <div className='w-[42%] mr-2 rounded-lg mt-4 p-5 shadow-[0_0_6px_-3px_rgba(0,0,0,0.3)] bg-white'>
                <div className='text-[18px] font-semibold'>Trạng thái tin đăng</div>
                <div className='flex flex-col gap-2 mt-5 w-full'>
                    <div className='flex flex-row gap-2'>
                        <div className=' px-[10px] pb-[10px] rounded-[10px] bg-gray-100 basis-1/3'>
                            <div className='text-[24px] font-semibold text-green-400'>0</div>
                            <div className='text-[14px] leading-[22px] text-gray-600'>Đang hiển thị</div>
                        </div>
                        <div className='px-[10px] pb-[10px] rounded-[10px] bg-gray-100 basis-1/3'>
                            <div className='text-[24px] font-semibold text-slate-400'>0</div>
                            <div className='text-[14px] leading-[22px] text-gray-600'>Đang ẩn</div>
                        </div>
                        <div className='px-[10px] pb-[10px] rounded-[10px] bg-gray-100 basis-1/3'>
                            <div className='text-[24px] font-semibold text-black'>0</div>
                            <div className='text-[14px] leading-[22px] text-gray-600'>Nháp</div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <div className=' px-[10px] pb-[10px] rounded-[10px] bg-gray-100 basis-1/3'>
                            <div className='text-[24px] font-semibold text-orange-400'>0</div>
                            <div className='text-[14px] leading-[22px] text-gray-600'>Việc làm ảo</div>
                        </div>
                        <div className='px-[10px] pb-[10px] rounded-[10px] bg-gray-100 basis-1/3'>
                            <div className='text-[24px] font-semibold text-pink-400'>0</div>
                            <div className='text-[14px] leading-[22px] text-gray-600'>Hết hạn</div>
                        </div>
                        <div className='px-[10px] pb-[10px] rounded-[10px] bg-gray-100 basis-1/3'>
                            <div className='text-[24px] font-semibold text-yellow-400'>0</div>
                            <div className='text-[14px] leading-[22px] text-gray-600'>Hết hạn trong 7 ngày</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[58%] p-5 ml-2 bg-white rounded-lg mt-4 shadow-[0_0_6px_-3px_rgba(0,0,0,0.3)]'>
                <div className='text-[18px] font-semibold'>
                    Ứng viên vừa cập nhật
                </div>
                <div className='m-4 flex items-center'>
                    <img src='https://employer.vietnamworks.com/v2/img/default-profile.png' alt='' className='rounded-[50%] w-[125px] h-[125px]'/>
                    <div className='ml-10'>   
                        <div className='text-[14px]'>
                            <span className='font-semibold'>Tên:</span> Phan Đức
                        </div>
                        <div className='text-[14px]'>
                            <span className='font-semibold'>Tiêu đề:</span> Nhân viên cùi bắp
                        </div>
                        <div className='text-[14px]'>
                            <span className='font-semibold'>Kinh nghiệm:</span> 1 năm
                        </div>
                        <div className='text-[14px]'>
                            <span className='font-semibold'>Vị trí:</span> Đà Nẵng
                        </div>
                        <div className='text-[14px]'>
                            <span className='font-semibold'>Lương:</span> $600
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics3;