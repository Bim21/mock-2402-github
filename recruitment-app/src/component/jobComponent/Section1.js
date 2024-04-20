import React from 'react'
import ItemJob from './ItemJob'

const Section1 = () => {
  return (
    <section className='pt-[30px]'>
    <div className='max-w-[auto] px-[16px] mx-[auto] '>
        {/* <div className='border-solid rounded-[6px] h-[auto] border-2 border-sky-200'> */}
            <div className='flex flex-col justify-center w-[1200px]'>
                {/* <div className='rounded-t-5px flex items-center justify-between bg-blue-100 p-[10px]'>
                    <div className='text-[24px] font-mono font-bold'>Việc Làm Tốt Nhất</div>
                    <a href='/' className=' text-blue-600 font-mono'>Xem Tất Cả</a>
                </div> */}
                <div className='p-[24px] w-[1200px]'>
                    <div className='flex flex-col'>
                        <div class="flex flex-row gap-[4px]">
                            <ItemJob/>
                            {/* <ItemJob/>
                            <ItemJob/> */}
                        </div>
                        <div>


                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
    </div>
</section>
  )
}

export default Section1
