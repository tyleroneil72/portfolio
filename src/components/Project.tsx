import { FaArrowTurnUp } from "react-icons/fa6";

const Project = () => {
  return (
    <div className='bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center justify-center h-full'>
      <a
        href='https://github.com/tyleroneil72/duordle'
        target='_blank'
        rel='noopener noreferrer'
        className='flex justify-center w-full'
      >
        <img
          src='https://github-readme-stats.vercel.app/api/pin/?username=tyleroneil72&repo=duordle&theme=material-palenight&title_color=FFF'
          alt='Duordle GitHub Repository'
          className='rounded-lg'
        />
      </a>
      <div className='mt-4 flex flex-col items-center'>
        <span className='bg-indigo-500 rounded flex items-center px-3 py-2'>
          I am currently Working on&nbsp;&nbsp; <FaArrowTurnUp />
        </span>
      </div>
    </div>
  );
};

export default Project;
