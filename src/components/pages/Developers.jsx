import React from "react";

const Developers = () => {
  return (
    <div className="developer-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="blockchain-text">
              <h1 className="fw-bold display-5">
                Developers <br />
                unleashed
              </h1>
              <p>
                Develop on Overledger without specialist
                <br />
                blockchain knowledge.
              </p>

              <button type="button" class="btn btn-outline-danger">
                find out more
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-blockchain">
              <img src="assests/developer.svg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
