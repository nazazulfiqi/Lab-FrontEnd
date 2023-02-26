import React from "react";

function Footer() {
  return (
    <footer className="section-footer mt-5 pb-4 border-top bg-bluegrad">
      <div className="container pt-5 pb-1">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="row text-center text-md-start text-lg-start">
              <div className="col-12 col-md-3 col-lg-3 mb-4">
                <h6 className="fw-bold text-white">LOCATION</h6>
                <div className="location d-flex d-md-block d-lg-block">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.039854378094!2d106.79009881431057!3d-6.258480663015093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f10a903f7f05%3A0x1e3c83822188e5a9!2sSTMIK%20Jakarta%20STI%26K!5e0!3m2!1sid!2sid!4v1668580902113!5m2!1sid!2sid"
                    className="col-lg-11 col-md-12 col-5 ms-2 ms-md-0 ms-lg-0"
                    height={120}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <p className="text-white footer-text col-lg-12 col-md-12 col-6 ms-2 ms-md-0 ms-lg-0">
                    Jl. BRI Radio Dalam No.17, Gandaria Utara, Kec. Kby. Baru,
                    Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12140
                  </p>
                </div>
              </div>
              <div className="col-12  col-md-3 col-lg-3 features-footer">
                <h6 className="fw-bold text-white text-center text-md-start text-lg-start ps-lg-5">
                  FEATURES
                </h6>
                <ul className="list-unstyled footer-text me-1 d-md-block d-lg-block justify-content-center ps-lg-5">
                  <li className="pe-2">
                    <a href="#">Beranda</a>
                  </li>
                  <li className="pe-2">
                    <a href="#">Berita</a>
                  </li>
                  <li className="pe-2">
                    <a href="#">Laporan</a>
                  </li>
                  <li className="pe-2">
                    <a href="#">Perlengkapan</a>
                  </li>
                  <li className="pe-2">
                    <a href="#">Peraturan</a>
                  </li>
                  <li>
                    <a href="#">Struktur</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <h6 className="fw-bold text-white">ATTENTION</h6>
                <p className="text-white footer-text text-md-start">
                  Informasi bagi mahasiswa lanjutan maupun mahasiswa yang ingin
                  mengulang praktikum, segera hubungi ke Contact yang tertera
                  dan jangan lupa siapkan KRS anda. Thanks ! 😊
                </p>
              </div>
              <div className="col-12 col-md-3  col-lg-3">
                <h6 className="fw-bold text-white">CONTACT</h6>
                <div className="contact-footer d-flex d-md-block d-lg-block justify-content-center">
                  <ul className="list-unstyled footer-text contact-footer">
                    <li>
                      <i className="fa-solid fa-envelope text-white me-2"></i>
                      <a href="#">labsimi2023@gmail.com</a>
                    </li>
                    <li>
                      <i className="fa-brands fa-whatsapp text-white me-2"></i>
                      <a href="#">+62 857-8269-4950 (Fakhri)</a>
                    </li>
                    <li>
                      <i className="fa-brands fa-whatsapp text-white me-2"></i>
                      <a href="#">+62 877-7136-5424 (Clarissa)</a>
                    </li>
                    <li>
                      <i className="fa-brands fa-whatsapp text-white me-2"></i>
                      <a href="#">+62 858-8183-9674 (Daffa)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid border-top">
        <div className="row justify-content-center align-items-center pt-4">
          <div className="col-auto fw-light text-white footer-text">
            2023 Copyright &#169; LABSIMI • All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
