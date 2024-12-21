import experience from "../assets/data/experience.json";

const Experience = () => {
  return (
    <div className='bg-gray-800 rounded-lg p-6 shadow-md flex flex-col h-full'>
      <h2 className='text-xl font-bold text-indigo-400 mb-4'>Experience</h2>
      {experience.map((job, index) => (
        <div key={index} className='mb-6'>
          <h3 className='font-bold'>
            {job.role} - {job.company}
          </h3>
          <p className='text-sm text-gray-400'>{job.period}</p>
          <ul className='list-disc pl-5 text-sm mt-2'>
            {job.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
