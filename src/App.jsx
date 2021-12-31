import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Academic from './components/Academic';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';

function App() {
  return (
    <>
      <div className=" min-h-screen bg-gray-100">
        <Navbar/>
        <About/>
        <Skills/>
        <Academic/>
        <Experience/>
        <Projects/>
        <Certifications/>
      </div>
    </>
  );
}

export default App;
