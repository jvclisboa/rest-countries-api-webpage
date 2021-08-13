import { Link } from "react-router-dom";
import React from "react";
import { HiOutlineMoon } from "react-icons/hi";
import "./Header.scss";
import { useEffect } from "react";

const Header = () => {
  const changeTheme = () => {
    if (!localStorage.getItem("dark")) {
      localStorage.setItem("dark", "dark-theme");
      document.body.classList.add("dark");
    } else {
      localStorage.removeItem("dark");
      document.body.classList.remove("dark");
    }
  };

  const checkTheme = () => {
    return localStorage.getItem("dark")
      ? document.body.classList.add("dark")
      : "";
  };

  useEffect(() => {
    checkTheme();
  }, []);

  return (
    <div>
      <header className="header">
        <Link to="/">
          <div className="header-child">
            <h3>Where in the world?</h3>
          </div>
        </Link>
        <div className="header-child" onClick={changeTheme}>
          <span id="moon-icon">
            <HiOutlineMoon />
          </span>
          <p>Dark Mode</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
