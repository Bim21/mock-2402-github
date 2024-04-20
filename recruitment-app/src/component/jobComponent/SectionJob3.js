import React from 'react'
import { BsMailboxFlag } from "react-icons/bs";

const SectionJob3 = () => {
    return (
        <div div class="flex flex-col  w-[1200px] pl-11">
            <div
                className='rounded-[12px] flex items-center border-solid border-2 px-[10px] py-[10px] border-gray-200'>
            
                {/* <div className='bg-white rounded-[12px] w-[full] h-[full] p-[4px] flex items-center'>
                    <img src='D:\Web-Tuyen-Dung\mock-2402-github\recruitment-app\src\assets\thongbao.png'
                        className='rounded-[12px]'
                    />
                </div> */}

                <div className='bg-white rounded-[12px]  h-[100px] w-[100px] p-[4px] flex justify-center items-center text-5xl'>
                    <BsMailboxFlag/>
                </div>


                <div className='flex flex-col gap-[4px] w-full p-[4px] pl-40'>

                    <div className='text-[18px] text-black text-xl font-bold  '>Nhan thong bao viec lam qua Email</div>
                    <div className='text-[15px]  text-black'>Nhan thong bao khi co viec lam moi</div>

                </div>

                <div className='text-[13px] leading-[18px] truncate'>
                    <button className='bg-slate-200 h-10 rounded-[9px] w-[150px] flex items-center pl-3 '>Nhan thong bao</button>
                </div>

            </div>

        </div>
    )
}

export default SectionJob3
