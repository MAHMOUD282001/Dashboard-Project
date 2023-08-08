import React, { useEffect } from "react";
import { STATUS } from "../../utils/status";
import {
  getAllProducts,
  getAllProductsStatus,
} from "../../store/productsSlice";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import ProductsList from "../../components/ProductsList/ProductsList";

function Products() {
  let products = useSelector(getAllProducts);

  let productsStatus = useSelector(getAllProductsStatus);

  return (
    <>
      {productsStatus === STATUS.LOADING ? (
        <Loader />
      ) : (
        <ProductsList products={products} />
      )}
    </>
  );
}

export default Products;
