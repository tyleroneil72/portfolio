import Profile from "./components/Profile";
import Education from "./components/Education";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Github from "./components/GitHub";

function App() {
  return (
    <div className='h-screen w-screen grid grid-rows-3 grid-cols-3 gap-4 px-8 py-6 bg-gray-900 text-white'>
      {/* Profile Card */}
      <div className='row-span-2 col-span-1'>
        <Profile />
      </div>

      {/* Education and Notable Project */}
      <div className='row-span-1 col-span-1'>
        <Education />
      </div>
      <div className='row-span-1 col-span-1'>
        <Project />
      </div>

      {/* Experience and Skills */}
      <div className='row-span-2 col-span-1'>
        <Experience />
      </div>
      <div className='row-span-1 col-span-1'>
        <Skills />
      </div>

      {/* GitHub Contribution Graph */}
      <div className='row-span-1 col-span-3'>
        <Github />
      </div>
    </div>
  );
}

export default App;
