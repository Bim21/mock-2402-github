import React, { useState } from 'react';
import EmployerHeader from './EmployerHeader';
import Footer from '../../component/Footer';
import JobDescripstion from './section/JobDescripstion';
import CompanyDescription from './section/CompanyDescription';

const RecruitmentPage = () => {
    const [formJobs, setFormJobs] = useState({
        title: '',
        level: '',
        jobType: '',
        career: '',
        workField: '',
        location: '',
        description: '',
        requirements: '',
        salary: '',
        quantity: '',
        contactPerson: '',
        contactEmail: ''
    });

    const [formCompany, setFormCompany] = useState({
        companyName: '',
        companyAddress: '',
        companySize: '',
        companyInfo: '',
        companyBenefits: '',
        companyLogo: '',
        companyImage: '',
        companyVideo: ''
    });

    const handleChangeCompany = (e) => {
        const { name, value } = e.target;
        setFormCompany(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleChangeJobs = (e) => {
        const { name, value } = e.target;
        setFormJobs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic here
        console.log(formJobs);
        console.log(formCompany);
    };
    return (
        <div className='flex flex-col items-center justify-center box-border w-full'>
            <EmployerHeader />
            <form onSubmit={handleSubmit}>
                <JobDescripstion data = {formJobs} handleChange = {handleChangeJobs}/>
                <CompanyDescription data = {formCompany} handleChange = {handleChangeCompany}/>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right">
                    Đăng tin
                </button>
            </form>
            <Footer />
        </div>
    );
};

export default RecruitmentPage;