import React from 'react';
import Section1 from './contentComponent/Section1';
import Section2 from './contentComponent/Section2';
import Section3 from './contentComponent/Section3';
import ItemsHot from './contentComponent/ItemsHot';
import SuggestItems from './contentComponent/SuggestItems';


const Content = () => {
    return (
        <div className='w-full min-h-[200px]'>
            <Section1 />
            <Section2 title = {"Việc Làm Tốt Nhất"} items= {<ItemsHot/>}/>
            <Section3 />
            <img src='https://images.vietnamworks.com/logo/Banner%20ZA%20OA%201392%20x%20326_125453.jpg'
            alt=''
                className='w-[1200px] h-auto mx-auto my-[20px]'
            />
            <Section2 title = {"Việc Làm Gợi Ý"} items={<SuggestItems/>}/>

        </div>

    );
};

export default Content;