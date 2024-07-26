import React from "react";
import Commerce from "@chec/commerce.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Womens = (props) => {
  const [productList, setProductList] = useState([]);
  var commerce = new Commerce(
    "pk_5681135456894b70393aebb5fd81dd9e4fe3c0517e15b"
  );
  function LoadProductList() {
    commerce.products
      .list({ category_slug: ["Womens"] })
      .then((response) => {
        console.log("Womens:", response.data);
        setProductList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching productList:", error);
      });
  }
  useEffect(() => {
    LoadProductList();
  }, []);
  var searchText = props.searchText;
  var filterProducts = productList.filter((p) => {
    return p.name.toLowerCase().includes(searchText);
  });
  return (
    <div>
      <div className="d-flex flex-wrap p-5">
        {filterProducts.map((productList) => (
          <div
            className="card text-center m-5"
            style={{ height: "450px", width: "300px" }}
          >
            {" "}
            <div style={{ backgroundColor: "beige" }}>
              <Link
                className="link-info link-underline-light fw-bold"
                to={"/products/" + productList.id}
              >
                {" "}
                <img src={productList.image.url} height={300} width={200} />
              </Link>
            </div>
            <div>
              <Link
                className="link-info link-underline-light fw-bold"
                to={"/products/" + productList.id}
              >
                {<h5>{productList.name}</h5>}
              </Link>
            </div>
            <div>
              <span className="fw-medium fs-5">
                {productList.price.formatted_with_symbol}
              </span>
              <br />
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Womens;
