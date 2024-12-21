import skills from "../data/skills.json";

const Skills = () => {
  return (
    <div className='bg-indigo-500 h-full rounded-lg p-4 shadow-md'>
      <h2 className='text-xl font-bold mb-2'>Skills</h2>
      <ul className='list-disc pl-5'>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
