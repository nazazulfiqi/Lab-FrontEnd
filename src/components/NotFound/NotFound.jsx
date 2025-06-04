import React from "react";

function NotFound() {
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "100vh", maxHeight: "100vh" }}
    >
      <div className="row">
        <div className="col-lg-12 text-white text-center">
          <img src="/404.jpg" alt="Not-Found" width={400} className="d-block" />
          <div className="d-flex justify-content-center mb-3">
            <a className="d-block btn btn-dark px-5" href="/">
              Back
            </a>
          </div>
          <a
            href="http://www.freepik.com"
            className="text-decoration-none text-dark"
          >
            Designed by stories / Freepik
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
