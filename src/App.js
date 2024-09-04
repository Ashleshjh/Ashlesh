import React from 'react';
import './App.css';
import API from './API';
// import { Route, Routes, Link } from 'react-router-dom';
// import Ashu from './home';
// import Section from './section';
// import AboutUs from './AboutUs';
// import ContactUs from './ContactUs';
// import Register from './register';
// import Login from './login';

function App() {
  return (
    <div className='App'>
      {/* <nav>
        <ul className="navbar">
          <li>
            <Link to="/home" style={{ textDecoration: 'none' }}>Home</Link>
          </li>
          <li>
            <Link to="/section" style={{ textDecoration: 'none' }}>Section</Link>
          </li>
          <li>
            <Link to="/AboutUs" style={{ textDecoration: 'none' }}>About Us</Link>
          </li>
          <li>
            <Link to="/ContactUs" style={{ textDecoration: 'none' }}>Contact Us</Link>
          </li>
          <li>
            <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
          </li>
          <li>
            <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link>
          </li>
        </ul>
      </nav> */}
      {/* <Routes>
        <Route path="/home" element={<Ashu />} />
        <Route path="/section" element={<Section />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/login" element = {<Login />}/>
        <Route path="/Register" element={<Register />} />
      </Routes> */}
      <h1>home</h1>
      <API />
      {/* <Ashu /> */}
    </div>
  );
}

export default App;
