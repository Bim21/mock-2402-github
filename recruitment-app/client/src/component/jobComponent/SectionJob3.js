import React from 'react'
import { BsMailboxFlag } from "react-icons/bs";

const SectionJob3 = () => {
    return (
        <div div class="flex w-full h-[79px] mb-[16px] mt-4">
            <div className='w-full rounded-[6px] flex items-center justify-between border-[1px] px-[10px] bg-white border-gray-200'>


                <div className='bg-white rounded-[12px] p-[4px] flex justify-center items-center w-[50px] mr-[10px]'>
                    <BsMailboxFlag className='w-full h-auto'/>
                </div>


                <div className='flex flex-col w-full p-[4px]'>

                    <div className='text-[16px] text-slate-600 font-bold  '>Nhận thông báo việc làm qua Email</div>
                    <div className='text-[12px]  text-slate-600'>Nhận thông báo khi có việc làm mới</div>

                </div>

            <div className='leading-[18px] w-[200px] flex justify-center items-center '>
                    <button className='bg-slate-100 hover:bg-slate-200 h-[40px] rounded-[6px] flex items-center justify-center px-4 text-[14px]'>Nhận thông báo</button>
                </div>

            </div>

        </div>
    )
}

export default SectionJob3