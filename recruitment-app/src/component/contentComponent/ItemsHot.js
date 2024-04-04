import React from 'react';
import { BiSolidHot } from 'react-icons/bi';

const ItemsHot = () => {
    return (
        <div class="basis-1/3 ">
            <div class="flex flex-col gap-[4px]">
                <a href='/'
                    className='rounded-[12px] flex items-center border-solid border-2 px-[12px] py-[15px] border-gray-200 justify-center'>
                    <div className='bg-white rounded-[12px] w-[86px] h-[86px] p-[4px] flex items-center'>
                        <img src='https://images.vietnamworks.com/pictureofcompany/54/11225215.png'
                            className='rounded-[12px]'
                        />
                    </div>
                    <div className='flex flex-col gap-[4px] w-full p-[4px]'>
                        <div className='text-[16px] font-[600] leading-[20px] truncate'>
                            Tên Công ty
                        </div>
                        <div className='text-[14px] leading-[18px] truncate '>Vị trí</div>
                        <div className='text-[14px] leading-[18px] font-[500] text-orange-400'>Thương lượng</div>
                        <div className='text-[14px] leading-[18px] truncate'>Địa chỉ</div>
                    </div>
                    <div className='flex justify-center items-center text-red-500 p-[4px]'>
                        <BiSolidHot className='' />
                        <span>Hot</span>
                    </div>
                </a>
                <a href='/'
                    className='rounded-[12px] flex items-center border-solid border-2 px-[12px] py-[15px] border-gray-200 justify-center'>
                    <div className='bg-white rounded-[12px] w-[86px] h-[86px] p-[4px] flex items-center'>
                        <img src='https://images.vietnamworks.com/pictureofcompany/54/11225215.png'
                            className='rounded-[12px]'
                        />
                    </div>
                    <div className='flex flex-col gap-[4px] w-full p-[4px]'>
                        <div className='text-[16px] font-[600] leading-[20px] truncate'>
                            Tên Công ty
                        </div>
                        <div className='text-[14px] leading-[18px] truncate '>Vị trí</div>
                        <div className='text-[14px] leading-[18px] font-[500] text-orange-400'>Thương lượng</div>
                        <div className='text-[14px] leading-[18px] truncate'>Địa chỉ</div>
                    </div>
                    <div className='flex justify-center items-center text-red-500 p-[4px]'>
                        <BiSolidHot className='' />
                        <span>Hot</span>
                    </div>
                </a>
                <a href='/'
                    className='rounded-[12px] flex items-center border-solid border-2 px-[12px] py-[15px] border-gray-200 justify-center'>
                    <div className='bg-white rounded-[12px] w-[86px] h-[86px] p-[4px] flex items-center'>
                        <img src='https://images.vietnamworks.com/pictureofcompany/54/11225215.png'
                            className='rounded-[12px]'
                        />
                    </div>
                    <div className='flex flex-col gap-[4px] w-full p-[4px]'>
                        <div className='text-[16px] font-[600] leading-[20px] truncate'>
                            Tên Công ty
                        </div>
                        <div className='text-[14px] leading-[18px] truncate '>Vị trí</div>
                        <div className='text-[14px] leading-[18px] font-[500] text-orange-400'>Thương lượng</div>
                        <div className='text-[14px] leading-[18px] truncate'>Địa chỉ</div>
                    </div>
                    <div className='flex justify-center items-center text-red-500 p-[4px]'>
                        <BiSolidHot className='' />
                        <span>Hot</span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ItemsHot;