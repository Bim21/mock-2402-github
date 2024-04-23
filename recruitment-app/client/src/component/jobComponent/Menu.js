import React from 'react';
import LocationMenu from './menuItems/LocationMenu';
import Career from './menuItems/Career';
import CompanyField from './menuItems/CompanyField';
import Level from './menuItems/Level';
import Urgently from './menuItems/Urgently';

const Menu = () => {
    return (
        <div className='flex w-full h-[64px] bg-white items-center justify-between rounded-[12px] p-[12px] shadow-[0_1px_8px_rgba(0,0,0,0.12)]'>
            <div className='flex items-center gap-[8px]'>
                <LocationMenu />
                <Career />
                <CompanyField />
                <Level />
                <Urgently />
            </div>
            <div>
                <button className='h-[40px] '>Xóa</button>
            </div>
        </div>
    );
};

export default Menu;