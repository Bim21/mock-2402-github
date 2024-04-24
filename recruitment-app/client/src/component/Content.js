import React from 'react';
import Section1 from './contentComponent/Section1';
import Section2 from './contentComponent/Section2';


const Content = () => {
    return (
        <div className='w-full min-h-[200px]'>
            <Section1 />
            <Section2 />
        </div>

    );
};

export default Content;