import { FaBriefcase } from 'react-icons/fa';
import experience from '../assets/data/experience.json';

const Experience = () => {
  return (
    <div className='flex h-full flex-col rounded-lg bg-gray-800 p-6 shadow-md'>
      <h2 className='mb-4 flex items-center gap-2 text-xl font-bold text-indigo-400'>
        <FaBriefcase /> Experience
      </h2>

      <div className='flex flex-1 flex-wrap justify-between space-y-4 overflow-y-auto'>
        {experience.map((job, index) => (
          <div key={index} className='w-full rounded-lg bg-slate-700 p-4 shadow-md'>
            <h3 className='font-bold'>
              {job.role} - {job.company}
            </h3>
            <p className='mt-1 text-sm text-gray-300'>{job.period}</p>
            <ul className='mt-2 list-disc pl-5 text-sm text-gray-300'>
              {job.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
