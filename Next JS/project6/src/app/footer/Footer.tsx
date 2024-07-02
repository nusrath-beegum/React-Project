import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="p-2 text-white" style={{ backgroundColor: "  #2c4152" }}>
      <div className="d-flex ps-5 ms-5 ">
        <div className=" p-2 mx-auhref ms-4 mt-1">
          <h4 style={{ color: "black" }}>About</h4>
          <div>
            <div>
              <Link className="text-white" href="/contact-us">
                Contact us
              </Link>
            </div>
            <div>
              <Link className="text-white" href="/about-us">
                About us
              </Link>
            </div>
            <div>
              <Link className="text-white" href="/careers">
                Careers
              </Link>
            </div>
            <div>
              <Link className="text-white" href="/specials">
                Specials
              </Link>
            </div>
          </div>
        </div>

        <div className=" p-2 mx-auhref ms-4">
          <h4 style={{ color: "black" }}>Help</h4>
          <div>
            <div>
              <Link className="text-white" href="/payment">
                Payment
              </Link>
            </div>
            <div>
              <Link className="text-white" href="/faq">
                FAQ
              </Link>
            </div>
            <div>
              <Link className="text-white" href="/returns">
                Returns
              </Link>
            </div>
            <div>
              <Link className="text-white" href="/shipping">
                Shipping
              </Link>
            </div>
          </div>
        </div>

        <div className=" p-2 mx-auhref ms-4">
          <h4 style={{ color: "black" }}>Information</h4>
          <div>
            <div>
              <Link className="text-white" href="/privacy">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link className="text-white" href="/terms">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className=" p-2 mx-auhref ms-4">
          <h4 style={{ color: "black" }}>Social</h4>
          <div>
            <div>
              <Link className="text-white" href="/facebook">
                Facebook
              </Link>
            </div>
            <div>
              <Link className="text-white" href="/youtube">
                Youtube
              </Link>
            </div>
            <div>
              <Link className="text-white" href="/twitter">
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <p>&copy; 2024 Your E-commerce Shrefre. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
