import React from "react";
import Hero from "../../components/Hero";
import LaporanAkhir from "../../components/LaporanAkhir";
import NavbarComponent from "../../components/NavbarComponent";
import "./home.css";
import Perlengkapan from "../../components/Perlengkapan";
import TataTertib from "../../components/TataTertib";
import Struktur from "../../components/Struktur";

function Home() {
  return (
    <div className="wrapper-home">
      <div className="container-fluid container-pagehome">
        <NavbarComponent />
        <div className="container container-home d-flex align-items-center">
          <div className="row mx-0">
            <div className="col-lg-12">
              <Hero />
            </div>
          </div>
        </div>
        <LaporanAkhir />
        <Perlengkapan />
        <TataTertib />
        <Struktur />
      </div>
    </div>
  );
}

export default Home;
