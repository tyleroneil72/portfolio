import Profile from "./components/Profile";
import Education from "./components/Education";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Github from "./components/GitHub";

function App() {
  return (
    <div className='min-h-screen bg-gray-900 text-white flex flex-col md:grid md:grid-rows-3 md:grid-cols-3 gap-4 px-4 py-6'>
      {/* Profile Card */}
      <div className='md:row-span-2 md:col-span-1'>
        <Profile />
      </div>

      {/* Education and Notable Project */}
      <div className='md:row-span-1 md:col-span-1'>
        <Education />
      </div>
      <div className='md:row-span-1 md:col-span-1'>
        <Project />
      </div>

      {/* Experience and Skills */}
      <div className='md:row-span-2 md:col-span-1'>
        <Experience />
      </div>
      <div className='md:row-span-1 md:col-span-1'>
        <Skills />
      </div>

      {/* GitHub Contribution Graph */}
      <div className='md:row-span-1 md:col-span-3'>
        <Github />
      </div>
    </div>
  );
}

export default App;
