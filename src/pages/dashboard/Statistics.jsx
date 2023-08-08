import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@emotion/react";
import { PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";

let data1 = [
  {
    id: "sass",
    label: "sass",
    value: 477,
    color: "hsl(340, 70%, 50%)",
  },
  {
    id: "php",
    label: "php",
    value: 278,
    color: "hsl(316, 70%, 50%)",
  },
];

let data2 = [
  {
    id: "sass",
    label: "sass",
    value: 477,
    color: "hsl(340, 70%, 50%)",
  },
  {
    id: "php",
    label: "php",
    value: 278,
    color: "hsl(316, 70%, 50%)",
  },
];

let data3 = [
  {
    id: "sass",
    label: "sass",
    value: 477,
    color: "hsl(340, 70%, 50%)",
  },
  {
    id: "php",
    label: "php",
    value: 278,
    color: "hsl(316, 70%, 50%)",
  },
];

let data4 = [
  {
    id: "sass",
    label: "sass",
    value: 477,
    color: "hsl(340, 70%, 50%)",
  },
  {
    id: "php",
    label: "php",
    value: 278,
    color: "hsl(316, 70%, 50%)",
  },
];

function Statistics() {
  let theme = useTheme();

  return (
    <Stack
      direction={"row"}
      sx={{
        flexWrap: "wrap",
        gap: 2,
        mt: 2,
        justifyContent: { xs: "center", xl: "space-between" },
      }}
    >
      <Card
        icon={
          <EmailIcon
            sx={{ fontSize: 30, color: theme.palette.secondary.main }}
          />
        }
        title={"12000"}
        subtitle={"Sub Title"}
        increase={"+14%"}
        data={data1}
        scheme={"category10"}
      />
      <Card
        icon={
          <PointOfSale
            sx={{ fontSize: 30, color: theme.palette.secondary.main }}
          />
        }
        title={"10000"}
        subtitle={"Sub Title"}
        increase={"+7%"}
        data={data2}
        scheme={"accent"}
      />

      <Card
        icon={
          <PersonAdd
            sx={{ fontSize: 30, color: theme.palette.secondary.main }}
          />
        }
        title={"20000"}
        subtitle={"Sub Title"}
        increase={"+3%"}
        data={data3}
        scheme={"dark2"}
      />

      <Card
        icon={
          <Traffic sx={{ fontSize: 30, color: theme.palette.secondary.main }} />
        }
        title={"5000"}
        subtitle={"Sub Title"}
        increase={"+1%"}
        data={data4}
        scheme={"nivo"}
      />
    </Stack>
  );
}

export default Statistics;
