import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Main from './Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Buy from './Buy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar />

    <Router>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Buy />} />
      </Routes>
    </Router>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalsnp
