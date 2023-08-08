import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import Statistics from "./Statistics";
import Revenue from "./Revenue";
import MainHeader from "../../components/MainHeader";
import { useEffect } from "react";
import { fetchAsyncProducts } from "../../store/productsSlice";
import { useDispatch } from "react-redux";

function Dashboard() {
  
  let dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchAsyncProducts(50));
  }, []);
  
  return (
    <div>
      <MainHeader
        title={"وحده التحكم"}
        subTitle={"اهلا بك فى وحده التحكم الخاصه بك"}
      />

      <Statistics />
      <Revenue />
    </div>
  );
}

export default Dashboard;
