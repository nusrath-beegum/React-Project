import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart(props) {
  const [cartItems, setCartItems] = useState([])
  const cartProducts = props.cartProd || [];

  const navigate = useNavigate()
  function loadCartList() {

    fetch("https://api.chec.io/v1/carts/cart_zkK6oLvJ8RlXn0", {
      method: 'GET',
      headers: {
        "X-Authorization": "pk_5681135456894b70393aebb5fd81dd9e4fe3c0517e15b",
        "Content-Type": "application/json",
        "body":
        '{"id":"prod_zkK6oLvJ8RlXn0","quantity":5}'
      },

    }).then((response) => {
    response.json().then((cart) => {
      setCartItems(cart.line_items || [])
    })
  }).catch((error) => {
    console.error('Error fetching cart Items', error);
  });
}

useEffect(() => {
  loadCartList()
}, [])

function combinedCartItems() {
  return [...cartItems, ...cartProducts];
}

return (
  <div>
    <div><h2>Shopping Cart</h2></div>
    <div>
      {combinedCartItems().map((c) => {
        return (

          <div>
            <div className="p-2">
              <hr />
              <div className="d-flex">
                <div className="m-2"><img src={c.image?.url} height={250} /></div>

                <div className="my-5">
                  <div className="m-2 p-2"><h3>{c.name}</h3></div>
                  <div className="m-2 p-2">₹<span className="fw-semibold fs-4 text-success">{c.price.formatted}</span></div>
            
                </div>

              </div>
            </div>
          </div>


        )
      })}
    </div>
    <hr />
    
    <div><button className="btn btn-secondary" onClick={() => {
      navigate(-1)
    }}>Go Back</button></div>
  </div>
);
}


export default Cart;