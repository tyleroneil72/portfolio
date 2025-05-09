import { FaGraduationCap } from 'react-icons/fa';
import education from '../assets/data/education.json';

const Education = () => {
  return (
    <div className='flex h-full flex-col rounded-lg bg-gray-800 p-4 shadow-md'>
      <h2 className='mb-4 flex items-center gap-2 text-xl font-bold text-indigo-400'>
        <FaGraduationCap /> Education
      </h2>
      <div className='scrollable flex flex-1 flex-wrap justify-between space-y-4 overflow-y-auto'>
        <p className='text-sm'>
          <strong>{education.institution}</strong> - {education.program}
        </p>
        <p className='text-sm'>
          <strong>Graduation:</strong> {education.graduationDate} | <strong>GPA:</strong> {education.gpa}
        </p>
        <div>
          <h3 className='text-sm font-semibold text-indigo-400'>Involvement</h3>
          <ul className='list-none space-y-1'>
            {education.involvementAndAchievements.map((item, index) => (
              <li key={index} className='text-sm'>
                <strong>{item.title}</strong>
                {item.organization && `,  ${item.organization}`} <span>({item.period})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
