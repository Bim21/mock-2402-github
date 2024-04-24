import React from 'react';
import ItemsHot from './ItemsHot';

const Section2 = () => {
    return (
        <section className='pt-[30px]'>
            <div className='max-w-[1200px] px-[16px] mx-[auto] '>
                <div className='border-solid rounded-[6px] h-[auto] border-2 border-sky-200'>
                    <div className='flex flex-col justify-center w-full'>
                        <div className=' bg-[url(https://staging.vietnamworks.com/assets-page-container/images/featured-jobs-background.png)] bg-no-repeat rounded-t-5px flex items-center justify-between bg-blue-100 p-[10px]'>
                            <div className='text-[24px] font-mono font-bold'>Việc Làm Tốt Nhất</div>
                            <a href='/' className=' text-blue-600 font-mono'>Xem Tất Cả</a>
                        </div>
                        <div className='p-[24px] w-full'>
                            <div className='flex flex-col'>
                                <div class="flex flex-row gap-[4px]">
                                    <ItemsHot/>
                                    <ItemsHot/>
                                    <ItemsHot/>
                                    
                                </div>
                                <div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;