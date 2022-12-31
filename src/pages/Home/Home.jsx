import React from "react";
import Hero from "../../components/Hero";
import NavbarComponent from "../../components/NavbarComponent";
import "./home.css";

function Home() {
  return (
    <div className="wrapper-home">
      <div className="container-fluid container-pagehome">
        <NavbarComponent />
        <div className="container container-home d-flex align-items-center">
          <div className="row">
            <div className="col-lg-12">
              <Hero />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
