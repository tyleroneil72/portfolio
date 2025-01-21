import Education from '../components/Education';
import Experience from '../components/Experience';
import GitHub from '../components/GitHub';
import Profile from '../components/Profile';
import Project from '../components/Project';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div className='grid min-h-screen grid-cols-1 gap-4 overflow-y-auto bg-gray-900 p-4 pt-14 md:grid-cols-2 lg:h-screen lg:auto-rows-fr lg:grid-cols-6 lg:overflow-hidden'>
      <div className='flex flex-col gap-4 md:col-span-2 lg:col-span-2 lg:row-span-3'>
        <div className='flex-1'>
          <Profile />
        </div>
        <div>
          <GitHub />
        </div>
      </div>

      <div className='md:col-span-1 lg:col-span-2'>
        <Education />
      </div>

      <div className='md:col-span-1 lg:col-span-2'>
        <Project />
      </div>

      <div className='flex flex-col overflow-hidden md:col-span-2 lg:col-span-3 lg:row-span-2'>
        <Experience />
      </div>

      <div className='flex flex-col overflow-hidden md:col-span-2 lg:col-span-1 lg:row-span-2'>
        <Skills />
      </div>
    </div>
  );
};

export default Home;
