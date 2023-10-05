import React from "react";

function NotFound() {
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "100vh", maxHeight: "100vh" }}
    >
      <div className="row">
        <div className="col-lg-12 text-white text-center">
          <img
            src="assets/images/404.jpg"
            alt="Not-Found"
            width={400}
            className="d-block"
          />
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
