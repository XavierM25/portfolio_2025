import { projects, type Project } from '../data/projects';

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="flex flex-col tablet:flex-row gap-4 justify-center items-center max-w-full laptop:max-w-[900px] m-8">
    <div className="w-full h-[210px] tablet:w-[340px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-[10px] rounded-bl-[10px] overflow-hidden flex-shrink-0">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col">
      <h2 className="text-2xl mb-2 font-bold">{project.title}</h2>
      <p className="text-base mb-6 font-light">{project.description}</p>
      <div className="text-base font-extralight">
        <strong>Tecnologías usadas:</strong>{' '}
        <em>{project.technologies.join(', ')}</em>
      </div>
    </div>
  </div>
);
const Projects = () => {
  return (
    <section
      id="projects"
      className="z-10 justify-center items-center flex flex-col relative bg-[#020202] pb-60"
    >
      <div className="flex justify-center mb-">
        <h1 className="font-timegoing text-[#2BC016] text-[50px] laptop:text-[90px]">
          Proyectos
        </h1>
      </div>

      <article className="text-white font-onest space-y-32">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </article>
    </section>
  );
};

export default Projects;
