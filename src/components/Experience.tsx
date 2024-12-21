import { FaBriefcase } from 'react-icons/fa';
import experience from '../assets/data/experience.json';

const Experience = () => {
  return (
    <div className='flex h-full flex-col rounded-lg bg-gray-800 p-6 shadow-md'>
      <h2 className='mb-4 flex items-center gap-2 text-xl font-bold text-indigo-400'>
        <FaBriefcase /> Experience
      </h2>
      {experience.map((job, index) => (
        <div key={index} className='mb-6'>
          <h3 className='font-bold'>
            {job.role} - {job.company}
          </h3>
          <p className='text-sm text-gray-400'>{job.period}</p>
          <ul className='mt-2 list-disc pl-5 text-sm'>
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
