import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetail = (props) => {
  const params = useParams();
  const prodId = params.productId;
  const [product, setProduct] = useState({});
  useEffect(() => {
    const LoadProductById = async () => {
      fetch("https://api.chec.io/v1/products/" + prodId, {
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
            setProduct(data);
          });
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    };
    LoadProductById();
  }, [prodId]);
  function onADCclick() {
    props.addTocart(product)
}
  const navigate = useNavigate();
  return (
    <>
      <div className="border rounded d-flex m-2 border rounded">
        <div className="w-50 m-2 p-2">
          <img
            src={product.image?.url}
            height={400}
            style={{ maxWidth: "300px", marginLeft: "70px" }}
          ></img>
        </div>
        <div style={{ marginRight: "40px" }} className="w-50  ">
          <div className="text-dark">
            <h2>{product.name}</h2>
          </div>{" "}
          <hr />
          <div className="text-danger-emphasis">
            <h1>Category : {product.category}</h1>
          </div>{" "}
          <hr />
          <div>
            <h5>{product.description}</h5>
          </div>{" "}
          <hr />
          <div>
            <span className="fw-semibold fs-3 text-danger ms-5 ps-5">
              Price : {product.price?.formatted_with_symbol}
            </span>
          </div>
        </div>
        <div
          className="m-3 text-center border rounded"
          style={{ width: "250px" }}
        >
          <div>
            <span className="fw-semibold fs-3 text-success">
              {product.price?.formatted_with_symbol}
            </span>
            <br />
            FREE Delivery
            <br />
            In stock
            <br />
            <div class="btn-group">
              <button type="button" className="btn btn-danger my-4">
                Quantity
              </button>
              <button
                type="button"
                className="btn btn-danger dropdown-toggle dropdown-toggle-split my-4"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span class="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    3
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    4
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    5
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    6
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    7
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    8
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    9
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button className="btn btn-warning rounded-pill" onClick={onADCclick}>Add to Cart</button>
          <button className="btn btn-warning rounded-pill my-3 px-4">
            Buy Now{" "}
          </button>
        </div>
      </div>
      <div>
        <button className="btn btn-success m-2"onClick={() => {
          navigate('/')
        }} >Continous shoping</button>
        <button className="btn btn-success m-2" onClick={() => {
          navigate(-1)}}>Go back</button>
      </div>
    </>
  );
};

export default ProductDetail;
