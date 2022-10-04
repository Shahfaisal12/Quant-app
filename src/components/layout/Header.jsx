import React from "react";
import {AiOutlineSearch} from "react-icons/ai"
import {HiOutlineArrowRight} from 'react-icons/hi'

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
                <div className="dropdown-content">
                  <h6 className="fw-bold mb-3">Who we serve</h6>
                  <div className="row">
                    <div className="col-md-4">
                  <p style={{fontSize:'9px'}}>We empower banks, asset managers and other financial institutions; enterprises, typically with international operations; and the technology partners and fintech developers who support them.</p>

                    </div>
                    <div className="col-md-8">
                      <div className="dropdown-list">
                        <ul>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Financial institutions  <HiOutlineArrowRight style={{marginLeft:'auto'}} /></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Enterprises  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Partners  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Developers  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item underline">
                <a className="nav-link" href="/">
                  What
                </a>
                <div className="dropdown-content">
                  <h6 className="fw-bold mb-3">What we do</h6>
                  <div className="row">
                    <div className="col-md-4">
                  <p style={{fontSize:'9px'}}>We solve pressing problems in finance with solutions for:</p>

                    </div>
                    <div className="col-md-8">
                      <div className="dropdown-list">
                        <ul>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Digital currencies  <HiOutlineArrowRight style={{marginLeft:'auto'}} /></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Payments  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Supply chain and trade finance  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Capital markets  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Compliance  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Insurance  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item underline">
                <a className="nav-link" href="/">
                  How
                </a>
                <div className="dropdown-content">
                  <h6 className="fw-bold mb-3">How we do it</h6>
                  <div className="row">
                    <div className="col-md-4">
                  <p style={{fontSize:'9px'}}>Our solutions are built on the same patent-pending products and trusted networks we make available to our partners.</p>

                    </div>
                    <div className="col-md-8">
                      <div className="dropdown-list">
                        <ul>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Products  <HiOutlineArrowRight style={{marginLeft:'auto'}} /></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Networks  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Ecosystem  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item underline">
                <a className="nav-link" href="/">
                  Why
                </a>
                <div className="dropdown-content">
                  <h6 className="fw-bold mb-3">Who we serve</h6>
                  <div className="row">
                    <div className="col-md-4">
                  <p style={{fontSize:'9px'}}>We empower banks, asset managers and other financial institutions; enterprises, typically with international operations; and the technology partners and fintech developers who support them.</p>

                    </div>
                    <div className="col-md-8">
                      <div className="dropdown-list">
                        <ul>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Financial institutions  <HiOutlineArrowRight style={{marginLeft:'auto'}} /></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Enterprises  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Partners  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Developers  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item underline">
                <a className="nav-link" href="/">
                  About
                </a>
                <div className="dropdown-content">
                  <h6 className="fw-bold mb-3">Who we serve</h6>
                  <div className="row">
                    <div className="col-md-4">
                  <p style={{fontSize:'9px'}}>We empower banks, asset managers and other financial institutions; enterprises, typically with international operations; and the technology partners and fintech developers who support them.</p>

                    </div>
                    <div className="col-md-8">
                      <div className="dropdown-list">
                        <ul>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Financial institutions  <HiOutlineArrowRight style={{marginLeft:'auto'}} /></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Enterprises  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Partners  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Developers  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item underline">
                <a className="nav-link" href="/">
                  Sign In
                </a>
                <div className="dropdown-content">
                  <h6 className="fw-bold mb-3">Who we serve</h6>
                  <div className="row">
                    <div className="col-md-4">
                  <p style={{fontSize:'9px'}}>We empower banks, asset managers and other financial institutions; enterprises, typically with international operations; and the technology partners and fintech developers who support them.</p>

                    </div>
                    <div className="col-md-8">
                      <div className="dropdown-list">
                        <ul>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Financial institutions  <HiOutlineArrowRight style={{marginLeft:'auto'}} /></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Enterprises  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Partners  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Developers  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item underline">
                <a className="nav-link" href="/">
                  <AiOutlineSearch />
                </a>
                <div className="dropdown-content">
                  <h6 className="fw-bold mb-3">Who we serve</h6>
                  <div className="row">
                    <div className="col-md-4">
                  <p style={{fontSize:'9px'}}>We empower banks, asset managers and other financial institutions; enterprises, typically with international operations; and the technology partners and fintech developers who support them.</p>

                    </div>
                    <div className="col-md-8">
                      <div className="dropdown-list">
                        <ul>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Financial institutions  <HiOutlineArrowRight style={{marginLeft:'auto'}} /></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Enterprises  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Partners  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                          <li>
                            <a href="/" className="d-flex align-items-center">  Developers  <HiOutlineArrowRight style={{marginLeft:'auto'}}/></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
