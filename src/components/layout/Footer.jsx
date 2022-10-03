import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";

import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer-section pt-5">
        <div className="container">
          <div className="row">
            <div className="footer-nav pt-0 pt-md-3 pb-5">
              <ul>
                <li className="d-flex flex-wrap justify-content-between">
                  <div className="ourservice mt-3 mt-md-0">
                    <ul>
                    <div className="headering">
                      <h6>WHO WE SERVE</h6>
                    </div>
                      <li>Financial institutions</li>
                      <li>Enterprises</li>
                      <li>Partners</li>
                      <li>Developers</li>
                    </ul>
                  </div>
                  <div className="what-we-do mt-3 mt-md-0">
                    <ul>
                    <div className="headering">
                      <h6>WHAT WE DO</h6>
                    </div>
                      <li>Digital currencies</li>
                      <li>Payments</li>
                      <li>Supply chain and trade finance</li>
                      <li>Capital markets</li>
                      <li>Compliance</li>
                      <li>Insurance</li>
                    </ul>
                  </div>
                  <div className="how-we-do mt-3 mt-md-0">
                    <ul>
                    <div className="headering">
                      <h6>HOW WE DO IT</h6>
                    </div>
                      <li>Products</li>
                      <li>- Overledger Integrate</li>
                      <li>- Overledger Tokenise</li>
                      <li>Networks</li>
                      <li>Ecosystem</li>
                      <li>- Developer programme</li>
                      <li>- Partners</li>
                      <li>- Associations</li>
                    </ul>
                  </div>
                  <div className="matter mt-3 mt-md-0">
                    <ul>
                    <div className="headering">
                      <h6>WHY IT MATTERS</h6>
                    </div>
                      <li>All</li>
                      <li>News</li>
                      <li>Events</li>
                      <li>Perspectives</li>
                      <li>Research</li>
                      <li>Use cases</li>
                    </ul>
                  </div>
                  <div className="about mt-3 mt-md-0">
                    <ul>
                    <div className="headering">
                      <h6>ABOUT US</h6>
                    </div>
                      <li>Mission and values</li>
                      <li>Leadership</li>
                      <li>Careers</li>
                      <li>Media centre</li>
                      <li>Contact</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
         <div className="footer-section-below pt-5" >
         <div className="row">
            <div className="col-md-7">
              <div className="footer-logo">
                <img
                  src="assests/quant-logo.svg"
                  className="img-fluid"
                  style={{ width: "110px" }}
                  alt="logo"
                />
                <p className="mt-3">
                  © 2022 Quant Network Limited. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div class="footer-menu d-flex d-flex justify-content-between mb-3">
                <div class="p-2">
                  <a href="/" className="fw-bold">
                    Privacy policy
                  </a>
                </div>
                <div class="p-2">
                  <a href="/" className="fw-bold">
                    Terms of use
                  </a>
                </div>
                <div class="p-2">
                  <a href="/" className="">
                    <AiFillTwitterCircle className="fs-4" />
                  </a>{" "}
                  <a href="/" className="fs-4">
                    <BsLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
