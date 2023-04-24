import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const { login } = useContext(AuthContext);

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        setError("succeed");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id=""
            required
          />
        </div>
        <p onClick={() => setShow(!show)}>
          <small>
            {show ? <span>Hide Password</span> : <span>Show Password</span>}
          </small>
        </p>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>
        <small>
          New to Ema-john? <Link to="/register">Create New Account</Link>
        </small>
      </p>
      <p>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default Login;
