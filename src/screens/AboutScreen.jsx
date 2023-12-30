import photoPDG from "../assets/about/khalil.jpg";

const AboutScreen = () => {
  return (
    <section id="about" className="about py-5 pb-auto">
      <div className="container">
        <div className="text-center">
          <h4 className="text-uppercase fw-bold text-primary">
            A propos de nous
          </h4>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="about-content gap-5 align-items-center h-100 text-center">
          <figure className="figure pt-5">
            <img
              src={photoPDG}
              className="img-fluid rounded about-img "
              alt="PDG - BATINOUR Khalil Hadj Mehdi"
            />
            <figcaption className="figure-caption py-2">
              PDG - BATINOUR Khalil Hadj Mehdi
            </figcaption>
          </figure>
          <div className="about-text">
            <p className=" text-justify ">
              Batinour est une société créée en 2015, qui a accumulé une variété
              d'expériences dans des projets de construction, de réhabilitation
              et de rénovation, et qui propose des solutions performantes
              d'aménagement et d'équipements pour les professionnels et
              les particuliers.
            </p>
            <p className=" text-justify ">
              Notre équipe pluridisciplinaire est en mesure de prendre en charge
              vos projets de construction, de réhabilitation, de rénovation et
              de proposer des solutions performantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutScreen;
