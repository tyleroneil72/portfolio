import projectsData from '../assets/data/projects.json';
import ProjectCard from '../components/ProjectCard';

import connectFourImg from '../assets/images/connectFour.png';
import duordleImg from '../assets/images/duordle.png';
import folderImg from '../assets/images/folder.png';
import GPTerminalImg from '../assets/images/GPTerminal.png';
import nestImg from '../assets/images/nest.png';
import portfolioImg from '../assets/images/portfolio.png';
import sortingImg from '../assets/images/sorting.jpeg';
import webVoyagerImg from '../assets/images/webVoyager.png';

const imageMap: Record<string, string> = {
  Nest: nestImg,
  Duordle: duordleImg,
  GPTerminal: GPTerminalImg,
  'Web Voyager': webVoyagerImg,
  'Sorting Algorithm Visualizer': sortingImg,
  'Connect Four with Minimax': connectFourImg,
  'Portfolio Website': portfolioImg,
  'Miscellaneous Projects': folderImg
};

const Projects = () => {
  return (
    <div className='mx-auto max-w-screen-2xl p-8 pt-14'>
      <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} image={imageMap[project.name]} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
