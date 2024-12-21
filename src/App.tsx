import Education from './components/Education';
import Experience from './components/Experience';
import GitHub from './components/GitHub';
import Profile from './components/Profile';
import Project from './components/Project';
import Skills from './components/Skills';

import './assets/css/styles.css';

function App() {
  return (
    <div className='grid min-h-screen grid-cols-1 gap-4 bg-gray-900 p-4 text-white md:grid-cols-2 lg:grid-cols-6'>
      {/* Profile Card + GitHub */}
      <div className='flex h-full flex-col gap-4 md:col-span-2 lg:col-span-2 lg:row-span-3'>
        <div className='h-full flex-1'>
          <Profile />
        </div>
        <div className='w-full'>
          <GitHub />
        </div>
      </div>

      {/* Education and Notable Project */}
      <div className='h-full md:col-span-1 lg:col-span-2'>
        <Education />
      </div>
      <div className='h-full md:col-span-1 lg:col-span-2'>
        <Project />
      </div>

      {/* Experience */}
      <div className='h-full md:col-span-2 lg:col-span-3 lg:row-span-2'>
        <Experience />
      </div>

      {/* Skills */}
      <div className='h-full md:col-span-2 lg:col-span-1 lg:row-span-2'>
        <Skills />
      </div>
    </div>
  );
}

export default App;
