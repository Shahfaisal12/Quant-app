import React from "react";
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import {HiArrowNarrowRight} from 'react-icons/hi'

const Menu = () => {
  return (
    <div className="menu-nav">
      <Tabs>
        {/* <TabPanel>
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
        </TabPanel> */}
        <TabList>
          <div class="d-flex flex-wrap justify-content-around py-5 bg-white">
            <Tab class="p-2"> All</Tab>
            <Tab class="p-2">News</Tab>
            <Tab class="p-2">Events</Tab>
            <Tab class="p-2">Perspectives</Tab>
            <Tab class="p-2">Research</Tab>
            <Tab class="p-2">USE CASES</Tab>
          </div>
        </TabList>

        <TabPanel>
          <div className="tab-content py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="all-bage">
                    <div className="h6">Topics to explore</div>
                    <div className="bag" style={{lineHeight:'40px'}}>
                      <span className="badge">CBDC</span> <br />
                      <span className="badge">COMPANY UPDATE</span>
                      <br />
                      <span className="badge">CYBERSECURITY</span>
                      <br />
                      <span className="badge">IN THE PRESS</span>
                      <br />
                      <span className="badge">PRODUCT RELEASE</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">News</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                29 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                              Unlocking the full potential of NFTs with QRC-721
                            </h5>
                            <div className="bag">
                              <span className="badge">CBDC</span>
                              <span className="badge">CITYAM</span>
                              <span className="badge">ENTERPRISES</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="	https://quant.network/assets/uploads/2022/09/CITY-a.m_website.png"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">News</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                21 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Gilbert Verdian explains The Merge
                            </h5>
                            <div className="bag">
                              <span className="badge">BLOCKCHAIN</span>
                              <span className="badge">DEVELOPERS</span>
                              <span className="badge">ENTERPRISES</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="	https://quant.network/assets/uploads/2022/09/2.2.14.Heros-2.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">News</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                22 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Overledger 2.2.14 is an engineering release  
                            </h5>
                            <div className="bag">
                              <span className="badge">DEVELOPERS</span>
                              <span className="badge">OVERIDES</span>
                              <span className="badge">PRODUCT RELEASE</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="https://quant.network/assets/uploads/2022/08/IMG_9470.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">News</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                23 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Overledger 2.2.11 connects to Hyperledger Fabric  
                            </h5>
                            <div className="bag">
                              <span className="badge">DEVELOPERS</span>
                              <span className="badge">OVERIDES</span>
                              <span className="badge">PRODUCT RELEASE</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="	https://quant.network/assets/uploads/2022/08/Blockchain-developer-2.2.12.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">News</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                24 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Overledger 2.2.12 makes NFTs easy  
                            </h5>
                            <div className="bag">
                              <span className="badge">DEVELOPERS</span>
                              <span className="badge">OVERIDES</span>
                              <span className="badge">PRODUCT RELEASE</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="	https://quant.network/assets/uploads/2022/08/NFT-QRC-721.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="all-bage">
                    <div className="h6">Topics to explore</div>
                    <div className="bag" style={{lineHeight:'40px'}}>
                      <span className="badge">CBDC</span> <br />
                      <span className="badge">COMPANY UPDATE</span>
                      <br />
                      <span className="badge">CYBERSECURITY</span>
                      <br />
                      <span className="badge">IN THE PRESS</span>
                      <br />
                      <span className="badge">PRODUCT RELEASE</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">News</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                29 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Gilbert Verdian explains The Merge
                            </h5>
                            <div className="bag">
                              <span className="badge">BLOCKCHAIN</span>
                              <span className="badge">DEVELOPERS</span>
                              <span className="badge">ENTERPRISES</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="https://quant.network/assets/uploads/2022/09/independent-merge-web2.png"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">News</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                25 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Overledger 2.2.14 is an engineering release  
                            </h5>
                            <div className="bag">
                              <span className="badge">DEVELOPERS</span>
                              <span className="badge">OVERRIDE</span>
                              <span className="badge">PRODUCTS RELEASE</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="	https://quant.network/assets/uploads/2022/09/2.2.14.Heros-2.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">News</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                26 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Overledger 2.2.13 is a maintenance release
                            </h5>
                            <div className="bag">
                              <span className="badge">DEVELOPERS</span>
                              <span className="badge">OVERRIDE</span>
                              <span className="badge">PRODUCTS RELEASE</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="	https://quant.network/assets/uploads/2022/08/IMG_9470.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">News</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                28 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Overledger 2.2.12 makes NFTs easy  
                            </h5>
                            <div className="bag">
                              <span className="badge">DEVELOPERS</span>
                              <span className="badge">OVERRIDE</span>
                              <span className="badge">PRODUCTS RELEASE</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="	https://quant.network/assets/uploads/2022/08/Blockchain-developer-2.2.12.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">News</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                29 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Overledger 2.2.11 connects to Hyperledger Fabric  
                            </h5>
                            <div className="bag">
                              <span className="badge">DEVELOPERS</span>
                              <span className="badge">OVERRIDE</span>
                              <span className="badge">PRODUCTS RELEASE</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="	https://quant.network/assets/uploads/2022/07/People-7.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="all-bage">
                    <div className="h6">Topics to explore</div>
                    <div className="bag" style={{lineHeight:'40px'}}>
                      <span className="badge">CBDC</span> <br />
                      <span className="badge">COMPANY UPDATE</span>
                      <br />
                      <span className="badge">CYBERSECURITY</span>
                      <br />
                      <span className="badge">IN THE PRESS</span>
                      <br />
                      <span className="badge">PRODUCT RELEASE</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">News</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                29 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            The multi-chain future: sidechains, layer 2s and The Merge
                            </h5>
                            <div className="bag">
                              <span className="badge">ARCHATECHERS</span>
                              <span className="badge">ASSOCIATES</span>
                              <span className="badge">DEVELOPERS</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="	https://quant.network/assets/uploads/2022/09/ITSA-Luke-Riley-2.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">News</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                25 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Digital money: Fungibility and interoperability  
                            </h5>
                            <div className="bag">
                              <span className="badge">CBDC</span>
                              <span className="badge">DIGITAL ASSETS</span>
                              <span className="badge">DIGITAL CURRENCES</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="https://quant.network/assets/uploads/2022/07/Digital-money-webinar-event_L.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">News</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                26 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Is it the destiny of blockchain to become the open infrastructure?
                            </h5>
                            <div className="bag">
                              <span className="badge">ASSOCIATION</span>
                              <span className="badge">DONIMIC HOBSON </span>
                              <span className="badge">ENTERPRISES</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="https://quant.network/assets/uploads/2022/06/Webinar-discussion-1.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">News</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                28 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Are central banks thinking radically enough about CBDCs?  
                            </h5>
                            <div className="bag">
                              <span className="badge">ASSOCIATES</span>
                              <span className="badge">CBDC</span>
                              <span className="badge">EVENTS</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="https://quant.network/assets/uploads/2022/06/cbdc-webinar-discussion.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">News</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                29 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            FT Digital Assets Summit: CBDC leader’s panel  
                            </h5>
                            <div className="bag">
                              <span className="badge">CBDC</span>
                              <span className="badge">DIGITAL CURRENCIES</span>
                              <span className="badge">PRUD</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="https://quant.network/assets/uploads/2022/05/FT-live-Webinar-discussion.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="all-bage">
                    <div className="h6">Topics to explore</div>
                    <div className="bag" style={{lineHeight:'40px'}}>
                      <span className="badge">CBDC</span> <br />
                      <span className="badge">COMPANY UPDATE</span>
                      <br />
                      <span className="badge">CYBERSECURITY</span>
                      <br />
                      <span className="badge">IN THE PRESS</span>
                      <br />
                      <span className="badge">PRODUCT RELEASE</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">Perspectives</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                29 October 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            A sound regulatory approach for digital assets
                            </h5>
                            <div className="bag">
                              <span className="badge">DIGITAL ASSESTS</span>
                              <span className="badge">ENTERPRISES</span>
                              <span className="badge">FINANCIAL INSTITUTION</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="https://quant.network/assets/uploads/2022/08/Stablecoin-visual-3.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">Perspectives</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                25 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Interoperability: the key to creating value in the metaverse
                            </h5>
                            <div className="bag">
                              <span className="badge">ENTERPRISES</span>
                              <span className="badge">FINANCIAL INSTITUTON</span>
                              <span className="badge">GILBERT WARDIAN</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="https://quant.network/assets/uploads/2022/07/The-right-ecosystem-for-digitaql-currencies.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">Perspectives</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                26 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Are your assets fit for the digital age?
                            </h5>
                            <div className="bag">
                              <span className="badge">DIGITAL ASSETS</span>
                              <span className="badge">IN THE PRESS </span>
                              <span className="badge">Raconteur</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="https://quant.network/assets/uploads/2022/07/Quant_FOF.png"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">Perspectives</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                28 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Overledger under the hood   
                            </h5>
                            <div className="bag">
                              <span className="badge">DEVELOPERS</span>
                              <span className="badge">LIFE AT QUANT</span>
                              <span className="badge">OVERLEDGER</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="https://quant.network/assets/uploads/2022/05/Overledger-Under-the-hood.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">Perspectives</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                29 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            The case for commercial stablecoins  
                            </h5>
                            <div className="bag">
                              <span className="badge">Commercial stablecoins</span>
                              <span className="badge">Digital currencies</span>
                              <span className="badge">Enterprises</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="https://quant.network/assets/uploads/2022/05/Overledger-Under-the-hood.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="all-bage">
                    <div className="h6">Topics to explore</div>
                    <div className="bag" style={{lineHeight:'40px'}}>
                      <span className="badge">CBDC</span> <br />
                      <span className="badge">COMPANY UPDATE</span>
                      <br />
                      <span className="badge">CYBERSECURITY</span>
                      <br />
                      <span className="badge">IN THE PRESS</span>
                      <br />
                      <span className="badge">PRODUCT RELEASE</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">Perspectives</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                29 October 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            A sound regulatory approach for digital assets
                            </h5>
                            <div className="bag">
                              <span className="badge">DIGITAL ASSESTS</span>
                              <span className="badge">ENTERPRISES</span>
                              <span className="badge">FINANCIAL INSTITUTION</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="https://quant.network/assets/uploads/2022/04/Blockchain-101-Hero-colour.jpeg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">Perspectives</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                25 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Interoperability: the key to creating value in the metaverse
                            </h5>
                            <div className="bag">
                              <span className="badge">ENTERPRISES</span>
                              <span className="badge">FINANCIAL INSTITUTON</span>
                              <span className="badge">GILBERT WARDIAN</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="https://quant.network/assets/uploads/2021/11/CBDC-.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">Perspectives</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                26 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Are your assets fit for the digital age?
                            </h5>
                            <div className="bag">
                              <span className="badge">DIGITAL ASSETS</span>
                              <span className="badge">IN THE PRESS </span>
                              <span className="badge">Raconteur</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="https://quant.network/assets/uploads/2021/11/DLT-interoperability_sm.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">Perspectives</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                28 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            Overledger under the hood   
                            </h5>
                            <div className="bag">
                              <span className="badge">DEVELOPERS</span>
                              <span className="badge">LIFE AT QUANT</span>
                              <span className="badge">OVERLEDGER</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="https://quant.network/assets/uploads/2022/05/Overledger-Under-the-hood.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-card">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-danger">Perspectives</small>
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                29 September 2022
                              </small>
                            </p>
                            <h5 className="card-title fw-bold fs-6">
                            The case for commercial stablecoins  
                            </h5>
                            <div className="bag">
                              <span className="badge">Commercial stablecoins</span>
                              <span className="badge">Digital currencies</span>
                              <span className="badge">Enterprises</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="https://quant.network/assets/uploads/2021/04/The-n…-three-years.ryoji-iwata-a-qsFZimp1M-unsplash.jpg"
                            className="img-fluid h-100"
                            alt="cardimage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="all-bage">
                    <div className="h6">Topics to explore</div>
                    <div className="bag" style={{lineHeight:'40px'}}>
                      <span className="badge">CBDC</span> <br />
                      <span className="badge">COMPANY UPDATE</span>
                      <br />
                      <span className="badge">CYBERSECURITY</span>
                      <br />
                      <span className="badge">IN THE PRESS</span>
                      <br />
                      <span className="badge">PRODUCT RELEASE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Menu;
