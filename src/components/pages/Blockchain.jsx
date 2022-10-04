import React from 'react'

const Blockchain = () => {
  return (
    <div className="Blockchain-section py-5">
        <div className="container">
            <div className="row pt-5">
                <div className="col-md-6">
                    <div className="img-blockchain">
                        <img src="assests/blockchain.PNG" className='img-fluid' alt="" data-aos="flip-left"/>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div className="blockchain-text">
                        <h1 className="fw-bold display-3" data-aos="fade-up-left">Unlocking the power of blockchain for everyone</h1>
                        <p  data-aos="zoom-in-left">We deliver interoperable ecosystems and real-world solutions that lower costs, enable new business, and mitigate risk.</p>

<button type="button" class="btn btn-outline-danger" data-aos="flip-left">Let's talk</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blockchain