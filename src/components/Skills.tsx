import skills from "../assets/data/skills.json";

const Skills = () => {
  return (
    <div className='bg-gray-800 h-full rounded-lg p-6 shadow-md'>
      <h2 className='text-xl font-bold text-indigo-400 mb-4'>Skills</h2>
      <ul className='list-disc pl-5'>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
