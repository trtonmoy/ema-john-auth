import React, { useContext } from "react";
import "./Header.css";
import logo from "../../../public/images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container">
      <nav className="navbar">
        <img src={logo} alt="" />
        <div className="menu">
          <Link to="shop">Shop</Link>
          <Link to="orders">Orders</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="woman">Woman</Link>
          <Link to="man">Man</Link>
          {user && (
            <span className="sign-out">
              {user.email} <button onClick={handleLogOut}>Sign Out</button>{" "}
            </span>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
