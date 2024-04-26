import React from 'react'
import JobContent from '../component/jobComponent/JobContent'
import Header from '../component/Header'
import Footer from '../component/Footer'

const JobPage = () => {
  return (
    <div className='flex flex-col items-center justify-center box-border bg-slate-50'>
        <Header/>
        <JobContent/>
        <Footer/>
        </div>
  )
}

export default JobPage
