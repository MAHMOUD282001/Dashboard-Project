import * as React from "react";
import Grid from "@mui/material/Grid";
import style from "./Product.module.css";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

function Product({ product }) {
  
  return (
    <Grid item xl={3} lg={4} md={6}>
      <Link
        key={product?.id}
        xl={3}
        lg={4}
        md={6}
      >
        <div className={`${style.productItem} bg-white`}>
          <div className={`${style.category}`}>{product?.category}</div>
          <span className={style.categoryArrow}></span>

          <div className={`${style.productImg}`}>
            <img src={product?.images[0]} alt={product?.title} />
          </div>

          <Box className={`${style.productItemInfo}`} sx={{pt: 1}}>
            <div className={`${style.brand}`}>
              <span>Brand: </span>
              <span>{product?.brand}</span>
            </div>

            <Box
              className={`${style.title}`}
              sx={{ textAlign: "center", py: 2 }}
            >
              {product?.title}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row-reverse",
                justifyContent: "center",
                gap: 4,
              }}
              className={`${style.price}`}
            >
              <span className={`${style.oldPrice}`}>
                ${product?.price.toFixed(2)}
              </span>

              <span className={`${style.newPrice}`}>
                ${product?.discountedPrice.toFixed(2)}
              </span>

              <span className={`${style.discount}`}>
                ({product?.discountPercentage}% Off)
              </span>
            </Box>
          </Box>
          <span className={style.last}></span>
        </div>
      </Link>
    </Grid>
  );
}

export default Product;
