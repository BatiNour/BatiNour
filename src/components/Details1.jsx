import details1 from "../assets/details-1.png";
import decoration from "../assets/decoration-star.svg";
const Details1 = () => {
  return (
    <section
      id="details"
      className="details position-relative my-6 overflow-hidden"
    >
      <img
        src={decoration}
        alt=""
        className="decoration-star position-absolute"
      />
      <div className="container position-relative z-3">
        <div className="row">
          <div className="col-lg-6">
            <div className="image-container d-flex justify-content-center">
              <img src={details1} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mt-4">
              <h2 className="mb-4">
                NOS <span className="text-primary">TRAVAUX</span>
              </h2>
              <ul className="list-unstyled mt-5">
                <li className="d-flex mb-3">
                  <i className="fas fa-check text-primary fa-2x mx-4"></i>
                  <p>
                    FABRICATION ET MONTAGE DE CHARPENTES MÉTALLIQUES ET PANNEAUX
                    SANDWICHS.
                  </p>
                </li>
                <li className="d-flex mb-3">
                  <i className="fas fa-check text-primary fa-2x mx-4"></i>
                  <p>PRÉPARATION DE SITES POUR SALLES BLANCHES.</p>
                </li>
                <li className="d-flex mb-3">
                  <i className="fas fa-check text-primary fa-2x mx-4"></i>
                  <p>
                    APPLICATION D’ÉPOXY POUR REVÊTEMENT DE SOLS INDUSTRIELS.
                  </p>
                </li>
                <li className="d-flex mb-3">
                  <i className="fas fa-check text-primary fa-2x mx-4"></i>
                  <p>INSTALLATION DE CAMÉRAS DE SURVEILLANCE.</p>
                </li>
                <li className="d-flex mb-3">
                  <i className="fas fa-check text-primary fa-2x mx-4"></i>
                  <p>SYSTÈME DE TRAITEMENT D’AIR.</p>
                </li>
                <li className="d-flex mb-3">
                  <i className="fas fa-check text-primary fa-2x mx-4"></i>
                  <p>PORTES INDUSTRIELLES.</p>
                </li>
                <li className="d-flex mb-3">
                  <i className="fas fa-check text-primary fa-2x mx-4"></i>
                  <p>INSTALLATION ET RÉPARATION DES GROUPES ÉLECTROGÈNES.</p>
                </li>
                <li className="d-flex mb-3">
                  <i className="fas fa-check text-primary fa-2x mx-4"></i>
                  <p>PRÉPARATION DE SITES MÉDICAUX.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details1;
