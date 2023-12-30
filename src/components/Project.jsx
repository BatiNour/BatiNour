import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <div className="col-md-4">
      <div className="card border-1 m-1 p-2">
        <Link to={`/service/${project.id}`}>
          <img
            className="rounded card-img-top"
            src={project.images[0]}
            alt={project.category}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{project.category}</h5>
        </div>
      </div>
    </div>
  );
};

export default Project;
