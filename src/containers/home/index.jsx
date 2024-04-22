import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

function Home() {
  const navigate = useNavigate();
  console.log(navigate);
  const HandleNavigate = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home__text__wrapper">
        <h1>
          Hello , I'm Akash Khare
          <br />
          Front end developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={HandleNavigate}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
}

export default Home;
