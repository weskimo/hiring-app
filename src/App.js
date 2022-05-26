import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Manager from './pages/Manager';
import Employee from './pages/Employee';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

  



function App() {
 




  return (
    
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>

      </div>
      
    </>
    
    
  );
}

export default App;
