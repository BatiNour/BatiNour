import decoration from "../assets/decoration-star.svg";
import headerImage from "../assets/header.png";
const Header = () => {
  return (
    <header className="header position-relative mt-6 overflow-hidden">
      <img
        src={decoration}
        alt=""
        className="decoration-star position-absolute"
      />
      <img
        src={decoration}
        alt=""
        className="decoration-star-2 position-absolute"
      />
      <div className="container position-relative z-3">
        <div className="row">
          <div className="col-lg-6">
            <div className="mt-4">
              <h1 className="display-4">
                ENTREPRISE<span className="text-primary"> D’AMÉNAGEMENTS </span>
                INDUSTRIELS ET BATIMENTS
              </h1>
              <p className="lead mb-4 ">
                <strong>
                  BIENVENUE CHEZ BATINOUR, L'ARTISAN DE L'EXCELLENCE
                  ARCHITECTURALE. DÉCOUVREZ UNE GAMME COMPLÈTE D'OPTIONS POUR
                  SUBLIMER VOTRE ESPACE, ALLANT DES FENÊTRES ET PORTES EN PVC
                  MODERNES À L'ÉLÉGANCE INTEMPORELLE DES CRÉATIONS EN ALUMINIUM.
                  PLONGEZ DANS L'AVENIR DURABLE AVEC NOS STRUCTURES EN BA13 ET
                  EXPLOREZ DE NOUVEAUX HORIZONS ESTHÉTIQUES AVEC L'ALICOBOND.
                </strong>
              </p>
              <a href="#introduction" className="btn btn-primary btn-lg m-2">
                Plus de détails
              </a>
              <a
                href="#contact"
                className="btn btn-outline-secondary btn-lg m-2"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-container ">
              <img src={headerImage} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
