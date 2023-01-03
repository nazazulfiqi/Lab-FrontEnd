import React from "react";

function CardKepalaLab() {
  return (
    <div className="row mx-0 ">
      <div className="col-lg-4 col-md-6 col-12 mb-3 mx-auto ">
        <div className="card mb-3 col-lg-12 card-struktur">
          <div className="row g-0">
            <div className="col-md-5 col-4 mx-auto my-auto">
              <img
                src="assets/images/struktur/asisten_naza.png"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7 col-8">
              <div className="card-body">
                <p className="jabatan-struktur text-start">
                  Kepala Laboratorium
                </p>
                <p className="card-title nama-struktur text-start">
                  Yudi Irawan Chandra S.kom,MMsi
                </p>
                <p className="card-text text-start masa-jabatan">
                  2022 - Sekarang
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardKepalaLab;
