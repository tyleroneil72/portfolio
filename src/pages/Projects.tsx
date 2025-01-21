import projects from '../assets/data/projects.json';

const Projects = () => {
  return (
    <div className='mx-auto max-w-7xl p-8 pt-14'>
      <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='group flex flex-col rounded-lg bg-gray-800 p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg'
          >
            {project.image && (
              <div className='h-40 w-full overflow-hidden rounded-md bg-gray-700'>
                <img
                  src={project.image}
                  alt={`${project.name} thumbnail`}
                  className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
                />
              </div>
            )}

            <div className='mt-4 flex flex-1 flex-col'>
              <h3 className='text-2xl font-bold text-indigo-400'>{project.name}</h3>
              <p className='mt-2 text-sm text-gray-300'>{project.description}</p>
              <div className='mt-4 flex flex-wrap gap-2'>
                {project.tags.map((tag, idx) => (
                  <span key={idx} className='rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className='mt-6 flex items-center justify-between'>
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-indigo-400 hover:text-indigo-500'
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-600'
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
