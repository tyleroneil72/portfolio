import project from "../data/project.json";

const Project = () => {
  return (
    <div className='bg-gray-800 h-full rounded-lg p-6 shadow-md flex flex-col justify-center'>
      <h2 className='text-xl font-bold text-indigo-400 mb-4'>
        Notable Project
      </h2>
      <p className='font-medium'>{project.name}</p>
      <p className='text-sm text-gray-400 mb-4'>{project.description}</p>
      <a
        href={project.link}
        target='_blank'
        rel='noopener noreferrer'
        className='text-indigo-400 hover:text-indigo-500 underline'
      >
        View on GitHub
      </a>
    </div>
  );
};

export default Project;
