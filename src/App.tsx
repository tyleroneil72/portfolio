import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './assets/css/styles.css';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className='relative'>
        <NavigationBar />
        <div className='grid min-h-screen grid-cols-1 gap-4 overflow-y-auto bg-gray-900 p-4 pt-14 md:grid-cols-2 lg:h-screen lg:auto-rows-fr lg:grid-cols-6 lg:overflow-hidden'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
