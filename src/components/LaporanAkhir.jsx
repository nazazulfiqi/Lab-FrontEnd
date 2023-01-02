import React from "react";

function LaporanAkhir() {
  return (
    <section className="container container-laporan d-flex align-items-center p-0">
      <div className="row mx-0 px-0">
        <div className="col-lg-12">
          <h1 className="text-white text-center mt-5">Laporan Akhir</h1>
        </div>
        <div className="row mx-0 px-0 text-center px-0">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card border-0 bg-bluegrad text-white p-lg-3 card-laporan">
              <div className="card-body px-4">
                <blockquote className="blockquote mb-0">
                  <i class="fa-solid fa-file-word icon-laporan"></i>
                  <h4 className="mt-3">Step 1</h4>
                  <p className="mt-3 text-laporan">
                    Screenshoot dan dimasukan kedalam lembar laporan akhir
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card border-0 bg-bluegrad text-white p-lg-3 card-laporan">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <i class="fa-solid fa-file-import icon-laporan "></i>
                  <h4 className="mt-3">Step 2</h4>
                  <p className="mt-3 text-laporan">
                    Kirim file .pdf & program rar / zip
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card border-0 bg-bluegrad text-white p-lg-3 card-laporan">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <i class="fa-regular fa-file-zipper icon-laporan"></i>
                  <h4 className="mt-3">Step 3</h4>
                  <p className="mt-3 text-laporan">
                    Nama file dengan format : NPM_PERTEMUAN_PRAKTIKUM_AKHIR
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card border-0 bg-bluegrad text-white p-lg-3 card-laporan">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <i class="fa-solid fa-hourglass-start icon-laporan"></i>
                  <h4 className="mt-3">Step 4</h4>
                  <p className="mt-3 text-laporan">
                    Dikumpulkan H-2 jam 22.00 sebelum praktikum berikutnya
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LaporanAkhir;
