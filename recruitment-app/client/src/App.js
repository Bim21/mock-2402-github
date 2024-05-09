
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchJobPage from './pages/SearchJobPage';
import CompanyPage from './pages/CompanyPage';
import Register from './pages/Register';
import JobPage from './pages/JobPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/search-job' element={<SearchJobPage/>}/>
        <Route path='/company' element={<CompanyPage/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/job' element={<JobPage/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
