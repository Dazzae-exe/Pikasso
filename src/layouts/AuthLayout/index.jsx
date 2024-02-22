import React from "react";
import "../../styles/AuthLayout/index.css";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <section className="authLayout-root">
      <div className="authLayout-container">
        <figure className="authLayout-image">
          <img
            src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="..."
          />
        </figure>

        <div className="authLayout-box">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;
