const Contact = () => {
  return (
    <section id="contact" className="contact my-2">
      <div className="container">
        <div className="row">
          <div className="text-center mb-4">
            <h4 className="text-uppercase fw-bold text-primary">
              Nos Contacts
            </h4>
            <hr className="w-25 mx-auto" />
          </div>
          <div className="col-md-6">
            <div className="card-body text-center">
              <i className="fas fa-envelope fa-3x text-primary p-3 my-4"></i>
              <h5 className="card-title">Email</h5>
              <p className="card-text">khalilhadjmehdi94@gmail.com</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-body text-center">
              <i className="fas fa-phone fa-3x text-primary p-3 my-4"></i>
              <h5 className="card-title">Tél</h5>
              <p className="card-text">0790 69 40 28 / 0561 49 30 89 </p>
            </div>
          </div>
        </div>

        <div className="location my-5 text-center">
          <div className="row">
            <h4 className="text-uppercase fw-bold text-primary">
              NOTRE LOCALISATION
            </h4>
            <hr className="w-25 mx-auto" />
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d337.28818873583646!2d2.743911958973402!3d36.46132344875313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f730f24d20157%3A0x3aef31b5e31467b9!2sChiffa!5e0!3m2!1sfr!2sdz!4v1703785755612!5m2!1sfr!2sdz"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
