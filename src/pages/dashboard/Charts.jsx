import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import Line from "../lineChart/Line";
import Pie from "../pieChart/Pie";
import Bar from "../barChart/Bar";
import Geography from "../geographyChart/Geography";

function Charts() {
  let theme = useTheme();

  return (
    <Grid container spacing={2} mt={2}>
      <Grid item xs={12} sm={12} md={6} xl={4}>
        <Paper sx={{ flexGrow: 1, height: 420 }}>
          <Typography
            color={theme.palette.secondary.main}
            sx={{ padding: "30px 30px 0 30px" }}
            variant="h6"
            fontWeight={"bold"}
          >
            Campaign
          </Typography>

          <Pie isDashboard={true} />

          <Typography
            align="center"
            variant="h6"
            fontWeight={"bold"}
          >
            48000 Revenue Generated
          </Typography>

          <Typography align="center" variant="h6" px={0.7} pb={3}>
            Includes Extra Misc Expenditures and Costs
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={12} md={6} xl={4}>
        <Paper sx={{ flexGrow: 1, height: 420 }}>
          <Typography
            color={theme.palette.secondary.main}
            sx={{ padding: "30px 30px 0 30px" }}
            variant="h6"
            fontWeight={"bold"}
          >
            Sales Quantity
          </Typography>

          <Bar isDashboard={true} />
        </Paper>
      </Grid>

      <Grid item xs={12} sm={12} md={6} xl={4}>
        <Paper sx={{ flexGrow: 1, height: 420 }}>
          <Typography
            color={theme.palette.secondary.main}
            sx={{ padding: "30px 30px 30px 30px" }}
            variant="h6"
            fontWeight={"bold"}
          >
            Geography Based Traffic
          </Typography>

          <Geography isDashboard={true} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Charts;
