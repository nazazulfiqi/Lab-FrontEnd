import axios from "axios";
import React, { useEffect, useState } from "react";
import { dataAssistant } from "../../../utils/dataAssistant";

function CardKepalaLab() {
  const [assistant, setAssistant] = useState(dataAssistant);

  console.log(assistant);

  return (
    <div className="row mx-0 ">
      {assistant.map((item) => (
        <div className="col-lg-4 col-md-6 col-12 mb-3 mx-auto ">
          <div className="card mb-3 col-lg-12 card-struktur">
            <div className="row g-0">
              <div className="col-md-5 col-4 mx-auto my-auto">
                <img
                  src={item.kepalaLab.image}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-7 col-8">
                <div className="card-body">
                  <p className="jabatan-struktur text-start">
                    {item.kepalaLab.role}
                  </p>
                  <p className="card-title nama-struktur text-start">
                    {item.kepalaLab.name}
                  </p>
                  <p className="card-text text-start masa-jabatan">
                    {item.kepalaLab.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardKepalaLab;
