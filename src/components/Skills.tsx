import { FaCode } from 'react-icons/fa';
import skills from '../assets/data/skills.json';

const Skills = () => {
  return (
    <div className='h-full rounded-lg bg-gray-800 p-6 shadow-md'>
      <h2 className='mb-4 flex items-center gap-2 text-xl font-bold text-indigo-400'>
        <FaCode /> Skills
      </h2>
      <div className='flex flex-wrap gap-2'>
        {skills.map((skill, index) => (
          <span key={index} className='rounded-lg bg-indigo-500 px-3 py-1 text-sm shadow-md'>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
