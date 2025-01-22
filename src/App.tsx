import { useEffect } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './assets/css/styles.css';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  useEffect(() => {
    const handleBlur = () => {
      document.title = "Thank You For Visiting! - Tyler O'Neil";
    };
    const handleFocus = () => {
      document.title = "Tyler O'Neil";
    };
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  return (
    <Router>
      <div className='relative'>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
