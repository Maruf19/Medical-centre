import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../components/hooks/useToken";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {signIn} = useContext(AuthContext)
  const [loginError, setLoginError] = useState();
  const [loginUserEmail, setLoginUserEmail] = useState('')
  const [token] = useToken(loginUserEmail)

  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || "/";

  if(token) {
    navigate(from, {replace: true})
  }

  const handleLogin = (data) => {
    setLoginError("")
    signIn(data.email, data.password)
    .then(result => {
      const user = result.user;
      setLoginUserEmail(data.email)
    })
    .catch(err => {
      console.error(err)
      setLoginError(err.message)
    })
  };
  return (
    <div className="h-[400px] flex justify-center items-center my-32">
      <div className="w-96 p-7 shadow-lg rounded-lg">
        <h2 className="text-3xl text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"/>
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input
           input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Forget Password</span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-accent w-full mt-3"
          />
          {loginError && <p className="text-red-500 mt-6">{loginError}</p>}
        </form>
        <p className="text-center mt-4">
          New to doctors portal?{" "}
          <Link to="/signup" className="text-secondary ">
            Create a new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
