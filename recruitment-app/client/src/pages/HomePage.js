import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Content from '../component/Content';
import Footer from '../component/Footer';
import { Navigate, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../services/api';

const HomePage = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);


    useEffect(() => {
        const checkAuthentication = async () => {
          const authenticated = await isAuthenticated();
          if (!authenticated) {
            navigate('/');
            setIsLogin(false)
          } else {
            setIsLogin(true)
          }
        };
          // eslint-disable-next-line react-hooks/exhaustive-deps
        checkAuthentication();
      }, []);
    return (
        <div className='flex flex-col items-center justify-center box-border'>
            <Header isLogin={isLogin}/>
            <Content/>
            <Footer/>
        </div>
    );
};

export default HomePage;