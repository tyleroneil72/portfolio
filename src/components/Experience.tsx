import experience from "../data/experience.json";

const Experience = () => {
  return (
    <div className='bg-indigo-500 h-full rounded-lg p-4 shadow-md'>
      <h2 className='text-xl font-bold mb-2'>Experience</h2>
      {experience.map((job, index) => (
        <div key={index} className='mb-4'>
          <h3 className='font-bold'>
            {job.role} - {job.company}
          </h3>
          <p>{job.period}</p>
          <ul className='list-disc pl-5'>
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
