import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <div className=" min-h-screen bg-gray-100">
        <Navbar/>
        <About/>
        <Skills/>
      </div>
    </>
  );
}

export default App;
