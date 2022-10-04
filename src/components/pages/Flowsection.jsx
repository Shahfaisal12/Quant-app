import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

const Flowsection = () => {
  return (
    <div className="flowsection py-5">
      <div className="container">
        <div class="row">
          <div
            class="onhover col-md-3 col-sm-3 col-12 text-center"
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
          >
            <h6>Financial institutions</h6>
            <p className="mb-0">
              Banks, investment firms, and other financial institutions, are
              harnessing blockchain to exchange information and assets more
              securely and cost-effectively.
            </p>
            <CgArrowLongRight />
          </div>
          <div
            class="onhover col-md-3 col-sm-3 col-12 text-center"
            data-aos="fade-down"
            data-aos-anchor-placement="center-center"
          >
            <h6>Enterprises</h6>
            <p className="mb-0">
              Blockchain enables companies operating in multiple markets to
              exchange information and assets more securely and cost-effectively
              for uses as varied as cross-border payments, supply chain
              challenges, or raising capital.
            </p>
            <CgArrowLongRight />
          </div>
          <div
            class="onhover col-md-3 col-sm-3 col-12 text-center"
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
          >
            <h6>Partners</h6>
            <p className="mb-0">
              Whether you’re a platform provider, an independent software
              vendor, or a technology consultant, chances are your clients are
              drawn to the benefits blockchain promises but daunted at the
              complexity and specialist knowledge required to realise them.
              We’re here to help.
            </p>
            <CgArrowLongRight />
          </div>
          <div
            class="onhover col-md-3 col-sm-3 col-12 text-center"
            data-aos="fade-down"
            data-aos-anchor-placement="center-center"
          >
            <h6>Developers</h6>
            <p className="mb-0">
              Are you one of the few developers in the world who understands all
              the complexities of blockchain? Don’t worry. With Quant, you don’t
              need to be a distributed ledger technology expert to build
              game-changing blockchain-agnostic applications.
            </p>
            <CgArrowLongRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flowsection;
