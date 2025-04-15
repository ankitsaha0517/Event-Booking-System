// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
const Layout = () => {
  return (
    <div className="bg-[#c7ccd3] min-h-[100vh]">
      <NavBar />
      <div className="min-h-[90vh] flex items-center justify-center p-4 sm:p-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
