import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { IoTime } from 'react-icons/io5';
import headshot from '../assets/images/headshot.png';
import { getCurrentTimeAndOffset } from '../utils/timeUtils';

const Profile = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [utcOffset, setUtcOffset] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const { timeString, formattedOffset } = getCurrentTimeAndOffset('America/Toronto');
      setCurrentTime(timeString);
      setUtcOffset(formattedOffset);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='flex h-full flex-col items-center justify-center rounded-lg bg-gray-800 p-6 shadow-md'>
      {/* Profile Photo */}
      <img
        src={headshot}
        alt="Tyler O'Neil's profile photo"
        className='mb-4 h-[140px] w-[140px] rounded-full border-4 border-gray-700 object-cover md:h-[160px] md:w-[160px] lg:h-[180px] lg:w-[180px]'
      />

      {/* Name and Role */}
      <h1 className='text-center text-xl font-bold leading-tight md:text-2xl lg:text-3xl'>Tyler O'Neil</h1>
      <p className='mb-3 text-sm text-gray-400 md:text-base lg:text-lg'>Software Developer</p>

      {/* Location */}
      <div className='mb-4 flex flex-col items-center text-sm md:text-base lg:text-lg'>
        <div className='flex items-center space-x-2'>
          <FaMapMarkerAlt />
          <span>Toronto, Ontario</span>
        </div>
        <div className='flex items-center space-x-2'>
          <IoTime />
          <span>
            {currentTime} ({utcOffset})
          </span>
        </div>
      </div>

      {/* Social Links */}
      <div className='mb-6 flex space-x-5'>
        <a
          href='https://github.com/tyleroneil72'
          target='_blank'
          rel='noopener noreferrer'
          className='text-xl text-indigo-400 hover:text-indigo-500 lg:text-2xl'
        >
          <FaGithub />
        </a>
        <a
          href='https://linkedin.com/in/tyler-oneil-dev'
          target='_blank'
          rel='noopener noreferrer'
          className='text-xl text-indigo-400 hover:text-indigo-500 lg:text-2xl'
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Resume Button */}
      <a
        href='/Tyler-Oneil-Resume.pdf'
        target='_blank'
        rel='noopener noreferrer'
        className='rounded-lg bg-indigo-500 px-6 py-2 text-center text-sm text-white hover:bg-indigo-600 md:px-8 md:py-3 md:text-base lg:px-8 lg:py-3 lg:text-lg'
      >
        View Resume
      </a>
    </div>
  );
};

export default Profile;
