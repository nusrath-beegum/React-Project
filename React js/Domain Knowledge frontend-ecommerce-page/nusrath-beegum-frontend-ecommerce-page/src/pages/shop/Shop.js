import React from "react";
import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/banner2.jpg";
import Banner3 from "../../assets/images/banner3.jpg";
import Banner4 from "../../assets/images/banner4.jpg";
import Banner5 from "../../assets/images/banner5.jpg";
import Banner6 from "../../assets/images/banner6.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = (props) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const LoadProductList = async () => {
      fetch("https://api.chec.io/v1/products?limit=30", {
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
            setProductList(data.data);
          });
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    };
    LoadProductList();
  }, []);
  return (
    <div className="bg-secondary-subtle">
      <div
        id="carouselExampleRide"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Banner1}
              height={400}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={Banner2}
              height={400}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={Banner3}
              height={400}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <hr />
      <h1 className="text-center bg-warning">Crazy Deals</h1>
      <div
        id="carouselExampleRide"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Banner4}
              height={400}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={Banner5}
              height={400}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={Banner6}
              height={400}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Shop;
