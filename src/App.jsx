import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Academic from './components/Academic';

function App() {
  return (
    <>
      <div className=" min-h-screen bg-gray-100">
        <Navbar/>
        <About/>
        <Skills/>
        <Academic/>
      </div>
    </>
  );
}

export default App;
