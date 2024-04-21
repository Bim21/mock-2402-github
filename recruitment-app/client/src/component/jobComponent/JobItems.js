import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";


const JobItem = ({ companyLogo, jobTitle, companyName, salary, location, tags }) => {

  return (
    <div className='rounded-lg flex items-center border-[1px] border-blue-300 p-4 mb-[10px] bg-blue-50 hover:bg-white'>
      <a href='/' className='bg-white rounded-lg w-24 h-24 flex items-center justify-center mr-4'>
        <img src={companyLogo} alt='Company Logo' className='rounded-lg' />
      </a>
      <div className='flex flex-col flex-1 p-1'>
        <a href='/' className='flex items-center'>
          <span className='text-blue-600 font-medium mr-1 rounded-md bg-blue-100 px-[4px] text-[12px]'>Mới</span>
          <span className='text-[16px] font-medium'>{jobTitle}</span>
        </a>
        <a href='/' className='text-sm hover:text-orange-400'>{companyName}</a>
        <div className='text-sm text-orange-400'>{salary} <span className='text-black'>  | {location}</span></div>
        <div className='flex gap-1 text-[12px] text-slate-500'>
          {tags.map((tag, index) => (
            <div key={index} className='bg-slate-200 rounded-md px-2'>{tag}</div>
          ))}
        </div>
      </div>
      <div className='flex text-blue-500 items-start justify-center h-full'>
        <AiOutlineHeart className='w-[24px] h-[24px] rounded-full hover:bg-blue-50 hover:cursor-pointer'/>
      </div>
    </div>
  );
};

export default JobItem;