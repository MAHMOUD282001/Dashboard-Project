import React from "react";
import style from "./ProductsList.module.css";
import Product from "../Product/Product";
import { Grid } from "@mui/material";
import MainHeader from "../MainHeader";
import { useTheme } from "@emotion/react";

function ProductsList({ products }) {
  
  let theme = useTheme()
  
  return (
    <>
      <MainHeader title={"منتجاتنا"} subTitle={"مرحبا بك فى منتجاتنا"} />
      <Grid container spacing={2} sx={{justifyContent: "center"}}>
        {products.map((product) => {
          let discountedPrice =
            product.price - product.price * (product.discountPercentage / 100);

          return (
            <Product
              key={product.id}
              product={{ ...product, discountedPrice }}
            />
          );
        })}
      </Grid>
    </>
  );
}

export default ProductsList;
