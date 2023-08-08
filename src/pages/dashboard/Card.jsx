import React from "react";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

function Card({ icon, title, subtitle, increase, data, scheme }) {
  
  let theme = useTheme()
  
  return (
    <Paper
      sx={{
        minWidth: 210,
        flexGrow: 1,
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Stack sx={{ gap: 1 }}>
        {icon}
        <Typography variant="body2" sx={{ fontSize: "15px" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "15px" }}>
          {subtitle}
        </Typography>
      </Stack>

      <Stack alignItems={"center"}>
        <Box sx={{ width: "75px", height: "75px" }}>
          <ResponsivePie
            data={data}
            theme={{
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
                axis: {
                  domain: {
                    line: {
                      stroke: theme.palette.text.primary,
                      strokeWidth: 1,
                    },
                  },
                  legend: {
                    text: {
                      fontSize: 12,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  ticks: {
                    line: {
                      stroke: theme.palette.text.primary,
                      strokeWidth: 1,
                    },
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                grid: {
                  line: {
                    stroke: "#dddddd",
                    strokeWidth: 1,
                  },
                },
                legends: {
                  title: {
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                  ticks: {
                    line: {},
                    text: {
                      fontSize: 10,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                annotations: {
                  text: {
                    fontSize: 13,
                    fill: theme.palette.text.primary,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  link: {
                    stroke: "#000000",
                    strokeWidth: 1,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  outline: {
                    stroke: "#000000",
                    strokeWidth: 2,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  symbol: {
                    fill: "#000000",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                },
                tooltip: {
                  container: {
                    background: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    fontSize: 12,
                  },
                  basic: {},
                  chip: {},
                  table: {},
                  tableCell: {},
                  tableCellValue: {},
                },
              }}
            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
            innerRadius={0.7}
            colors={{scheme: scheme}}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "ruby",
                },
                id: "dots",
              },
              {
                match: {
                  id: "c",
                },
                id: "dots",
              },
              {
                match: {
                  id: "go",
                },
                id: "dots",
              },
              {
                match: {
                  id: "python",
                },
                id: "dots",
              },
              {
                match: {
                  id: "scala",
                },
                id: "lines",
              },
              {
                match: {
                  id: "lisp",
                },
                id: "lines",
              },
              {
                match: {
                  id: "elixir",
                },
                id: "lines",
              },
              {
                match: {
                  id: "javascript",
                },
                id: "lines",
              },
            ]}
          />
        </Box>
        <Typography variant="body2" sx={{ fontSize: "15px" }}>
          {increase}
        </Typography>
      </Stack>
    </Paper>
  );
}

export default Card;
