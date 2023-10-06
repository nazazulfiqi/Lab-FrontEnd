import React from "react";

function TataTertib() {
  return (
    <section
      className="container container-tatatertib"
      id="peraturan"
      data-aos="flip-left"
    >
      <div className="row d-flex mx-0">
        <div className="col-lg-6 col-12 text-center my-auto">
          <img
            src="assets/images/tatatertib.svg"
            alt=""
            className="col-lg-12 col-12"
          />
        </div>
        <div className="col-lg-6 col-12 text-white">
          <h1 className="title-laporan mb-3 mb-2">
            Tata Tertib Laboratorium SI/MI
          </h1>
          <p className="desc-hero mb-4">
            Berikut adalah tata tertib yang wajib dipatuhi seluruh praktikan.
          </p>
          <div className="tata-point">
            <div className="tatatertib d-flex">
              <img src="assets/icon/checklist.svg" alt="" className="me-4" />
              <p className="text-justify">
                Praktikum wajib diikuti oleh semua mahasiswa STMIK Jakarta STI&K
                pada semester bersangkutan dan bersedia menjalankan tata tertib
                yang sudah ditetapkan oleh Laboratorium Sistem Informasi.
              </p>
            </div>
            <div className="tatatertib d-flex">
              <img src="assets/icon/checklist.svg" alt="" className="me-4" />
              <p className="text-justify">
                Praktikum dilaksanakan sesuai dengan jadwal yang telah
                ditentukan dengan jumlah pertemuan praktikum yang wajib diikuti
                oleh praktikan
              </p>
            </div>
            <div className="tatatertib d-flex">
              <img src="assets/icon/checklist.svg" alt="" className="me-4" />
              <p className="text-justify">
                Peserta praktikum (Praktikan) wajib hadir tepat waktu dan sesuai
                jadwal yang telah ditetapkan.
              </p>
            </div>
            <div className="tatatertib d-flex">
              <img src="assets/icon/checklist.svg" alt="" className="me-4" />
              <p className="text-justify">
                Memelihara suasana yang nyaman dan tenang selama praktikum
              </p>
            </div>
            <div className="tatatertib d-flex justify-content-end">
              <a
                href="https://drive.google.com/file/d/1EjGCusu8nFdE3XELSJeX9cHmpgOQQloq/view?usp=sharing"
                className="text-decoration-none text-white"
              >
                <p className=""> Selengkapnya....</p>
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TataTertib;
