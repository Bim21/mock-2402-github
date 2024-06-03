import React from 'react'

import { IoAddCircleOutline } from "react-icons/io5";

const Section3 = () => {
    return (

        <>

            <div className='h-48  bg-white rounded-[9px] mt-4 pt-5'>

                <div className='flex flex-col ml-4 gap-5   '>
                    <div className='text-3xl font-bold'>Mục Tiêu Nghề Nghiệp</div>
                    <div className='italic text-base'>Giới thiệu bản thân và miêu tả mục tiêu nghề nghiệp của bạn</div>
                    <button type='button' className='flex flex-row items-center gap-2 text-xl font-bold text-blue-700'>
                        <IoAddCircleOutline className='text-3xl' />
                        <div>Thêm Mục Tiêu Nghề Nghiệp</div>
                    </button>
                </div>
            </div>


            <div className='h-48  bg-white rounded-[9px] mt-4 pt-5'>
                <div className='flex flex-col ml-4 gap-5   '>
                    <div className='text-3xl font-bold'>Kinh Nghiệm Làm Việc</div>
                    <div className='italic text-base'>Mô tả kinh nghiệm làm việc của bạn càng chi tiết càng tốt, 
                    điều đó giúp bạn có cơ hội hiển thị nhiều hơn trong kết quả tìm kiếm</div>
                    <button type='button' className='flex flex-row items-center gap-2 text-xl font-bold text-blue-700'>
                        <IoAddCircleOutline className='text-3xl' />
                        <div>Thêm Kinh Nghiệm Làm Việc</div>
                    </button>
                </div>
            </div>


            <div className='h-48  bg-white rounded-[9px] mt-4 pt-5'>
                <div className='flex flex-col ml-4 gap-5   '>
                    <div className='text-3xl font-bold'>Học Vấn</div>
                    <div className='italic text-base'>Mô tả toàn bộ quá trình học vấn của bạn, cũng như các bằng cấp bạn đã được và các khóa huấn luyện bạn đã tham gia</div>
                    <button type='button' className='flex flex-row items-center gap-2 text-xl font-bold text-blue-700'>
                        <IoAddCircleOutline className='text-3xl' />
                        <div>Thêm Học Vấn</div>
                    </button>
                </div>
            </div>



            <div className='h-48  bg-white rounded-[9px] mt-4 pt-5'>
                <div className='flex flex-col ml-4 gap-5   '>
                    <div className='text-3xl font-bold'>Kỹ Năng</div>
                    <div className='italic text-base'>Thêm Kỹ Năng</div>
                    <button type='button' className='flex flex-row items-center gap-2 text-xl font-bold text-blue-700'>
                        <IoAddCircleOutline className='text-3xl' />
                        <div>Trong phần này, bạn nên liệt kê các kỹ năng phù hợp với vị trí hoặc lĩnh vực nghề nghiệp mà bạn quan tâm.</div>
                    </button>
                </div>
            </div>


            <div className='h-48  bg-white rounded-[9px] mt-4 pt-5'>
                <div className='flex flex-col ml-4 gap-5   '>
                    <div className='text-3xl font-bold'>Ngoại Ngữ</div>
                    <div className='italic text-base'>Cập nhật thông tin ngoại ngữ, điều này sẽ giúp tăng triển vọng tìm kiếm công việc.</div>
                    <button type='button' className='flex flex-row items-center gap-2 text-xl font-bold text-blue-700'>
                        <IoAddCircleOutline className='text-3xl' />
                        <div>Thêm Ngoại Ngữ</div>
                    </button>
                </div>
            </div>



            <div className='h-48  bg-white rounded-[9px] mt-4 pt-5'>
                <div className='flex flex-col ml-4 gap-5   '>
                    <div className='text-3xl font-bold'>Người Tham Khảo</div>
                    <div className='italic text-base'>Thông tin Người Tham Khảo giúp tăng độ tin cậy cho hồ sơ của bạn và là cơ hội giúp bạn chứng minh năng lực của bản thân.</div>
                    <button type='button' className='flex flex-row items-center gap-2 text-xl font-bold text-blue-700'>
                        <IoAddCircleOutline className='text-3xl' />
                        <div>Thêm Người Tham Khảo</div>
                    </button>
                </div>
            </div>


            <div className='h-48  bg-white rounded-[9px] mt-4 pt-5'>
                <div className='flex flex-col ml-4 gap-5   '>
                    <div className='text-3xl font-bold'>Lời Nhận Xét</div>
                    <div className='italic text-base'>Điều người khác nói về bạn có thể tăng sự uy tín cho hồ sơ của bạn.</div>
                    <button type='button' className='flex flex-row items-center gap-2 text-xl font-bold text-blue-700'>
                        <IoAddCircleOutline className='text-3xl' />
                        <div>Tạo Yêu Cầu Nhận Xét</div>
                    </button>
                </div>
            </div>


            <div className='h-48  bg-white rounded-[9px] mt-4 pt-5'>
                <div className='flex flex-col ml-4 gap-5   '>
                    <div className='text-3xl font-bold'>Thêm Mục</div>
                    <div className='italic text-base'>Bổ sung thêm các thông tin giúp CV của bạn cuốn hút hơn.</div>

                    <div className='flex flex-row items-center gap-10'>
                    <button type='button' className='flex flex-row items-center gap-2 text-xl font-bold text-blue-700'>
                        <IoAddCircleOutline className='text-3xl' />
                        <div>Thêm Hoạt Động</div>
                    </button>

                    <button type='button' className='flex flex-row items-center gap-2 text-xl font-bold text-blue-700'>
                        <IoAddCircleOutline className='text-3xl' />
                        <div>Thêm Chứng Chỉ</div>
                    </button>

                    </div>
                   
                </div>
            </div>







        </>
















    )
}

export default Section3
