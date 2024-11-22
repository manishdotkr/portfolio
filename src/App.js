import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Sidebar from "./components/Sidebar";
import Navbar from './components/Navbar';
import NotFound from "./components/NotFound";
// Pages
import About from './pages/About';
import Career from './pages/Career';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import Contact from './pages/Contact';
// CSS
import './assets/css/style.css';

function App() {
  return (
    <main>
      <Sidebar />
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;

// import React from "react";
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// // Components
// import Sidebar from "./components/Sidebar";
// import Navbar from './components/Navbar';
// import NotFound from "./components/NotFound";
// // Pages
// import About from './pages/About';
// import Career from './pages/Career';
// import Resume from './pages/Resume';
// import Portfolio from './pages/Portfolio';
// import Project from './pages/Project';
// import Contact from './pages/Contact';
// // CSS
// import './assets/css/style.css';

// function App() {
//   return (
//     <main>
//       <Sidebar />
//       <Router>
//         <div className="main-content">
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<About />} />
//             <Route path="/career" element={<Career />} />
//             <Route path="/resume" element={<Resume />} />
//             <Route path="/portfolio" element={<Portfolio />} />
//             <Route path="/project" element={<Project />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </div>
//       </Router>
//     </main>
//   );
// }

// export default App;
