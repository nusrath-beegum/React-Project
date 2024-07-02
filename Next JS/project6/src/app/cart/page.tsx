"use client";
import React, { useEffect, useState } from "react";
import { ProductService } from "../product/Product-Service";

function CartItems() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchCartProducts() {
      try {
        const cartProducts = await ProductService.getCartproducts();
        setProducts(cartProducts);
        console.log("Cart Products:", cartProducts);
      } catch (error) {
        console.error("Error fetching cart products:", error);
      }
    }
    fetchCartProducts();
  }, []);

  const handleRemoveProduct = async (prodId: any) => {
    try {
      await ProductService.removeProduct(prodId);
      setProducts(products.filter((product: any) => product.id !== prodId));
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  return (
    <div>
      <h2>Cart Items</h2>
      {products.length === 0 ? (
         <p>
         Your cart is currently empty. Why not{" "}
         <a className="text-success f-5" href="/product">browse our products</a> and add some items?
       </p>
      ) : (
        <div>
          {products.map((p: any) => {
            return (
              <div key={p.id}>
                <div className="p-2">
                  <hr />
                  <div className="d-flex">
                    <div className="m-2">
                      <img src={p.image?.url} height={250} alt={p.name} />
                    </div>

                    <div className="my-5">
                      <div className="m-2 p-2">
                        <h3>{p.name}</h3>
                      </div>
                      <div className="m-2 p-2">
                        ₹
                        <span className="fw-semibold fs-4 text-success">
                          {p.price.formatted}
                        </span>
                      </div>

                      <button
                        className="btn btn-danger m-3"
                        onClick={() => handleRemoveProduct(p.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CartItems;
