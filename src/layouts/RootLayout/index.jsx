import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../../styles/RootLayout/index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function RootLayout() {
  const location = useLocation();

  return (
    <main className="root-layout">
      <Header />

      <section className="layoutSection">
        <Outlet />
      </section>

      {location.pathname !== "/explore" && <Footer />}
    </main>
  );
}

export default RootLayout;
