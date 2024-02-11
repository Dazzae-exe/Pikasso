import React from "react";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import { useLocation } from "react-router-dom";

function Auth() {
  const path = useLocation().pathname;

  return (
    <>
      {path === '/auth/register' && <RegisterForm />}
      {path === '/auth/log-in' && <LoginForm />}
    </>
  )
}

export default Auth;
