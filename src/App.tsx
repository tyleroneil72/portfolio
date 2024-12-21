import Profile from "./components/Profile";
import Education from "./components/Education";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Github from "./components/GitHub";

function App() {
  return (
    <div
      className='min-h-screen bg-gray-900 text-white grid gap-4 p-4
                 sm:grid-cols-1 
                 md:grid-cols-2 
                 lg:grid-cols-6'
    >
      {/* Profile Card + GitHub */}
      <div className='lg:col-span-2 lg:row-span-3 md:col-span-full flex flex-col gap-4'>
        <div className='flex-1'>
          <Profile />
        </div>
        <div>
          <Github />
        </div>
      </div>

      {/* Education and Notable Project */}
      <div className='lg:col-span-2 md:col-span-1'>
        <Education />
      </div>
      <div className='lg:col-span-2 md:col-span-1'>
        <Project />
      </div>

      {/* Experience */}
      <div className='lg:col-span-3 lg:row-span-2 md:col-span-full h-full'>
        <Experience />
      </div>

      {/* Skills */}
      <div className='lg:col-span-1 lg:row-span-2 md:col-span-full h-full'>
        <Skills />
      </div>
    </div>
  );
}

export default App;
