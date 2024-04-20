import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/jobPage' element={<JobPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
