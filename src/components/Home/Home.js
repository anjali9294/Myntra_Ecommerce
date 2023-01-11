import React from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";
import Metadata from "../layout/Metadata.js";

const product = {
  name: "blue tshirt",
  images: [
    {
      url: "https://tse1.mm.bing.net/th?id=OIP.pe-Sjx5Bu-_z62RULHFKgwHaJ4&pid=Api&P=0",
    },
  ],
  price: "$30",
  _id: "anjali",
};

const Home = () => {
  return (
    <>
      <Metadata title="MYNTRA" />
      <div className="banner d-flex align-items-center justify-content-center flex-column text-center text-white">
        <p className="m-5">Welcome To Myntra</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </>
  );
};

export default Home;
