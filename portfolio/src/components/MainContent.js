import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';

function MainContent() {
  return (
    <Router>
      <div className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MainContent;
