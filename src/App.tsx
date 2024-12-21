import Profile from "./components/Profile";
import Education from "./components/Education";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Github from "./components/GitHub";

function App() {
  return (
    <div className='min-h-screen bg-gray-900 text-white grid grid-rows-3 grid-cols-6 gap-4 px-6 py-6'>
      {/* Profile Card */}
      <div className='row-span-2 col-span-2'>
        <Profile />
      </div>

      {/* Education and Notable Project */}
      <div className='row-span-1 col-span-2'>
        <Education />
      </div>
      <div className='row-span-1 col-span-2'>
        <Project />
      </div>

      {/* Experience */}
      <div className='row-span-2 col-span-3'>
        <Experience />
      </div>

      {/* Skills */}
      <div className='row-span-2 col-span-1'>
        <Skills />
      </div>

      {/* GitHub Contribution Graph */}
      <div className='row-span-1 col-span-6 flex justify-center items-center'>
        <Github />
      </div>
    </div>
  );
}

export default App;
