import React from "react";
import "../../styles/Forms/RegisterForm/index.css";
import { Link } from "react-router-dom";
import { StrapiInstance } from "../../lib/axios/StrapiConfig";

function RegisterForm() {
  const formRef = React.useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    let username;
    let email;
    let password;
    let confirmPassword;
    const form = new FormData(formRef.current);
    username = form.get("username");
    email = form.get("email");
    password = form.get("password");
    confirmPassword = form.get("password");

    if (password === confirmPassword) {
      StrapiInstance.post("/auth/local/register", {
        username: username,
        email: email,
        password: password,
      })
        .then((response) => {
          console.log("Well done! user signed up.");
          console.log("User profile: ", response.data);
        })
        .catch((error) => console.log("An error occurred: ", error));

      return event.reset();
    }
  };

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      ref={formRef}
      className="registerForm-root"
    >
      <div className="registerForm-box">
        <h2>Pikasso</h2>
      </div>
      <div className="registerForm-box">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
      </div>
      <div className="registerForm-box">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
      </div>
      <div className="registerForm-box">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>
      <div className="registerForm-box">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input type="password" name="confirmPassword" />
      </div>
      <div className="registerForm-box">
        <button type="submit">Send</button>
      </div>
      <div className="registerForm-box">
        <span>
          Do you have an account? <Link to={`/auth/log-in`}>Log In</Link>
        </span>
      </div>
    </form>
  );
}

export default RegisterForm;
