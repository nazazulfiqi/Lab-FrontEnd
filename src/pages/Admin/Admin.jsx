import React, { useState } from "react";
import DashboardAdmin from "../../components/DashboardAdmin";
import MainContentAdmin from "../../components/MainContentAdmin";
import "./admin.css";

function Admin() {
  return (
    <>
      <DashboardAdmin />
      <MainContentAdmin />
    </>
  );
}

export default Admin;
