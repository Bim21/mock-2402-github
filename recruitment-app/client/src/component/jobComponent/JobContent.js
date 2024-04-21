import React from 'react'
import Section1 from './Section1'
import Menu from './Menu'

const JobContent = () => {
  return (
    <div className='mt-[20px] box-border bg-slate-50'>
      <div className='w-[1200px] px-[16px] mx-[auto] flex flex-col justify-start bg-slate-50'>
        <Menu />
        <Section1 />

      </div>

    </div>
  )
}

export default JobContent