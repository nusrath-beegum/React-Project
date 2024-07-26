import React from "react";
import Shoplogo from "../../assets/images/download.png";
import cartIcon from "../../assets/images/cart.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";


const Navbar = (props) => {
  function onSearchChange($e) {
    props.onSearchChange($e.target.value);
  }
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const LoadCategoryList = async () => {
      fetch("https://api.chec.io/v1/categories", {
        method: "GET",
        headers: {
          "X-Authorization": "pk_5681135456894b70393aebb5fd81dd9e4fe3c0517e15b",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          response.json().then((data) => {
            console.log(data);
            setCategoryList(data.data);
          });
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    };
    LoadCategoryList();
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light border border-danger ">
        <div className="container-fluid mx-4 ">
          <div className="pe-5 me-5">
          <NavLink className="navbar-brand" to={'/'}> <img src={Shoplogo} width={150}></img></NavLink>
          </div>
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
              {categoryList.map((category) => (
                <li key={category.id}>
                  <NavLink
                    to={`/${category.slug}`}
                    className="text-black text-decoration-none fw-5 fs-5 pb-1 m-2"
                  >
                    {category.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="me-5 mt-5">
              <form role="search">
                <input
                  className="form-control px-5 py-2 ms-1"
                  type="search"
                  onChange={onSearchChange}
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
            <div className="ms-5 ps-5 fs-5 mt-5">
            <NavLink to={'/Cart'} className="nav-link active border border-dark rounded">  <img src={cartIcon} height={45} />
            </NavLink>  
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
