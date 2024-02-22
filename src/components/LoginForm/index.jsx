import React from "react";
import "../../styles/Forms/LoginForm/index.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context";
import { useForm } from "react-hook-form";

function LoginForm() {
  const { loginRequest } = React.useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    return loginRequest(data.username, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="loginForm-root">
      <div className="loginForm-box">
        <h2>Pikasso</h2>
      </div>
      <div className="loginForm-box">
        <label htmlFor="username">Username or email</label>
        <input
          {...register("username", { required: "Username is required." })}
        />
        {errors?.password && <span>{errors?.username?.message}</span>}
      </div>
      <div className="loginForm-box">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register("password", { required: "Password is required." })}
        />
        {errors?.password && <span>{errors?.password?.message}</span>}
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
