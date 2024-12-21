import { FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import headshot from "../assets/headshot.png";

const Profile = () => {
  return (
    <div className='bg-gray-800 rounded-lg flex flex-col items-center p-6 shadow-md h-full'>
      {/* Profile Photo */}
      <img
        src={headshot}
        alt="Tyler O'Neil"
        className='w-[160px] h-[160px] rounded-full object-cover mb-4 lg:w-[180px] lg:h-[180px]'
      />
      <h1 className='text-xl lg:text-2xl font-bold leading-tight text-center'>
        Tyler O'Neil
      </h1>
      <p className='text-sm lg:text-base text-gray-400 text-center'>
        Software Developer
      </p>
      <div className='mt-2 flex items-center justify-center space-x-2 text-sm lg:text-base'>
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
      <div className='flex-1 flex items-center'>
        <a
          href='/Tyler-Oneil-resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='mt-6 px-6 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 inline-block text-center'
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Profile;
