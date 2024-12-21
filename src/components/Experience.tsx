import { FaBriefcase } from 'react-icons/fa';
import experience from '../assets/data/experience.json';

const Experience = () => {
  return (
    <div className='flex h-full flex-col rounded-lg bg-gray-800 p-6 shadow-md'>
      <h2 className='mb-4 flex items-center gap-2 text-xl font-bold text-indigo-400'>
        <FaBriefcase /> Experience
      </h2>
      {experience.map((job, index) => (
        <div key={index} className='mb-2 rounded-lg bg-slate-700 p-2 shadow-md'>
          <h3 className='font-bold text-white'>
            {job.role} - {job.company}
          </h3>
          <p className='text-sm text-gray-300'>{job.period}</p>
          <ul className='mt-2 list-disc pl-5 text-sm text-gray-300'>
            {job.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
