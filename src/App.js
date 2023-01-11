import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import webFont from "webfontloader";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home.js";
import ProductDetails from "./components/Product/ProductDetails.js";

function App() {
  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />

        <Footer />
      </Router>
    </>
  );
}

export default App;
