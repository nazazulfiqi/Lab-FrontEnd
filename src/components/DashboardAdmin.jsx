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
      <div class="dashboard-pg text-grey-blue">
        <nav class="navigation-bar d-flex align-items-center">
          <div class="container">
            <div class="row align-items-center">
              <div class="navigation-bar-left col-6 d-flex align-items-center">
                <button
                  type="button"
                  className="navbar-open-btn text-grey-blue me-3"
                  onClick={handleOpenMenu}
                >
                  <i class="fas fa-bars text-white"></i>
                </button>
                <div class="navbar-logo">
                  <img src="assets/images/logowhite.svg" />
                </div>
              </div>

              <div class="navigation-bar-right col-6 d-flex align-items-center justify-content-end">
                <a
                  href="#"
                  class="profile-btn bg-blue text-white btn-circle me-3"
                >
                  <i class="fas fa-user"></i>
                </a>
                <button type="button" class="notification-btn text-grey-blue">
                  <i class="fa-regular fa-bell"></i>
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
          <div class="navbar-sb-head d-flex justify-content-between align-items-center px-4">
            <img src="assets/images/logowhite.svg" width={180} />
            <button class="navbar-close-btn text-white">
              <i class="fas fa-arrow-left" onClick={handleCloseMenu}></i>
            </button>
          </div>

          <div class="navbar-sb-list p-4">
            <div class="navbar-sb-item mb-5">
              <h5 class="text-uppercase text-grey navbar-sb-item-title fs-12 ls-1">
                recommended
              </h5>
              <ul class="navbar-sb-links p-0 list-unstyled">
                <li class="navbar-sb-link my-3">
                  <a
                    href="#"
                    class="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div class="text-light-blue d-flex align-items-center">
                      <span class="navbar-sb-icon me-3">
                        <i class="fas fa-award"></i>
                      </span>
                      <span class="navbar-sb-text fs-14 fw-5 text-capitalize">
                        Upgrade account
                      </span>
                    </div>
                    <span class="badge text-uppercase text-blue">hot</span>
                  </a>
                </li>
                <li class="navbar-sb-link my-3">
                  <a
                    href="#"
                    class="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div class="text-light-blue d-flex align-items-center">
                      <span class="navbar-sb-icon me-3">
                        <i class="fa-solid fa-paper-plane"></i>
                      </span>
                      <span class="navbar-sb-text fs-14 fw-5 text-capitalize">
                        Telegram Group
                      </span>
                    </div>
                    <span class="badge text-uppercase text-blue">new</span>
                  </a>
                </li>
                <li class="navbar-sb-link my-3">
                  <a
                    href="#"
                    class="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div class="text-light-blue d-flex align-items-center">
                      <span class="navbar-sb-icon me-3">
                        <i class="fa-brands fa-whatsapp"></i>
                      </span>
                      <span class="navbar-sb-text fs-14 fw-5 text-capitalize">
                        WhatsApp Group 2
                      </span>
                    </div>
                    <span class="badge text-uppercase text-blue">new</span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="navbar-sb-item mb-5">
              <h5 class="text-uppercase text-grey navbar-sb-item-title fs-12 ls-1">
                priority
              </h5>
              <ul class="navbar-sb-links p-0 list-unstyled">
                <li class="navbar-sb-link my-3">
                  <a
                    href="#"
                    class="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div class="text-light-blue d-flex align-items-center">
                      <span class="navbar-sb-icon me-3">
                        <i class="fa-solid fa-gauge"></i>
                      </span>
                      <span class="navbar-sb-text fs-14 fw-5 text-capitalize">
                        dashboard
                      </span>
                    </div>
                  </a>
                </li>
                <li class="navbar-sb-link my-3">
                  <a
                    href="#"
                    class="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div class="text-light-blue d-flex align-items-center">
                      <span class="navbar-sb-icon me-3">
                        <i class="fa-solid fa-spinner"></i>
                      </span>
                      <span class="navbar-sb-text fs-14 fw-5 text-capitalize">
                        Spin
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div class="navbar-sb-item mb-5">
              <h5 class="text-uppercase text-grey navbar-sb-item-title fs-12 ls-1">
                account
              </h5>
              <ul class="navbar-sb-links p-0 list-unstyled">
                <li class="navbar-sb-link my-3">
                  <a
                    href="#"
                    class="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div class="text-light-blue d-flex align-items-center">
                      <span class="navbar-sb-icon me-3">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                      </span>
                      <span class="navbar-sb-text fs-14 fw-5 text-capitalize">
                        payment
                      </span>
                    </div>
                  </a>
                </li>
                <li class="navbar-sb-link my-3">
                  <a
                    href="#"
                    class="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div class="text-light-blue d-flex align-items-center">
                      <span class="navbar-sb-icon me-3">
                        <i class="fa-regular fa-circle-user"></i>
                      </span>
                      <span class="navbar-sb-text fs-14 fw-5 text-capitalize">
                        profile
                      </span>
                    </div>
                  </a>
                </li>

                <li class="navbar-sb-link my-3">
                  <a
                    href="#"
                    class="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div class="text-light-blue d-flex align-items-center">
                      <span class="navbar-sb-icon me-3">
                        <i class="fas fa-network-wired"></i>
                      </span>
                      <span class="navbar-sb-text fs-14 fw-5 text-capitalize">
                        referrals
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div class="navbar-sb-item mb-5">
              <h5 class="text-uppercase text-grey navbar-sb-item-title fs-12 ls-1">
                misc pages
              </h5>
              <ul class="navbar-sb-links p-0 list-unstyled">
                <li class="navbar-sb-link my-3">
                  <a
                    href="#"
                    class="text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div class="text-light-blue d-flex align-items-center">
                      <span class="navbar-sb-icon me-3">
                        <i class="fas fa-lock"></i>
                      </span>
                      <span class="navbar-sb-text fs-14 fw-5 text-capitalize">
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
