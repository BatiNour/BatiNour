const Services = () => {
  return (
    <section id="services" className="services bg-light py-6">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="text-container">
              <h2>
                <span className="text-secondary text-center text-lg-start">
                  Services
                </span>
                that we offer
              </h2>
              <p>
                At our company, we provide a wide range of services to meet all
                your office design needs. With our expertise and attention to
                detail, we ensure that every aspect of your office space is
                carefully considered and executed.
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row mb-4">
              <div className="col-md-4 d-flex flex-column align-items-center text-center">
                <i className="fas fa-rocket fa-4x text-secondary mb-2"></i>
                <p className="fs-5 fw-bold">Space analysis & planning</p>
              </div>
              <div className="col-md-4 d-flex flex-column align-items-center text-center">
                <i className="fas fa-clock fa-4x text-secondary mb-2"></i>
                <p className="fs-5 fw-bold">Design & colopr choosing</p>
              </div>
              <div className="col-md-4 d-flex flex-column align-items-center text-center">
                <i className="fas fa-comments fa-4x text-secondary mb-2"></i>
                <p className="fs-5 fw-bold">Materilas & delivery</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 d-flex flex-column align-items-center text-center">
                <i className="fas fa-tools fa-4x text-secondary mb-2"></i>
                <p className="fs-5 fw-bold">Execute the concept</p>
              </div>
              <div className="col-md-4 d-flex flex-column align-items-center text-center">
                <i className="fas fa-chart-pie fa-4x text-secondary mb-2"></i>
                <p className="fs-5 fw-bold">create a great atmosphere</p>
              </div>
              <div className="col-md-4 d-flex flex-column align-items-center text-center">
                <i className="fas fa-chart-bar fa-4x text-secondary mb-2"></i>
                <p className="fs-5 fw-bold">evaluation and reporting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
