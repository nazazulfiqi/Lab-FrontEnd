import React from "react";

function Hero() {
  return (
    <div className="container" id="hero">
      <div className="row">
        <div className="col-lg-6 text-white">
          <h1 className="title-hero">
            Laboratorium Sistem Informasi & Manajemen Informatika
          </h1>
          <p className="desc-hero mt-1">
            Penyajian Informasi seputar Laboratorium Sistem Informasi.
          </p>
          <div className="button-hero">
            <a href="https://api.whatsapp.com/send/?phone=6285782694950&text&type=phone_number&app_absent=0">
              {" "}
              <button type="button" className="btn btn-primary mt-2">
                Hubungi Kami
              </button>
            </a>
          </div>
        </div>
        <div className="col-lg-6 image-hero ">
          <img src="assets/images/phone.png" className="col-lg-11" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
