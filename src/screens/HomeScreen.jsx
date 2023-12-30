import Header from "../components/Header";

import Introduction from "../components/Introduction";
import Details1 from "../components/Details1";

import Details2 from "../components/Details2";
import ListProjects from "../components/ListProjects";
import Contact from "../components/Contact";
import Carousel from "../components/Carousel";

const HomeScreen = () => {
  return (
    <>
      <Header />

      <Introduction />
      <Details1 />
      <Carousel />
      <ListProjects />
      <Contact />
    </>
  );
};

export default HomeScreen;
