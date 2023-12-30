import logo from "../assets/logo.png";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer bg-light py-2">
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-3">
            <h6>À propos de BATINOUR</h6>
            <p>ENTREPRISE D’AMÉNAGEMENTS INDUSTRIELLE ET BATIMENTS</p>
          </div>
          <div className="col-md-4 my-3 ">
            <h6>Copyright © {year}</h6>
            <img src={logo} alt="" width="80" />
          </div>
          <div className="col-md-4 my-3">
            <h6>Contact</h6>
            <div className="mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=100054441941807&mibextid=ZbWKwL"
                className="text-decoration-none"
              >
                <i className="fab fa-facebook fa-3x text-dark mx-2"></i>
              </a>

              <a
                href="https://www.instagram.com/bati_nour?igsh=MTYwNGM3YWVyaHZ3Yw=="
                className="text-decoration-none"
              >
                <i className="fab fa-instagram fa-3x text-dark mx-2"></i>
              </a>
            </div>

            <ul className="list-unstyled">
              <li>
                <a href="mailto:contact@site.com">
                  <strong> khalilhadjmehdi94@gmail.com</strong>
                </a>
              </li>
              <li>0790 69 40 28</li>
              <li>0561 49 30 89</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
