import { FaArrowTurnUp } from 'react-icons/fa6';

const Project = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center rounded-lg bg-gray-800 p-4 shadow-md'>
      <a href='https://nest.software' target='_blank' rel='noopener noreferrer' className='flex w-full justify-center'>
        <img
          src='https://github-readme-stats.vercel.app/api/pin/?username=tyleroneilspam&repo=nest&theme=material-palenight&title_color=FFF'
          alt='Nest GitHub Repository'
          className='hover:scale:100 transition-transform md:hover:scale-105'
        />
      </a>
      <div className='mt-4 flex flex-col items-center'>
        <span className='flex items-center rounded-sm bg-indigo-500 px-3 py-2'>
          I am currently working on&nbsp;&nbsp; <FaArrowTurnUp />
        </span>
      </div>
    </div>
  );
};

export default Project;
