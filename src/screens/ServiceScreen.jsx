import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useParams } from "react-router-dom";
import data from "../data";
import { Link } from "react-router-dom";
const ServiceScreen = () => {
  const { id: projectId } = useParams();
  const [toggler, setToggler] = useState(false);
  const [index, setIndex] = useState(false);
  const project = data;
  const service = project.find((p) => p.id == projectId);

  return (
    <div className="container">
      <Link className="btn btn-light my-3" to="/">
        Retour
      </Link>
      <h1 className="m-5">{service.title}</h1>
      <div className="row mb-4">
        {service.images.map((image) => (
          <div key={image} className="col-md-4">
            <div className="card border-0 mb-3">
              <img
                className="rounded card-img-top"
                onClick={() => {
                  setToggler(!toggler);
                  setIndex(service.images.indexOf(image));
                }}
                alt={service.category}
                src={`${image}`}
              />
            </div>
          </div>
        ))}
      </div>
      <FsLightbox
        toggler={toggler}
        sources={service.images}
        sourceIndex={+index}
      />
    </div>
  );
};

export default ServiceScreen;
