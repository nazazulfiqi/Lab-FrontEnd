import React from "react";

function CardInfo() {
  return (
    <div className="col-6 col-lg-3 mb-2">
      <div className="card">
        <div className="card">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body text-left">
                  <h3 className="success">156</h3>
                  <span>Asisten Aktif</span>
                </div>
                <div className="ms-auto my-auto me-3">
                  <h1 className="fa-solid fa-user"></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
