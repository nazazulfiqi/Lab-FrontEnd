import React from "react";

function MainContentAdmin() {
  return (
    <div class="dashboard-main">
      <div class="container">
        <div class="row py-3">
          <div class="col-12 d-flex justify-content-between align-items-center">
            <div class="dashboard-title-text">
              <h2>LAB SI/MI Dashboard</h2>
              <p class="text-grey">On Insta @tutorgakids</p>
            </div>
            <button type="button" class="fs-18 text-grey-blue">
              <i class="fas fa-ellipsis-vertical"></i>
            </button>
          </div>
        </div>

        <div class="overview-section p-4">
          <div class="row overview-section-title">
            <h4>Account Overview</h4>
            <p class="small text-grey">
              Check <span class="text-blue">transactions</span> history for
              detailed overview of your spendings
            </p>
          </div>

          <div class="row overview-section-list gy-4">
            <div class="col-md-6 col-lg-4">
              <a href="#" class="text-decoration-none">
                <div class="overview-section-item bg-white p-4">
                  <div class="item-top d-flex align-items-center justify-content-between mb-3">
                    <p class="text-grey mb-0">Total Balance</p>
                    <span class="info-icon d-flex align-items-center justify-content-center bg-grey text-white fs-8">
                      <i class="fa-solid fa-question"></i>
                    </span>
                  </div>
                  <div class="item-title text-cyan fs-4 fw-6 mb-1">
                    Toks <span class="text-blue">Lab Honor</span>
                  </div>
                  <div class="item-bottom d-flex align-items-center justify-content-between">
                    <div class="earnings me-3">
                      <span class="text-grey-blue">
                        <i class="fa-solid fa-arrow-right"></i>
                      </span>
                      <span class="fs-15">
                        Earned <span class="text-cyan">1Jt</span> today{" "}
                      </span>
                    </div>
                    <div class="deposit">
                      <span>
                        <i class="fa-solid fa-wallet"></i>
                      </span>
                      <span class="text-blue fs-14">Deposit</span>
                    </div>
                    <span class="balance-icon align-self-end fs-20">
                      <i class="fa-solid fa-wallet"></i>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContentAdmin;
