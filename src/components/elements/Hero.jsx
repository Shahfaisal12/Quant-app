import React from "react";
// import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-section pt-5">
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-12 order-2 order-sm-1">
          <div className="hero-text"  data-aos="fade-down">
            <h1 className="fw-bold display-1">
              The future of finance. <span className="text-danger">Today.</span>
            </h1>
            <button type="button" className="btn btn-outline-danger">
              Get Started
            </button>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-12 order-1 order-sm-2">
          <div className="video-sec mb-4 mb-md-0">
            <video
              src="https://player.vimeo.com/progressive_redirect/playback/704523096/rendition/720p/file.mp4?loc=external&oauth2_token_id=1621192039&signature=5f0f60cc8292a19c862593995b6633c4055eaf9aa0189d092b2e2d4a4194abda"
              loop
              autoPlay
              muted
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
