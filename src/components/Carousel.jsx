import Slider from "react-infinite-logo-slider";

import sliderLogo from "../slider";

const Carousel = () => {
  return (
    <div className="container">
      <h2 className="text-center pb-4">
        Parmi Nos <span className="text-secondary">Clients</span>
      </h2>
      <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}
      >
        {sliderLogo.map((logo) => (
          <Slider.Slide key={sliderLogo.indexOf(logo)}>
            <img src={logo} alt="any3" className="logo-slider" />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
