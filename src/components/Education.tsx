import education from "../assets/data/education.json";

const Education = () => {
  return (
    <div className='bg-gray-800 h-full rounded-lg p-6 shadow-md flex flex-col justify-center'>
      <h2 className='text-xl font-bold text-indigo-400 mb-4'>Education</h2>
      <p className='font-medium'>{education.institution}</p>
      <p>{education.program}</p>
      <p className='text-sm text-gray-400'>{education.graduationDate}</p>
      <p className='text-sm text-gray-400'>{education.gpa}</p>
    </div>
  );
};

export default Education;
