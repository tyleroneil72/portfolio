import { FaChartLine } from 'react-icons/fa';
import { FaArrowTurnUp } from 'react-icons/fa6';

const Project = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center rounded-lg bg-gray-800 p-4 shadow-md'>
      <a
        href='https://nest.software'
        target='_blank'
        rel='noopener noreferrer'
        className='group block w-full max-w-xl rounded-lg border border-gray-700/80 bg-gray-900 px-4 py-3 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 md:hover:scale-105'
      >
        <div className='flex items-start gap-3'>
          <div className='flex h-9 w-9 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-200'>
            <FaChartLine className='text-lg' />
          </div>
          <div className='space-y-1.5'>
            <div className='flex items-center gap-2 text-base font-semibold text-indigo-100'>
              <span className='transition group-hover:text-indigo-400'>nest</span>
              <span className='rounded-full border border-gray-700 bg-gray-800 px-2 py-[3px] text-[11px] tracking-wide text-gray-300 uppercase'>
                Product
              </span>
            </div>
            <p className='text-sm leading-relaxed text-gray-300'>
              Nest is a minimalist investment insights platform designed to help long-term investors understand and
              visualize their financial growth.
            </p>
          </div>
        </div>

        <div className='mt-3 flex items-center gap-3 text-sm text-gray-300'>
          <span className='flex items-center gap-2 rounded-full bg-gray-800 px-3 py-1 text-xs'>
            <span className='h-2 w-2 rounded-full bg-blue-400' />
            TypeScript
          </span>
        </div>
      </a>

      <div className='mt-4 flex flex-col items-center'>
        <span className='flex items-center rounded-sm bg-indigo-500 px-3 py-2 text-sm font-semibold'>
          I am currently working on&nbsp;&nbsp; <FaArrowTurnUp />
        </span>
      </div>
    </div>
  );
};

export default Project;
