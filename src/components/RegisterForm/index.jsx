import React from "react";
import "../../styles/Forms/RegisterForm/index.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context";
import { useForm } from "react-hook-form";

function RegisterForm() {
  const { registerRequest } = React.useContext(UserContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      return registerRequest(data.username, data.email, data.password);
    } else {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registerForm-root">
      <div className="registerForm-box">
        <h2>Pikasso</h2>
      </div>
      <div className="registerForm-box">
        <label>Username</label>
        <input
          {...register("username", {
            required: "Username is required.",
            minLength: 6,
            maxLength: 14,
          })}
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>
      <div className="registerForm-box">
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required.",
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className="registerForm-box">
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required.",
            minLength: 6,
            maxLength: 20,
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div className="registerForm-box">
        <label>Confirm password</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Confirm password is required.",
            minLength: 6,
            maxLength: 20,
          })}
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
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
