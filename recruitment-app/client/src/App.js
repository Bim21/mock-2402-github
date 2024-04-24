import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchJobPage from './pages/SearchJobPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/search-job' element={<SearchJobPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
