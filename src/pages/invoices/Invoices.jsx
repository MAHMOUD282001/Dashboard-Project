import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import MainHeader from "../../components/MainHeader";

function Invoices() {
  let theme = useTheme();

  const rows = [
    {
      id: 1,
      name: "World",
      email: "World",
      age: "World",
      phone: "World",
      access: "Admin",
    },
    {
      id: 2,
      name: "World",
      email: "World",
      age: "World",
      phone: "World",
      access: "User",
    },
    {
      id: 3,
      name: "World",
      email: "World",
      age: "World",
      phone: "World",
      access: "Manager",
    },
    {
      id: 4,
      name: "World",
      email: "World",
      age: "World",
      phone: "World",
      access: "User",
    },
    {
      id: 5,
      name: "World",
      email: "World",
      age: "World",
      phone: "World",
      access: "Admin",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
              padding: "7px",
              width: "100px",
              textAlign: "center",
              borderRadius: "3px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {access === "Admin" ? (
              <AdminPanelSettingsOutlined
                fontSize="small"
                sx={{ color: "#fff" }}
              />
            ) : access === "Manager" ? (
              <SecurityOutlined fontSize="small" sx={{ color: "#fff" }} />
            ) : (
              <LockOpenOutlined fontSize="small" sx={{ color: "#fff" }} />
            )}

            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {access}{" "}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: "1450px", mx: "auto"}}>
        <MainHeader title={"الفواتير"} subTitle={"مرحبا بك فى صفحه الفواتير"}/>
        <DataGrid checkboxSelection rows={rows} columns={columns} sx={{mt: 3}}/>
      </Box>
    </>
  );
}

export default Invoices;
