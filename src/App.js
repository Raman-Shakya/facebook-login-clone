import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './components/logo';
import Loginform from './components/loginform';
// import Home from './pages/Home';          // Create this page
import NotFound from './components/NotFound';  // 404 page
import './style/index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<>
                <Logo />
                <Loginform />
            </>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
