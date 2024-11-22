import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Frontend from './components/projects/Frontend';
import Backend from './components/projects/Backend';
import Fullstack from './components/projects/Fullstack';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Navbar />
        <div className=" hide-scrollbar md:ml-[26vw] w-full h-screen overflow-y-scroll">
          <Home />
          <About />
          <Skills />
          <Routes>
          <Route path="/*" element={<Projects />}>
              {/* Default Content: Fullstack */}
              <Route index element={<Frontend />} />
              {/* Nested Routes */}
              <Route path="frontend" element={<Frontend />} />
              <Route path="backend" element={<Backend />} />
              <Route path="fullstack" element={<Fullstack />} />
            </Route>

          </Routes>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
