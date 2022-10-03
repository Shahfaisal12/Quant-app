import React from "react";
import {CgArrowLongRight} from 'react-icons/cg'

const Explorefeature = () => {
  return (
    <div className="explorefeature-sec">
      <div className="container">
        <div className="row">
          <div className="heading text-center">
            <h1 className="fw-bold fs-1">Explore the future</h1>
            <p>
              Much of the financial world’s digital future
              <br /> will be built on blockchain. Find out why.
            </p>
          </div>
          <div className="img-city py-5 px-0">
            <div className="card-ara" style={{float:'right'}}>
              <div className="card mt-2 mt-md-0" style={{ width: "18rem" }}>
                <div className="card-body">
                <p className="card-text"><small className="text-danger">News</small></p>
                <p className="card-text"><small className="text-muted">29 September 2022</small></p>
                  <h5 className="card-title fw-bold fs-6">Martin Hargreaves on the benefits of CBDCs for consumers</h5>
                  <div className="bag"><span className="badge">CBDC</span><span className="badge">CITYAM</span><span className="badge">ENTERPRISES</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-md-3">
          <div className="card mt-2 mt-md-0">
                <div className="card-body">
                <p className="card-text"><small className="text-danger">News</small></p>
                <p className="card-text"><small className="text-muted">29 September 2022</small></p>
                  <h5 className="card-title fw-bold fs-6">Gilbert Verdian explains The Merge</h5>
                  <div className="bag"><span className="badge">CBDC</span><span className="badge">CITYAM</span><span className="badge">ENTERPRISES</span></div>
                </div>
              </div>
          </div>
          <div className="col-md-3">
          <div className="card mt-2 mt-md-0">
                <div className="card-body">
                <p className="card-text"><small class="text-danger">News</small></p>
                <p className="card-text"><small class="text-muted">29 September 2022</small></p>
                  <h5 className="card-title fw-bold fs-6">The multi-chain future: sidechains, layer 2s and The Merge</h5>
                  <div className="bag"><span class="badge">CBDC</span><span class="badge">CITYAM</span><span class="badge">ENTERPRISES</span></div>
                </div>
              </div>
          </div>
          <div className="col-md-3">
          <div className="card mt-2 mt-md-0">
                <div className="card-body">
                <p className="card-text"><small className="text-danger">News</small></p>
                <p className="card-text"><small className="text-muted">29 September 2022</small></p>
                  <h5 className="card-title fw-bold fs-6">Overledger 2.2.14 is an engineering release  </h5>
                  <div className="bag"><span className="badge">CBDC</span><span className="badge">CITYAM</span><span className="badge">ENTERPRISES</span></div>
                </div>
              </div>
          </div>
          <div className="col-md-3">
          <div className="card mt-2 mt-md-0">
                <div className="card-body">
                <p className="card-text"><small className="text-danger">News</small></p>
                <p className="card-text"><small className="text-muted">29 September 2022</small></p>
                  <h5 className="card-title fw-bold fs-6">Unlocking the full potential of NFTs with QRC-721</h5>
                  <div className="bag"><span className="badge">CBDC</span><span className="badge">CITYAM</span><span className="badge">ENTERPRISES</span></div>
                </div>
              </div>
          </div>
          <div className="">
            <p style={{float:'right'}}>More <CgArrowLongRight /></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorefeature;
