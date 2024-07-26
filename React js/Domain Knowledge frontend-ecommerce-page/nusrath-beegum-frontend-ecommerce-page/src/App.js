import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Navbar from "./components/navbar/Navbar";
import ProductDetail from "./components/productDetail/ProductDetail";
import Footer from "./components/footer/Footer";
import Mens from "./pages/mens/Mens";
import Womens from "./pages/womens/Womens";
import Kids from "./pages/kids/Kids";
import Cart from "./pages/cart/Cart";
import { useState } from "react";

function App() {
  const [cartProd, setCartProd] = useState([]);
  function addTocart(product) {
    setCartProd((prevCartProd) => [...prevCartProd, product]);
  }
  const [searchText, setSearchText] = useState("");
  function onSearchChange(text) {
    setSearchText(text);
  }
  return (
    <div>
      <Navbar onSearchChange={onSearchChange} />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/products/:productId"
          element={<ProductDetail addTocart={addTocart} />}
        />
        <Route path="/Mens" element={<Mens searchText={searchText} />} />
        <Route path="/Womens" element={<Womens searchText={searchText} />} />
        <Route path="/Kids" element={<Kids searchText={searchText} />} />
        <Route path="/cart" element={<Cart cartProd={cartProd} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
