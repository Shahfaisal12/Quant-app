import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Menu from "./Menu";

const Why = () => {
  return (
    <>
    <div className="why-section pt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="hero-text text-center mb-4" data-aos="fade-down">
              <h1 className="fw-bold mb-4">Explore the future</h1>
              <p>
                Much of the financial world’s digital future <br /> will be
                built on blockchain. Here’s why.
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="card p-3 mt-md-0" style={{ width: "25rem" }}>
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-6">
                    Subscribe and be the first to know
                  </h5>
                  <p>
                    By submitting your email address, you agree to receive
                    occasional marketing messages from Quant, from which you can
                    unsubscribe at any time. For more information please see our{" "}
                    <a href="/">privacy policy</a>.
                  </p>
                  <div class="input-group position-relative">
                    <input
                      class="form-control rounded-pill shadow-none"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <span
                      class="input-group-append position-absolute"
                      style={{ zIndex: "10", right: "0" }}
                    >
                      <a className="btn fw-bold" href="/">
                        <HiArrowNarrowRight />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pr-0">
            <div className="img-digital-asserts py-5 px-0 position-relative">
              <div className="img-digital">
                <img
                  src="https://quant.network/assets/uploads/2022/09/Sibos-guide-mockup-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="card-ara position-absolute">
                <div className="card mt-2 mt-md-0" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <p className="card-text">
                      <small className="text-danger">News</small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">29 September 2022</small>
                    </p>
                    <h5 className="card-title fw-bold fs-6">
                      Martin Hargreaves on the benefits of CBDCs for consumers
                    </h5>
                    <div className="bag">
                      <span className="badge">CBDC</span>
                      <span className="badge">CITYAM</span>
                      <span className="badge">ENTERPRISES</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Menu />
    </>

  );
};

export default Why;
