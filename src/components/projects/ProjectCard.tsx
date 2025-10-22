import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface ProjectCardProps {
  project: {
    sNo: string;
    title: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    githubLink: string;
    liveDemoLink: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="relative w-full overflow-hidden group">
      <Image
        src={project.imageUrl}
        alt={project.title}
        width="500"
        height="500"
        className="w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center gap-4 p-10 bg-black/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <h2 className="text-5xl font-semibold">{project.title}</h2>
        <div className="flex gap-5">
          <a
            href={project.githubLink}
            target="_blank"
            className="flex gap-2 items-center font-medium hover:underline"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
          {project.liveDemoLink !== "" && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              className="flex gap-2 items-center font-medium hover:underline"
            >
              <FaArrowUpRightFromSquare className="" />
              Live
            </a>
          )}
        </div>
        <p className="text-xl">{project.description}</p>
        <div className="flex gap-3">
          {project.techStack.map((tech, index) => (
            <div key={index}>
              <span className="text-sm text-black font-medium bg-white p-2 rounded-2xl">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
