import { FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { useState, useEffect } from "react";
import headshot from "../assets/images/headshot.png";
import { getCurrentTimeAndOffset } from "../utils/timeUtils";

const Profile = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [utcOffset, setUtcOffset] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const { timeString, formattedOffset } =
        getCurrentTimeAndOffset("America/Toronto");
      setCurrentTime(timeString);
      setUtcOffset(formattedOffset);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center h-full justify-center'>
      {/* Profile Photo */}
      <img
        src={headshot}
        alt="Tyler O'Neil's profile photo"
        className='w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] rounded-full object-cover border-4 border-gray-700 mb-4'
      />

      {/* Name and Role */}
      <h1 className='text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-center'>
        Tyler O'Neil
      </h1>
      <p className='text-sm md:text-base lg:text-lg text-gray-400 mb-3'>
        Software Developer
      </p>

      {/* Location */}
      <div className='flex flex-col items-center text-sm md:text-base lg:text-lg text-gray-400 mb-4'>
        <div className='flex items-center space-x-2'>
          <FaMapMarkerAlt />
          <span>Toronto, Ontario</span>
        </div>
        <div className='flex items-center space-x-2'>
          <IoTime />
          <span>
            {currentTime} <span className='text-gray-500'>({utcOffset})</span>
          </span>
        </div>
      </div>

      {/* Social Links */}
      <div className='flex space-x-5 mb-6'>
        <a
          href='https://github.com/tyleroneil72'
          target='_blank'
          rel='noopener noreferrer'
          className='text-indigo-400 hover:text-indigo-500 text-xl lg:text-2xl'
        >
          <FaGithub />
        </a>
        <a
          href='https://linkedin.com/in/tyler-oneil-dev'
          target='_blank'
          rel='noopener noreferrer'
          className='text-indigo-400 hover:text-indigo-500 text-xl lg:text-2xl'
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Resume Button */}
      <a
        href='/Tyler-Oneil-Resume.pdf'
        target='_blank'
        rel='noopener noreferrer'
        className='bg-indigo-500 text-white py-2 px-6 md:py-3 md:px-8 lg:py-3 lg:px-8 rounded-lg text-center text-sm md:text-base lg:text-lg hover:bg-indigo-600'
      >
        View Resume
      </a>
    </div>
  );
};

export default Profile;
