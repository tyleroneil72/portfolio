import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

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
      <AppRoutes />
    </Router>
  );
}

export default App;
