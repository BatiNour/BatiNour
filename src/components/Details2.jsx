import details2 from "../assets/details-2.png";
import decoration from "../assets/decoration-star.svg";

const Details2 = () => {
  return (
    <>
      <section className="details-2 position-relative my-6 overflow-hidden">
        <img
          src={decoration}
          alt=""
          className="decoration-star position-absolute"
        />
        <div className="container position-relative z-3">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container text-center text-lg-start mb-4">
                <h2>
                  Transform your work space for enhanced
                  <span className="text-primary">Productivity</span>
                </h2>
                <p>
                  A thoughtfully designed and well-organized office space has a
                  profound impact on productivity and employee satisfaction. It
                  sets the stage for seamless collaboration, efficient
                  workflows, and creative inspiration. At our company, we
                  specialize in creating tailored office environments that
                  maximize productivity and elevate the overall work experience.
                </p>
                <a href="article.html" className="btn btn-primary">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-container d-flex justify-content-center">
                <img src={details2} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="get-quote bg-light py-6 text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h4 className="lh-base">
                Our team of highly skilled designers and interior construction
                workers can deliver above your level of expections
              </h4>
              <a
                href="#contact"
                className="btn btn-secondary text-light btn-lg"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details2;
