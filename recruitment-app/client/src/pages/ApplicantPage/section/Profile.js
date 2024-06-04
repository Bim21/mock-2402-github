import { Input, Radio } from 'antd';
import React from 'react'
import { CiCircleInfo } from "react-icons/ci";

const Profile = () => {
    return (
        <div className='w-[full] h-auto bg-white rounded-[9px] mt-4 pt-5 flex flex-col text-2xl'>
            <div className='text-2xl font-bold ml-4'>
                Bật cho phép tìm kiếm hồ sơ
            </div>

            <div className=' flex flex-row border border-blue-500 p-6 ml-5 mr-6 text-xl items-start gap-4 rounded-lg bg-blue-100'>
                <CiCircleInfo className='text-4xl text-blue-600' />
                Để cho phép nhà tuyển dụng tìm kiếm hồ sơ, hãy cập nhật hồ sơ trực tuyến VietnamWorks
                hoặc nhập các <br/> thông tin: "Hồ sơ đính kèm", "Thông tin liên hệ" và "Công việc mong muốn"
            </div>


            <div className=' flex flex-col p-6 ml-5 mr-6 text-xl items-start gap-4 rounded-lg bg-slate-50 mt-3'>

                <div className='text-xl font-bold '>Hồ sơ tìm kiếm mặc định</div>

                <div className='font-medium'>Bằng hồ sơ VietnamWorks </div>


                <div className='border border-gray-100 bg-gray-100 w-full h-auto rounded-lg  p-3 ' >
                    <div className='flex flex-row items-center'>
                        <Radio></Radio>
                        <div>Hồ sơ VietnamWorks</div>

                        <div className='ml-80 flex flex-row gap-12'>
                            <button className='border  border-blue-500 p-1 rounded-lg text-blue-700 '>Cập nhật hồ sơ</button>
                            <button className='border  border-blue-500 p-1 rounded-lg text-blue-700 '>Xem như nhà tuyển dụng</button>
                        </div>
                    </div>

                    <div className='ml-6'>
                        <div>Hồ sơ VietnamWorks: Chưa được duyệt</div>
                        <div>Để bật cho phép tìm kiếm, hồ sơ trực tuyến VietnamWorks cần được hoàn thiện và được duyệt</div>

                    </div>

                </div>

                <div className='flex flex-row gap-96'>
                    <div className='font-medium'>Bằng hồ sơ đính kèm</div>
                    <div className='text-base text-blue-500'>Quản lý hồ sơ đính kèm</div>
                </div>
                <div className='text-lg'>Để cho phép tìm kiếm hồ sơ đính kèm, bạn cần thực hiện:</div>

                <button className='border  border-blue-500 p-1 rounded-lg text-blue-700 '>Bổ sung thông tin cơ bản</button>

                <div className='border border-gray-100 bg-gray-100 w-full flex flex-col rounded-lg p-5' >
                    <div className='flex flex-row'>
                        <Radio></Radio>
                        <div>CV Nông Văn Trình - CV Nông Văn Trình - VNNew-TopCVvn.pdf</div>
                    </div>
                    <div className='text-base ml-6'>Đã tải lên 04/06/2024</div>

                </div>



            </div>



            <div className='w-[full] h-auto  rounded-[9px] mt-4 pt-5 flex flex-col text-2xl'>
                <div className='text-xl font-bold ml-4'>
                Làm mới hồ sơ
                </div>

                <div className=' flex flex-row border border-blue-500 p-6 ml-5 mr-6 text-xl items-start gap-4 rounded-lg bg-blue-100'>
                    <CiCircleInfo className='text-4xl text-blue-600' />
                    Bạn cần bật tính năng cho phép tìm kiếm hồ sơ trước khi sử dụng tính năng này
                     để đảm bảo hồ sơ của <br/> bạn hiển thị trên trang tìm kiếm ứng viên của Nhà tuyển dụng.
                </div>

                <div className='ml-5 text-lg font-medium opacity-75 mt-4'>Hồ sơ sẽ được tự động làm mới và lên đầu trang tìm kiếm ứng viên của Nhà tuyển <br/>
                 dụng trong 15 ngày từ ngày bật tính năng.</div>

            </div>




            <div className='w-[full] h-auto  rounded-[9px] mt-4 pt-5 flex flex-col text-2xl'>
                <div className='text-xl font-bold ml-4'>
                Ẩn hồ sơ của tôi với các công ty
                </div>

                <div className=' flex flex-col p-3 ml-5 mr-6 mt-4 text-xl items-start gap-4 rounded-lg bg-slate-100'>
                    <div className='flex flex-row gap-3'>
                        <div>Nhập domain email công ty</div>
                        <div className='bg-orange-500 rounded-2xl p-1 text-base font-bold text-white'>Được đề nghị</div>
                    </div>
                    <Input prefix="@" suffix="Them" className='w-[500px] h-12' 
                    />
                </div>


                <div className=' flex flex-col p-3 ml-5 mr-6 mt-4 text-xl items-start gap-4 rounded-lg bg-slate-100 mb-8'>
                    <div className='flex flex-row gap-3'>
                        <div>Hoặc nhập tên công ty</div>
                       
                    </div>
                    <Input className='w-[500px] h-12' />
                </div>

                

            </div>





        </div>


    )
}

export default Profile
