import React from 'react';
import Statistics1 from './section/Statistics1';
import Statistics2 from './section/Statistics2';
import Statistics3 from './section/Statistics3';
import Statistics4 from './section/Statistics4';
import Statistics5 from './section/Statistics5';

const EmployerStatistics = () => {
    return (
        <div className='pt-[40px] px-[60px] box-border w-full'>
            <Statistics1/>
            <Statistics2/>
            <Statistics3/>
            <Statistics4/>
            <Statistics5/>
        </div>
    );
};

export default EmployerStatistics;