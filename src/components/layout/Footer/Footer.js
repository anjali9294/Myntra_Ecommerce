import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
  {/* Footer */}
  <footer className="text-center text-lg-start bg-dark text-muted " >
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container">
      {/* Left */}
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <a href="" className="me-4 link-secondary">
          <i className="fa fa-facebook-f" />
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fa fa-twitter" />
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fa fa-google" />
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fa fa-instagram" />
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fa fa-linkedin" />
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fa fa-github" />
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fa fa-gem me-3 text-secondary" />
              ANJISHOP
            </h6>
            <p>
            Anjishop is a premier online shopping website that offers a vast selection of high-quality products at affordable prices. From fashion apparel and accessories to electronics, home decor, and more, Anjishop has something for everyone. 
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-reset text-decoration-none">
                Laptop
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset text-decoration-none">
                Mobile
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset text-decoration-none">
                Cloth
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset text-decoration-none">
                Skincare
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" className="text-reset text-decoration-none">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset text-decoration-none">
                Settings
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset text-decoration-none">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset text-decoration-none">
                Help
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fa fa-home me-3 text-secondary" /> New York, NY
              10012, US
            </p>
            <p>
              <i className="fa fa-envelope me-3 text-secondary" />
              anjishop@gmail.com
            </p>
            <p>
              <i className="fa fa-phone me-3 text-secondary" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print me-3 text-secondary" /> + 01 234 567 89
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
    >
      © 2023 Copyright:
      <a className="text-reset fw-bold ms-2" href="https://anjishop.me/">
        anjishop.me
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>

  );
};

export default Footer;
