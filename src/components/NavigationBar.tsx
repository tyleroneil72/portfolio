import { FaGithub, FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const routes = [
  { path: '/', label: 'Home', icon: <FaHome /> },
  { path: '/projects', label: 'Projects', icon: <FaGithub /> }
];

const NavigationBar = () => {
  return (
    <nav className='fixed left-1/2 top-2 z-50 w-[80%] max-w-3xl -translate-x-1/2 transform rounded-full bg-gray-800 text-white shadow-md'>
      <div className='flex justify-around py-1'>
        {routes.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-3 text-xs ${isActive ? 'text-indigo-400' : 'text-gray-300'}`
            }
          >
            <span className='text-base'>{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
