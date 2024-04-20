import React from 'react'
import Section1 from './Section1'
import SectionJob2 from './SectionJob2'
import SectionJob3 from './SectionJob3'

const JobContent = () => {
  return (
    <div className='pt-[20px] box-border '>
    <div className='w-[1200px] px-[16px] mx-[auto] flex flex-col justify-start  bg-slate-50'>
        <Section1/>
        <SectionJob2/>
        <SectionJob3/>
       
        
    </div>
    
</div>
  )
}

export default JobContent
