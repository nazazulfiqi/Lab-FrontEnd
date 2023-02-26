import React, { useState } from "react";
import { dataAssistant } from "../../../utils/dataAssistant";

function CardAsisten() {
  const [aktif, setAktif] = useState(dataAssistant);

  console.log(aktif);
  return (
    <div className="row mx-0 ">
      {aktif.map((item) =>
        item.assistan.map((data) => (
          <div className="col-lg-4 col-md-6 col-12 mb-3 mx-auto " key={data.id}>
            {console.log(data.id)}
            <div className="card mb-3 col-lg-12 card-struktur">
              <div className="row g-0">
                <div className="col-md-5 col-4 mx-auto my-auto">
                  <img
                    src={data.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-7 col-8">
                  <div className="card-body">
                    <p className="jabatan-struktur text-start">{data.role}</p>
                    <p className="card-title nama-struktur text-start">
                      {data.name}
                    </p>
                    <p className="card-text text-start masa-jabatan">
                      {data.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CardAsisten;
