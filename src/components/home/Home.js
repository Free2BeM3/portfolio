import React from "react";
import "./Home.css";
import Typed from "react-typed";
import Particles from "react-particles-js";
import Evolution from "../../sounds/bensound-evolution.mp3";

function Home() {
  return (
    <div className="Home">
      <div className="sound">
        <audio controls autoplay="true">
          <source src={Evolution} type="audio/mp3" />
        </audio>
        <p>
          Music: Evolution{" "}
          <a href="https://www.bensound.com" target="blank">
            https://www.bensound.com
          </a>
        </p>
      </div>
      <Typed
        className="typewriter"
        strings={[
          "<p id='S1'>Dare to Dream..</p>",
          "<p id='S2'>Dare to Care</p>",
          "<p id='S3'>Dare to shape the future</p>",
          "<p id='S4'>Dare to be the CHANGE,</p>",
          "<p id='S5'>YOU want to see in the world.</p>",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />

      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 70,
              density: {
                enable: true,
                value_area: 2000,
              },
            },
            shape: {
              type: "circle",

              stroke: {
                width: 50,
                color: {
                  value: [
                    "#03f2fa",
                    "#00ff22",
                    "#0345fa",
                    "#f700ff",
                    "#03f2fa",
                  ],
                },
              },
            },
          },
        }}
      />
    </div>
  );
}

export default Home;
