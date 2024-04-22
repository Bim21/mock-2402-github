import React, { useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import CompanyContent from '../component/companyComponent copy/CompanyContent';
import { isAuthenticated } from '../services/api';
import { Navigate } from 'react-router-dom';

const CompanyPage = () => {
    // useEffect(() => {
    //     const checkAuthentication = async () => {
    //       const authenticated = await isAuthenticated();
    //       if (authenticated) {
    //         Navigate('/company');
    //       } else {
    //       }
    //     };
    //       // eslint-disable-next-line react-hooks/exhaustive-deps
    //     checkAuthentication();
    //   }, []);
    return (
        <div className='flex flex-col items-center justify-center box-border bg-slate-50'>
        <Header/>
        <CompanyContent/>
        <Footer/>
        </div>
    );
};

export default CompanyPage;