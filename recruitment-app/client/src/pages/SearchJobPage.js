import React from 'react';
import Header from '../component/Header';
import SearchJobContent from '../component/SearchJobContent';
import Footer from '../component/Footer';

function SearchJobPage(props) {
    return (
        <div className='flex flex-col items-center justify-center box-border'>
            <Header/>
            <SearchJobContent/>
            <Footer/>
        </div>
    );
}

export default SearchJobPage;