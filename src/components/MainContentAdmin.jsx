import React, { useState } from "react";
import AsistenAktif from "./AsistenAktif";
import CardInfo from "./CardInfo";
import KepalaLab from "./KepalaLab";

function MainContentAdmin() {
  const pilihMenu = localStorage.getItem("menu");

  console.log(pilihMenu);

  return (
    <div className="dashboard-main bg-bluegrad pb-5">
      <div className="container">
        <div className="row pt-3 mx-0">
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
        </div>
        <AsistenAktif />
        <KepalaLab />
      </div>
    </div>
  );
}

export default MainContentAdmin;
