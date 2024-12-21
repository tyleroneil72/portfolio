import education from "../data/education.json";

const Education = () => {
  return (
    <div className='bg-indigo-500 h-full rounded-lg p-4 shadow-md'>
      <h2 className='text-xl font-bold mb-2'>Education</h2>
      <p>{education.institution}</p>
      <p>{education.program}</p>
      <p>{education.graduationDate}</p>
      <p>{education.gpa}</p>
    </div>
  );
};

export default Education;
