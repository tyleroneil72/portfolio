import Profile from "./components/Profile";
import Education from "./components/Education";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Github from "./components/GitHub";

function App() {
  return (
    <div className='min-h-screen bg-gray-900 text-white grid gap-4 p-4 lg:grid-cols-6 lg:grid-rows-[auto,1fr,auto] md:grid-cols-1 overflow-hidden'>
      {/* Profile Card */}
      <div className='lg:col-span-2 lg:row-span-2 flex'>
        <Profile />
      </div>

      {/* Education and Notable Project */}
      <div className='lg:col-span-2 md:col-span-full'>
        <Education />
      </div>
      <div className='lg:col-span-2 md:col-span-full'>
        <Project />
      </div>

      {/* Experience */}
      <div className='lg:col-span-3 lg:row-span-2 flex'>
        <Experience />
      </div>

      {/* Skills */}
      <div className='lg:col-span-1 lg:row-span-2 md:col-span-full'>
        <Skills />
      </div>

      {/* GitHub Contribution Graph */}
      <div className='lg:col-span-6 flex justify-center items-center md:col-span-full'>
        <Github />
      </div>
    </div>
  );
}

export default App;
