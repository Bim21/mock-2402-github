import React from 'react'
import SectionJobDetail from './SectionJobDetail'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'

const JobDetailContent = () => {
  return (
    <div className='mt-[20px] box-border bg-slate-50'>
      <div className='w-[1200px] px-[16px] mx-[auto] flex flex-col justify-start bg-slate-50'>
        <SectionJobDetail/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>





      </div>

    </div>
  )
}

export default JobDetailContent
