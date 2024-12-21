import { FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import headshot from "../assets/headshot.png";

const Profile = () => {
  return (
    <div className='bg-gray-800 h-full rounded-lg flex flex-col items-center justify-center p-6 shadow-md'>
      <img
        src={headshot}
        alt="Tyler O'Neil"
        className='w-32 h-32 rounded-full object-cover mb-4'
      />
      <h1 className='text-2xl font-bold'>Tyler O'Neil</h1>
      <p className='text-sm text-gray-400'>Software Developer</p>
      <div className='mt-2 flex items-center space-x-2 text-sm'>
        <FaMapMarkerAlt />
        <span>Toronto, Ontario</span>
      </div>
      <div className='flex space-x-4 mt-4'>
        <a
          href='https://github.com/tyleroneil72'
          target='_blank'
          rel='noopener noreferrer'
          className='text-indigo-400 hover:text-indigo-500 text-xl'
        >
          <FaGithub />
        </a>
        <a
          href='https://linkedin.com/in/tyler-oneil-dev'
          target='_blank'
          rel='noopener noreferrer'
          className='text-indigo-400 hover:text-indigo-500 text-xl'
        >
          <FaLinkedin />
        </a>
      </div>
      <button className='mt-6 px-6 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600'>
        View Resume
      </button>
    </div>
  );
};

export default Profile;
