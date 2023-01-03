import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
function KepalaLab() {
  return (
    <div className="row py-3">
      <div className="col-12 d-flex justify-content-between align-items-center">
        <div className="dashboard-title-text">
          <h2 className="text-white">Kepala Lab</h2>
          <p className="text-grey">Daftar Asisten Laboratorium SI/MI</p>
        </div>
        <button type="button" className="fs-18 text-grey-blue">
          <i className="fas fa-ellipsis-vertical"></i>
        </button>
      </div>

      <div className="overview-section p-0 p-md-1 p-lg-2 overflow-auto col-12">
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">NPM</th>
              <th scope="col">Nama Lengkap</th>
              <th scope="col">Alamat</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>10420064</td>
              <td>Yudi Irawan C</td>
              <td>Lenteng Agung</td>
              <td>
                <FontAwesomeIcon icon={faPenToSquare} className="me-2 " />
                <FontAwesomeIcon icon={faTrash} />
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>10420064</td>
              <td>Naza Zulfiqi</td>
              <td>Lenteng Agung</td>
              <td>
                <FontAwesomeIcon icon={faPenToSquare} className="me-2 " />
                <FontAwesomeIcon icon={faTrash} />
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>10420064</td>
              <td>Naza Zulfiqi</td>
              <td>Lenteng Agung</td>
              <td>
                <FontAwesomeIcon icon={faPenToSquare} className="me-2 " />
                <FontAwesomeIcon icon={faTrash} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default KepalaLab;
