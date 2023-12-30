import Project from "./Project";
import data from "../data";

const ListProjects = () => {
  const project = data;

  return (
    <section id="projects" className="projects py-6">
      <div className="container">
        <h2 className="text-center pb-4">
          Nos <span className="text-secondary">Réalisations</span>
        </h2>
        <div className="row mb-4">
          {project.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListProjects;
