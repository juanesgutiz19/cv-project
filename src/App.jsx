import Navbar from 'components/Navbar';
import About from 'components/About';
import Skills from 'components/Skills';
import Academic from 'components/Academic';
import Experience from 'components/Experience';
import Projects from 'components/Projects';
import Certifications from 'components/Certifications';
import Contact from 'components/Contact';

function App() {
  return (
    <div className=' min-h-screen bg-gray-100'>
      <Navbar />
      <About />
      <Skills />
      <Academic />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
