import { useEffect } from "react";

const Stats = () => {
  function incrementStats() {
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      counter.innerText = 0;

      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
          counter.innerText = Math.ceil(c + increment);
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  }

  useEffect(() => {
    incrementStats();
  }, []);

  return (
    <section id="stats" className="stats container">
      <div className="row my-6">
        <div className="col-md-3 col-sm-6 text-center">
          <h2 className="counter xl-text" data-target="328">
            328
          </h2>
          <p>Happy Customers</p>
        </div>
        <div className="col-md-3 col-sm-6 text-center">
          <h2 className="counter xl-text" data-target="285">
            285
          </h2>
          <p>Issues Solved</p>
        </div>
        <div className="col-md-3 col-sm-6 text-center">
          <h2 className="counter xl-text" data-target="159">
            159
          </h2>
          <p>Good Reviews</p>
        </div>
        <div className="col-md-3 col-sm-6 text-center">
          <h2 className="counter xl-text" data-target="128">
            128
          </h2>
          <p>Case Studeis</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
