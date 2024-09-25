import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';

function MainContent() {
  return (
    <div className="main-content">
      <Navbar />
      <About />
      <Resume />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}

export default MainContent;
