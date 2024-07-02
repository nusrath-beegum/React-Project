import React from "react";
import { ProductService } from "../Product-Service";


export async function generateMetadata(props: any) {
  const productId = props.params.productId;
  var product;
  if (productId) {
    product = await ProductService.getProductById(productId);
    return {
      title: product.title,
    };
  }
}
export default async function productDetail(props: any) {
  const productId = props.params.productId;
  var product;
  if (productId) {
    product = await ProductService.getProductById(productId);
  }


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
            <div className="btn-group">
              <button type="button" className="btn btn-danger my-4">
                Quantity
              </button>
              <button
                type="button"
                className="btn btn-danger dropdown-toggle dropdown-toggle-split my-4"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
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
          <button className="btn btn-warning rounded-pill">Add to Cart</button>
          <button className="btn btn-warning rounded-pill my-3 px-4">
            Buy Now{" "}
          </button>
        </div>
      </div>
      <div>
        <button className="btn btn-success m-2">Continous shoping</button>
        <button className="btn btn-success m-2">Go back</button>
      </div>
    </>
  );
}
