import React from "react";
import CardAsisten from "./CardAsisten";
import CardKepalaLab from "./CardKepalaLab";

function Struktur() {
  return (
    <section className="container container-perlengkapan">
      <div className="row mx-0 px-0">
        <div className="col-lg-12 px-0 col-12 col-md-6"></div>
        <div className="row mx-0 text-center text-white">
          <h1 className="title-laporan mb-3 mb-2">Struktur Laboratorium</h1>
          <p className="desc-hero text-center mb-4">
            Berikut adalah struktur laboratorium SI/MI.
          </p>
          <CardKepalaLab />
          <div className="row mx-0 ">
            <CardAsisten />
            <CardAsisten />
            <CardAsisten />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Struktur;
