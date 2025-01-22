import { motion } from 'framer-motion';
import { FaGithub, FaHome } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';

const routes = [
  { path: '/', icon: <FaHome /> },
  { path: '/projects', icon: <FaGithub /> }
];

const NavigationBar = () => {
  const location = useLocation();

  return (
    <nav className='fixed left-1/2 top-2 z-50 w-[80%] max-w-3xl -translate-x-1/2 transform rounded-full bg-gray-800 text-white shadow-md'>
      <div className='relative flex justify-around py-2'>
        {routes.map(({ path, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `relative flex items-center justify-center text-lg transition ${
                isActive ? 'text-indigo-400' : 'text-gray-300'
              }`
            }
          >
            {icon}
            {location.pathname === path && (
              <motion.div
                layoutId='underline'
                className='absolute left-0 right-0 top-5 h-1 rounded-full bg-indigo-400'
                initial={false}
                transition={{ type: 'spring', stiffness: 300, damping: 40 }}
              />
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
