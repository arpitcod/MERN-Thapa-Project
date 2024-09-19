import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import ErrorPage from './pages/ErrorPage';
import Footer from './pages/Footer';
function App() {

  
  
  return (
    <div className="App">
    
    <BrowserRouter>
    {/* <HomePage/> */}
    <Navbar/>
        <Routes>
           
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/service' element={<ServicePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
