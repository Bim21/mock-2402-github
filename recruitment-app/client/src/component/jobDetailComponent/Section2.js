import React from 'react'
import { BsMailboxFlag } from "react-icons/bs";


const Section2 = () => {
  return (
    <div div class="flex w-full h-[79px] mb-[16px] mt-4">
            <div className='w-full rounded-[6px] flex items-center justify-between border-[1px] px-[10px] bg-gray-100 border-gray-200'>


                <div className='bg-white rounded-[12px] p-[4px] flex justify-center items-center w-[150px] mr-[10px]'>
                    <img src='https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fjob-detail%2Fyou-matching-this-job.png%3Fversion%3D528&w=128&q=75' alt=''
                                    // className='mx-[auto] w-[70px] h-[70px]'
                                />
                    
                </div>
                


                <div className='flex flex-col w-full p-[4px]'>

                    <div className='text-[16px] text-black   '>Mức độ phù hợp của bạn với công việc này:</div>
                    <a className='text-[15px]  text-blue-600 font-bold '>Đăng nhập để xem</a>

                </div>

            {/* <div className='leading-[18px] w-[200px] flex justify-center items-center '>
                    <button className='bg-slate-100 hover:bg-slate-200 h-[40px] rounded-[6px] flex items-center justify-center px-4 text-[14px]'>Nhận thông báo</button>
                </div> */}

            </div>

        </div>
  )
}

export default Section2
