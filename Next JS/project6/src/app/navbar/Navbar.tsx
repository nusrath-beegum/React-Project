import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/logo.png';
import cartIcon from "../../../public/cart.png"


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
        <div
          style={{ height: "100px", background: "violet" }}
          className="container-fluid  "
        >
          <Link href={'/'} className="navbar-brand">
            <Image src={logo} alt="logo" width={100} />{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href={'/'} className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/product"} className="nav-link active">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/about-us"} className="nav-link active">
                  About-us
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/contact-us"} className="nav-link active">
                  Contact-us
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div className="ms-5 ps-5 fs-5 mt-5">
             
            <Link href={"/cart"} className="nav-link active">  <Image src={cartIcon} alt="logo" height={45} />
   </Link>          
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
