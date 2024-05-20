import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import JobDetailContent from '../component/jobDetailComponent/JobDetailContent'

const JobDetail = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center box-border bg-slate-50'>
                <Header />
                <JobDetailContent />
                <Footer />
            </div>

        </div>
    )
}

export default JobDetail
