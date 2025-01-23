import { FaCode } from 'react-icons/fa';
import skills from '../assets/data/skills.json';
import { skillIcons } from '../utils/skillIcons';

const Skills = () => {
  return (
    <div className='flex h-full flex-col rounded-lg bg-gray-800 p-6 shadow-md'>
      <h2 className='mb-4 flex items-center gap-2 text-xl font-bold text-indigo-400'>
        <FaCode /> Skills
      </h2>
      <div className='flex flex-1 flex-wrap gap-2 overflow-y-auto'>
        {skills.map((skill, index) => {
          const IconComponent = skillIcons[skill] || null;
          return (
            <span key={index} className='flex items-center gap-2 rounded-sm bg-indigo-500 px-3 py-1 text-sm shadow-md'>
              {IconComponent && <IconComponent />}
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
