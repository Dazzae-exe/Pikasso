import React from "react";
import "../../styles/Forms/LoginForm/index.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context";

function LoginForm() {
  const formRef = React.useRef(null);
  const { loginRequest } = React.useContext(UserContext);

  const submitHandler = (evt) => {
    evt.preventDefault();
    const form = new FormData(formRef.current);
    let username = form.get("username");
    let password = form.get("password");

    return loginRequest(username, password);
  };

  return (
    <form
      onSubmit={(evt) => submitHandler(evt)}
      ref={formRef}
      className="loginForm-root"
    >
      <div className="loginForm-box">
        <h2>Pikasso</h2>
      </div>
      <div className="loginForm-box">
        <label htmlFor="username">Username or email</label>
        <input type="text" name="username" />
      </div>
      <div className="loginForm-box">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>
      <div className="loginForm-box">
        <button type="submit">Send</button>
      </div>
      <div className="loginForm-box">
        <span>
          Don&apos;t you need an account?{" "}
          <Link to={`/auth/register`}>Sign Up</Link>
        </span>
      </div>
    </form>
  );
}

export default LoginForm;
