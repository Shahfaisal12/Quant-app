import React from "react";

const Empowered = () => {
  return (
    <div className="empowered vh-100 d-flex align-items-center">
      <div className="container">
        <div className="emp-text text-center text-white">
          <h1 className="fw-bold display-3 text-white">
            An empowered,<br /> interconnected world
          </h1>
          <p className="fw-bold fs-5">
            We serve banks, asset managers and other financial institutions;<br />
            enterprises; and the technology partners and<br /> fintech developers who
            support them.
          </p>
          <button type="button" class="btn btn-outline-danger">
            Let's talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Empowered;
