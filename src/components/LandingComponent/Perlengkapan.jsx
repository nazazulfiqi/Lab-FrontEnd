import React from "react";

function Perlengkapan() {
  return (
    <section className="container container-perlengkapan" id="perlengkapan">
      <div className="row mx-0 px-0">
        <div className="col-lg-12 px-0 col-12 col-md-6"></div>
        <div className="row mx-0 text-center text-white">
          <h1 className="title-laporan mb-3 mb-2">Perlengkapan Praktikum</h1>
          <p className="desc-hero text-center mb-4">
            Silahkan unduh file perlengkapan praktikum.
          </p>
          <div className="row mx-0 ">
            <div className="col-lg-4 col-md-6 col-12 mb-3 ">
              <div className="card card-perlengkapan card-perlengkapan ">
                <div className="card-body ">
                  <div className="card-icon text-center">
                    <i className="fa-solid fa-book icon-laporan pb-2"></i>
                  </div>
                  <h2 className="card-title text-center text-light">
                    Buku Praktikum
                  </h2>
                  <p className="card-text text-center text-light">
                    Silahkan Unduh File Buku Praktikum
                  </p>
                  <div className="button-lihat text-center">
                    <a
                      href="https://drive.google.com/file/d/1-JQsT38iydN7XKDYvLf2QnpWLeqQDJkK/view"
                      target="_blank"
                      className="btn btn-light text-center"
                    >
                      Lihat
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div className="card card-perlengkapan card-perlengkapan">
                <div className="card-body ">
                  <div className="card-icon text-center">
                    <i className="fa-solid fa-download icon-laporan pb-2"></i>
                  </div>
                  <h2 className="card-title text-center text-light">
                    Aplikasi Praktikum
                  </h2>
                  <p className="card-text text-center text-light">
                    Silahkan Unduh File Aplikasi Praktikum
                  </p>
                  <div className="button-lihat text-center">
                    <a
                      href="https://drive.google.com/drive/folders/1J6poHzuOU8Gef_4PuKdVYl369zOWjkdV"
                      target="_blank"
                      className="btn btn-light text-center"
                    >
                      Lihat
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div className="card card-perlengkapan card-perlengkapan">
                <div className="card-body ">
                  <div className="card-icon text-center">
                    <i className="fa-solid fa-folder-open icon-laporan pb-2"></i>
                  </div>
                  <h2 className="card-title text-center text-light">
                    Berkas Praktikum
                  </h2>
                  <p className="card-text text-center text-light">
                    Silahkan Unduh File Berkas Praktikum
                  </p>
                  <div className="button-lihat text-center">
                    <a
                      href="https://drive.google.com/file/d/1-JQsT38iydN7XKDYvLf2QnpWLeqQDJkK/view"
                      target="_blank"
                      className="btn btn-light text-center"
                    >
                      Lihat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perlengkapan;
