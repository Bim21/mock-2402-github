import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/company' element={<CompanyPage/>} />
        <Route path='/login' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
