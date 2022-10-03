import React from "react";
import {AiOutlineSearch} from "react-icons/ai"

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top p-0">
        <div className="container">
          <a className="navbar-brand p-0" href="/">
            <img className="img-fluid"
              src="assests/quant-logo.svg"
              style={{ width: "110px" }}
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active underline"
                  aria-current="page"
                  href="/"
                >
                  Who
                </a>
              </li>
              <li className="nav-item underline">
                <a className="nav-link" href="/">
                  What
                </a>
              </li>
              <li className="nav-item underline">
                <a className="nav-link" href="/">
                  How
                </a>
              </li>
              <li className="nav-item underline">
                <a className="nav-link" href="/">
                  Why
                </a>
              </li>
              <li className="nav-item underline">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item underline">
                <a className="nav-link" href="/">
                  Sign In
                </a>
              </li>
              <li className="nav-item underline">
                <a className="nav-link" href="/">
                  <AiOutlineSearch />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
