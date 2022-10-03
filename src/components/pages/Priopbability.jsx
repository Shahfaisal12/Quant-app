import React from "react";

const Priopbability = () => {
  return (
    <div className="propability-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-blockchain">
              <img src="assests/box.svg" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="blockchain-text">
              <h1 className="fw-bold display-5">
                Interoperability <br />
                solved
              </h1>
              <p>
                Reduce costs and access wider markets by deploying any app on
                any blockchain. That’s the power of our single, standard,
                multi-chain API.
              </p>

              <button type="button" class="btn btn-outline-danger">
                find out more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Priopbability;
