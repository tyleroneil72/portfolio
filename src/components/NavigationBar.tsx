import { FaGithub, FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const routes = [
  { path: '/', icon: <FaHome /> },
  { path: '/projects', icon: <FaGithub /> }
];

const NavigationBar = () => {
  return (
    <nav className='fixed left-1/2 top-2 z-50 w-[80%] max-w-3xl -translate-x-1/2 transform rounded-full bg-gray-800 text-white shadow-md'>
      <div className='flex justify-around py-2'>
        {routes.map(({ path, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center justify-center rounded-full text-lg transition ${
                isActive ? 'text-indigo-400' : 'text-gray-300'
              }`
            }
          >
            {icon}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
