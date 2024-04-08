import React from 'react'

import Header from '../component/Header';
import Content from '../component/Content';
import Footer from '../component/Footer';
const HomePage = () => {
  return (
    <>
     <div className='items-center justify-center box-border'>
            <Header/>
            <Content/>
            <Footer/>
        </div>

    </>
  )
}

export default HomePage
