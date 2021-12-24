import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <>
      <div className=" min-h-screen bg-gray-100">
        <Navbar/>
        <About/>
      </div>
    </>
  );
}

export default App;
