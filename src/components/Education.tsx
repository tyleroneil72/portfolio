import education from "../assets/data/education.json";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className='bg-gray-800 h-full rounded-lg p-4 shadow-md flex flex-col justify-center space-y-3'>
      <h2 className='text-xl font-bold text-indigo-400 border-b border-gray-700 pb-2 flex items-center gap-2'>
        <FaGraduationCap /> Education
      </h2>
      <p className='text-sm'>
        <strong>{education.institution}</strong> - {education.program}
      </p>
      <p className='text-sm'>
        <strong>Graduation:</strong> {education.graduationDate} |{" "}
        <strong>GPA:</strong> {education.gpa}
      </p>
      <div>
        <h3 className='text-sm font-semibold text-indigo-400'>Involvement</h3>
        <ul className='list-none space-y-1'>
          {education.involvementAndAchievements.map((item, index) => (
            <li key={index} className='text-sm'>
              <strong>{item.title}</strong>
              {item.organization && ` at ${item.organization}`}{" "}
              <span>({item.period})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
