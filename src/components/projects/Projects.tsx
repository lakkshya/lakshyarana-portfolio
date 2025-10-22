import ProjectCard from "./ProjectCard";

const myProjects = [
  {
    sNo: "01",
    title: "Bharati Times",
    description:
      "A dynamic, modern web-based news portal built for delivering real-time, reliable, and accessible news to users across various categories.",
    imageUrl: "/projects/bharati_times.png",
    techStack: ["ReactJs", "TailwindCSS", "NodeJs", "Strapi", "PostgreSQL"],
    githubLink: "https://github.com/lakkshya/BHARATI_TIMES",
    liveDemoLink: "",
  },
];

const Projects = () => {
  return (
    <section className="w-full flex flex-col gap-40 px-5 lg:px-10 pt-50 pb-30">
      <div className="flex flex-col items-center gap-20">
        <h1 className="text-4xl lg:text-6xl font-bold">My Projects</h1>

        {myProjects.map((project, index) => (
          <div key={index} className="relative w-full flex items-center gap-5">
            <div className="w-full lg:w-1/2">
              <ProjectCard project={project} />
            </div>
            <div className="absolute -top-20 right-0">
              <span className="text-[6rem] font-extrabold">{project.sNo}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
