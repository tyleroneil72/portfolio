import { FaGithub } from 'react-icons/fa';

interface Project {
  name: string;
  description: string;
  github?: string;
  live?: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
  image?: string;
}

const ProjectCard = ({ project, image }: ProjectCardProps) => {
  return (
    <div className='group flex flex-col rounded-lg bg-gray-800 p-6 shadow-md transition-transform duration-200 hover:shadow-lg'>
      {image && (
        <div className='h-40 w-full overflow-hidden rounded-md bg-gray-700'>
          <img
            src={image}
            alt={`${project.name} thumbnail`}
            className='h-full w-full object-cover transition-transform duration-300'
          />
        </div>
      )}

      <div className='mt-4 flex flex-1 flex-col'>
        <h3 className='text-2xl font-bold'>{project.name}</h3>
        <p className='mt-2 rounded-lg bg-slate-700 p-3 text-sm text-gray-300'>{project.description}</p>
      </div>

      <div className='mt-4 flex flex-wrap justify-center gap-2'>
        {project.tags.map((tag, idx) => (
          <span key={idx} className='rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold'>
            {tag}
          </span>
        ))}
      </div>

      <div className='mt-6 flex items-center justify-between'>
        {project.github && (
          <a
            href={project.github}
            target='_blank'
            rel='noopener noreferrer'
            className='text-indigo-400 hover:text-indigo-500'
          >
            <FaGithub className='text-2xl' />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-sm bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-600'
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
