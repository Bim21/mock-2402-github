import React from 'react';
import ComSection1 from './comSection1';
import CompanyItems from './CompanyItems';

const CompanyContent = () => {
    return (
        <div className='pt-[20px] box-border '>
            <div className='w-[1200px] px-[16px] mx-[auto] flex flex-col justify-start items-center bg-slate-50'>
                <ComSection1/>
                <CompanyItems/>
            </div>
            
        </div>
    );
};

export default CompanyContent;