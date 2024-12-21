import { FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import headshot from "../assets/images/headshot.png";

const Profile = () => {
  return (
    <div className='bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center h-full justify-center'>
      {/* Profile Photo */}
      <img
        src={headshot}
        alt="Tyler O'Neil's profile photo"
        className='w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full object-cover border-4 border-gray-700 mb-4'
      />

      {/* Name and Role */}
      <h1 className='text-xl lg:text-2xl font-bold leading-tight text-center'>
        Tyler O'Neil
      </h1>
      <p className='text-sm lg:text-base text-gray-400 mb-3'>
        Software Developer
      </p>

      {/* Location */}
      <div className='flex items-center space-x-2 text-sm lg:text-base text-gray-400 mb-4'>
        <FaMapMarkerAlt />
        <span>Toronto, Ontario</span>
      </div>

      {/* Social Links */}
      <div className='flex space-x-5 mb-6'>
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

      {/* Resume Button */}
      <a
        href='/Tyler-Oneil-Resume.pdf'
        target='_blank'
        rel='noopener noreferrer'
        className='bg-indigo-500 text-white py-2 px-6 rounded-lg text-center hover:bg-indigo-600'
      >
        View Resume
      </a>
    </div>
  );
};

export default Profile;
