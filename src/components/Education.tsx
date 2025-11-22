import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import education from '../assets/data/education.json';

const Education = () => {
  return (
    <div className='flex h-full min-h-[200px] flex-col justify-between rounded-lg bg-gray-800 p-6 shadow-md'>
      <h2 className='mb-4 flex items-center gap-2 text-xl font-bold text-indigo-400'>
        <FaGraduationCap /> Education
      </h2>

      <div className='scrollable flex-1 overflow-y-auto pr-2 text-base leading-relaxed text-white md:text-lg lg:text-xl'>
        <p className='font-bold text-white'>{education.institution}</p>
        <p className='font-medium text-indigo-300'>{education.program}</p>

        <div className='mt-2 flex items-center text-sm text-white md:text-base lg:text-lg'>
          <FaMapMarkerAlt className='mr-2' />
          {education.location}
        </div>

        <p className='mt-4 text-sm text-gray-300 md:text-base lg:text-lg'>{education.description}</p>
      </div>
    </div>
  );
};

export default Education;
