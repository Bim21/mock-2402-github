import React from 'react';

const CompanyCard = ({ name, bannerUrl, link, logoUrl, followersCount, positions }) => {
    return (
        <div className='w-1/3 pt-[16px] px-[6px] leading-3'>

            <div className='w-full mr-[16px] mb-[16px] p-[8px] rounded-[6px] border-solid border-[1px] border-slate-200'>
                <div className='w-full h-[90px] rounded-t-[6px] mb-[8px] '>
                    <img src={bannerUrl} alt='Company Banner' className='w-full h-full rounded-t-[6px]' />
                </div>
                <div className='flex px-[8px]'>
                    <a href={link} className='w-[88px] h-[88px] rounded-[6px] shadow-lg '>
                        <img src={logoUrl} alt='Company Logo' className='object-contain w-full h-full p-[10px]' />
                    </a>
                    <div className='grow pl-[12px] pt-[12px] truncate'>
                        <a href={link} className='font-medium text-[18px] leading-[22px] mb-[6px] overflow-hidden hover:text-orange-400'>{name}</a>
                        <div>
                            <p className='text-slate-400 text-[12px] font-normal leading-[18px] '> {followersCount} lượt theo dõi</p>
                            <button className='text-blue-500 h-[32px] float-right px-[4px] font-medium rounded-[8px] hover:bg-blue-50'> + Theo dõi</button>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='px-[8px] pt-[16px] pb-[8px] h-[165px]'>
                            {console.log(positions)}
                        {positions.map((position, index) => (
                            <div key={index} className='py-[12px] px-[16px] rounded-[12px] border-solid border-[1px] mb-[8px] '>
                                <p className='mb-[4px] text-[14px] font-semibold leading-[18px] truncate'>
                                    <a href='/company' className='hover:text-orange-400 '>{position.title}</a>
                                </p>
                                <div className='flex '>
                                    <p className='text-[14px] text-orange-400 mr-[4px]'>{position.salary}</p>
                                    <p className='text-[14px] text-gray-400'>| {position.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className='w-full px-4 py-2 font-medium rounded text-center text-orange-400 border border-orange-400 hover:bg-blue-50'>Xem công ty</button>
            </div>
        </div>
    );
};

export default CompanyCard;