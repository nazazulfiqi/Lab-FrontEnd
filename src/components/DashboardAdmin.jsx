import React, { useState } from "react";

function DashboardAdmin() {
  const [isActive, setIsActive] = useState(false);

  const handleOpenMenu = () => {
    setIsActive(true);
  };

  const handleCloseMenu = () => {
    setIsActive(false);
  };
  return (
    <>
      <div className="dashboard-pg text-grey-blue">
        <nav className="navigation-bar d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="navigation-bar-left col-6 d-flex align-items-center">
                <button
                  type="button"
                  className="navbar-open-btn text-grey-blue me-3"
                  onClick={handleOpenMenu}
                >
                  <i className="fas fa-bars text-white"></i>
                </button>
                <div className="navbar-logo">
                  <img src="assets/images/logowhite.svg" />
                </div>
              </div>

              <div className="navigation-bar-right col-6 d-flex align-items-center justify-content-end">
                <a href="#" className="profile-btn text-white btn-circle me-3">
                  <i className="fas fa-user"></i>
                </a>
                <button type="button" className="notification-btn text-white">
                  <i className="fa-regular fa-bell"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div
          className={
            isActive
              ? "navigation-overlay position-fixed d-block"
              : "navigation-overlay position-fixed "
          }
        ></div>

        <div
          className={
            isActive
              ? "navigation-sidebar bg-light-grey show-navigation-sidebar"
              : "navigation-sidebar bg-light-grey"
          }
        >
          <div className="navbar-sb-head d-flex justify-content-between align-items-center px-4">
            <img src="assets/images/logowhite.svg" width={180} />
            <button className="navbar-close-btn text-white">
              <i className="fas fa-arrow-left" onClick={handleCloseMenu}></i>
            </button>
          </div>

          <div className="navbar-sb-list p-4">
            <div className="navbar-sb-item mb-5">
              <h5 className="text-uppercase text-grey navbar-sb-item-title fs-12 ls-1">
                recommended
              </h5>
              <ul className="navbar-sb-links p-0 list-unstyled">
                <li className="navbar-sb-link my-3">
                  <a
                    href="#"
                    className="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div className="text-light-blue d-flex align-items-center">
                      <span className="navbar-sb-icon me-3">
                        <i className="fas fa-award"></i>
                      </span>
                      <span className="navbar-sb-text fs-14 fw-5 text-capitalize">
                        Upgrade account
                      </span>
                    </div>
                    <span className="badge text-uppercase text-blue">hot</span>
                  </a>
                </li>
                <li className="navbar-sb-link my-3">
                  <a
                    href="#"
                    className="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div className="text-light-blue d-flex align-items-center">
                      <span className="navbar-sb-icon me-3">
                        <i className="fa-solid fa-paper-plane"></i>
                      </span>
                      <span className="navbar-sb-text fs-14 fw-5 text-capitalize">
                        Telegram Group
                      </span>
                    </div>
                    <span className="badge text-uppercase text-blue">new</span>
                  </a>
                </li>
                <li className="navbar-sb-link my-3">
                  <a
                    href="#"
                    className="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div className="text-light-blue d-flex align-items-center">
                      <span className="navbar-sb-icon me-3">
                        <i className="fa-brands fa-whatsapp"></i>
                      </span>
                      <span className="navbar-sb-text fs-14 fw-5 text-capitalize">
                        WhatsApp Group 2
                      </span>
                    </div>
                    <span className="badge text-uppercase text-blue">new</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="navbar-sb-item mb-5">
              <h5 className="text-uppercase text-grey navbar-sb-item-title fs-12 ls-1">
                priority
              </h5>
              <ul className="navbar-sb-links p-0 list-unstyled">
                <li className="navbar-sb-link my-3">
                  <a
                    href="#"
                    className="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div className="text-light-blue d-flex align-items-center">
                      <span className="navbar-sb-icon me-3">
                        <i className="fa-solid fa-gauge"></i>
                      </span>
                      <span className="navbar-sb-text fs-14 fw-5 text-capitalize">
                        dashboard
                      </span>
                    </div>
                  </a>
                </li>
                <li className="navbar-sb-link my-3">
                  <a
                    href="#"
                    className="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div className="text-light-blue d-flex align-items-center">
                      <span className="navbar-sb-icon me-3">
                        <i className="fa-solid fa-spinner"></i>
                      </span>
                      <span className="navbar-sb-text fs-14 fw-5 text-capitalize">
                        Spin
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="navbar-sb-item mb-5">
              <h5 className="text-uppercase text-grey navbar-sb-item-title fs-12 ls-1">
                account
              </h5>
              <ul className="navbar-sb-links p-0 list-unstyled">
                <li className="navbar-sb-link my-3">
                  <a
                    href="#"
                    className="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div className="text-light-blue d-flex align-items-center">
                      <span className="navbar-sb-icon me-3">
                        <i className="fa-solid fa-clock-rotate-left"></i>
                      </span>
                      <span className="navbar-sb-text fs-14 fw-5 text-capitalize">
                        payment
                      </span>
                    </div>
                  </a>
                </li>
                <li className="navbar-sb-link my-3">
                  <a
                    href="#"
                    className="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div className="text-light-blue d-flex align-items-center">
                      <span className="navbar-sb-icon me-3">
                        <i className="fa-regular fa-circle-user"></i>
                      </span>
                      <span className="navbar-sb-text fs-14 fw-5 text-capitalize">
                        profile
                      </span>
                    </div>
                  </a>
                </li>

                <li className="navbar-sb-link my-3">
                  <a
                    href="#"
                    className="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div className="text-light-blue d-flex align-items-center">
                      <span className="navbar-sb-icon me-3">
                        <i className="fas fa-network-wired"></i>
                      </span>
                      <span className="navbar-sb-text fs-14 fw-5 text-capitalize">
                        referrals
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="navbar-sb-item mb-5">
              <h5 className="text-uppercase text-grey navbar-sb-item-title fs-12 ls-1">
                misc pages
              </h5>
              <ul className="navbar-sb-links p-0 list-unstyled">
                <li className="navbar-sb-link my-3">
                  <a
                    href="#"
                    className="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div className="text-light-blue d-flex align-items-center">
                      <span className="navbar-sb-icon me-3">
                        <i className="fas fa-lock"></i>
                      </span>
                      <span className="navbar-sb-text fs-14 fw-5 text-capitalize">
                        logout
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardAdmin;
