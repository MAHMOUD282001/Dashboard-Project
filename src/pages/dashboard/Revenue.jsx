import { useTheme } from "@emotion/react";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Line from "../lineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";

function Revenue() {
  let theme = useTheme();

  let transactions = [
    {
      title: "Test",
      subTitle: "Test",
      date: "Test",
      num: "5551",
    },
    {
      title: "Test",
      subTitle: "Test",
      date: "Test",
      num: "5552",
    },
    {
      title: "Test",
      subTitle: "Test",
      date: "Test",
      num: "5553",
    },
    {
      title: "Test",
      subTitle: "Test",
      date: "Test",
      num: "5554",
    },
  ];

  return (
    <Stack sx={{ mt: 2, gap: 2 }} direction={"row"} flexWrap={"wrap"}>
      <Paper
        sx={{
          minWidth: 210,
          flexGrow: 1,
        }}
      >
        <Line isDashboard={true} />
      </Paper>
    </Stack>
  );
}

export default Revenue;
