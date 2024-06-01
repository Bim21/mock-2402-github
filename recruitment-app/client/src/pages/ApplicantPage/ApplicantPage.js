import React from 'react'
import Footer from '../../component/Footer'
import ApplicantHeader from './ApplicantHeader'
import ApplicantContent from './ApplicantContent'

const ApplicantPage = () => {
  return (
    <div>

      <div className='flex flex-col items-center justify-center box-border w-full bg-gray-100'>
        <ApplicantHeader />
      </div>

      <div className='mt-2 ml-2'>
        <ApplicantContent />
        <Footer />
      </div>

    </div>

  )
}

export default ApplicantPage
