import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <div className="relative bg-gray-800">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboards</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
            </div>
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
