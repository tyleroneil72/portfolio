import skills from "../assets/data/skills.json";
import { FaCode } from "react-icons/fa";

const Skills = () => {
  return (
    <div className='bg-gray-800 h-full rounded-lg p-6 shadow-md'>
      <h2 className='text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2'>
        <FaCode /> Skills
      </h2>
      <div className='flex flex-wrap gap-2'>
        {skills.map((skill, index) => (
          <span
            key={index}
            className='bg-indigo-500 text-white px-3 py-1 rounded-lg text-sm shadow-md'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
