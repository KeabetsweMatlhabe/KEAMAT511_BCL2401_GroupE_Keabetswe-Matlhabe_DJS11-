import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
//import background_banner  from "../assets/background_banner.jpg"
export default function Layout() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        {/* <img className={background_banner} src={background_banner} alt=""></img> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
