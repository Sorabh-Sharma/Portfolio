import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const stickyTops = ['top-16', 'top-32', 'top-48', 'top-64'];

const Projects = () => {
  const leftCol = projectsData.slice(0, 4).filter((_, i) => i % 2 === 0);
  const rightCol = projectsData.slice(0, 4).filter((_, i) => i % 2 === 1);

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {leftCol.map((project, i) => (
              <div
                id={`sticky-card-left-${i + 1}`}
                key={project.id}
                className={`sticky ${stickyTops[i * 2]} w-full`}
              >
                <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {rightCol.map((project, i) => (
              <div
                id={`sticky-card-right-${i + 1}`}
                key={project.id}
                className={`sticky ${stickyTops[i * 2]} w-full`}
              >
                <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;