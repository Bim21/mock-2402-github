import React from 'react'
import Footer from '../../component/Footer'
import ApplicantHeader from './ApplicantHeader'

const ApplicantPage = () => {
  return (
    <div className='flex flex-col items-center justify-center box-border w-full bg-gray-100'>
    <ApplicantHeader/>
    {/* <EmployerStatistics/> */}
    <div>this is content</div>
    <Footer/>
</div>
  )
}

export default ApplicantPage
