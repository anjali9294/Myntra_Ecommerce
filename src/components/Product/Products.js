import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import "./Products.css";

import { useEffect } from "react";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import { useState } from "react";

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const keyword = match.params.keyword;

  useEffect(() => {
    dispatch(getProduct(keyword, currentPage));
  }, [dispatch, keyword, currentPage]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          {resultPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Products;
