import React, { useContext, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");

  const { register } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password != confirm) {
      setError("password is not matched");
      return;
    } else if (password.length < 6) {
      setError("password should be 6 characters");
      return;
    }

    register(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        setError("");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleRegister}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="" required />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p>
        <small>
          Already have an account? <Link to="/login">Login</Link>
        </small>
      </p>
      <p className="text-error"> {error} </p>
    </div>
  );
};

export default Register;
