import React from "react";
import Berita from "../../components/LandingComponent/Berita";

import Footer from "../../components/LandingComponent/Footer";
import Hero from "../../components/LandingComponent/Hero";
import LaporanAkhir from "../../components/LandingComponent/LaporanAkhir";
import NavbarComponent from "../../components/LandingComponent/NavbarComponent";
import Perlengkapan from "../../components/LandingComponent/Perlengkapan";
import Struktur from "../../components/LandingComponent/Struktur";
import TataTertib from "../../components/LandingComponent/TataTertib";
import "./landingpage.css";

function LandingPage() {
  return (
    <div className="wrapper-home">
      <div className="container-fluid container-pagehome p-0">
        <NavbarComponent />
        <div className="container container-home d-flex align-items-center">
          <div className="row mx-0">
            <div className="col-lg-12">
              <Hero />
            </div>
          </div>
        </div>
        <Berita />
        <LaporanAkhir />
        <Perlengkapan />
        <TataTertib />
        <Struktur />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;