import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" width="50" />
            <p className="fw-bolder text-dark d-inline">BATINOUR</p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Accueil
                </Link>
              </li>

              <li className="nav-item">
                <HashLink smooth to="/#details" className="nav-link">
                  Services
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/#projects" className="nav-link">
                  Nos Projets
                </HashLink>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" aria-current="page">
                  A propos de nous
                </Link>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  to="/#contact"
                  className="nav-link btn btn-outline-secondary px-4 mx-4"
                >
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
