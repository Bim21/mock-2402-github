import React from 'react';

const Urgently = () => {
    return (
        <div className='w-[100px] flex hover:bg-blue-200 rounded-[6px] h-[40px] items-center justify-between px-2'>
            <div className='text-[13px]'>Tuyển gấp</div>
            <input type='checkbox' id="urgent" name="tuyển gấp" value="urgent" className='h-[18px] w-[18px]'/>
        </div>
    );
};

export default Urgently;