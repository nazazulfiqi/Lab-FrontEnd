import React from "react";
import CardInfo from "./CardInfo";

function MainContentAdmin() {
  return (
    <div className="dashboard-main bg-bluegrad pb-5">
      <div className="container">
        <div className="row pt-3 mx-0">
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
        </div>
        <div className="row py-3">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div className="dashboard-title-text">
              <h2 className="text-white">Asisten Aktif</h2>
              <p className="text-grey">Daftar Asisten Laboratorium SI/MI</p>
            </div>
            <button type="button" className="fs-18 text-grey-blue">
              <i className="fas fa-ellipsis-vertical"></i>
            </button>
          </div>
        </div>

        <div className="overview-section p-4 overflow-auto">
          <table class="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MainContentAdmin;
