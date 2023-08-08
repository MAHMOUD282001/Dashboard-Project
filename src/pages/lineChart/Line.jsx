import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import React from "react";

let data = [
  {
    id: "japan",
    color: "hsl(130, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 42,
      },
      {
        x: "helicopter",
        y: 42,
      },
      {
        x: "boat",
        y: 5,
      },
      {
        x: "train",
        y: 105,
      },
      {
        x: "subway",
        y: 138,
      },
      {
        x: "bus",
        y: 83,
      },
      {
        x: "car",
        y: 112,
      },
      {
        x: "moto",
        y: 214,
      },
      {
        x: "bicycle",
        y: 151,
      },
      {
        x: "horse",
        y: 186,
      },
      {
        x: "skateboard",
        y: 233,
      },
      {
        x: "others",
        y: 121,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(59, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 67,
      },
      {
        x: "helicopter",
        y: 281,
      },
      {
        x: "boat",
        y: 182,
      },
      {
        x: "train",
        y: 259,
      },
      {
        x: "subway",
        y: 96,
      },
      {
        x: "bus",
        y: 208,
      },
      {
        x: "car",
        y: 104,
      },
      {
        x: "moto",
        y: 144,
      },
      {
        x: "bicycle",
        y: 59,
      },
      {
        x: "horse",
        y: 137,
      },
      {
        x: "skateboard",
        y: 297,
      },
      {
        x: "others",
        y: 95,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(181, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 147,
      },
      {
        x: "helicopter",
        y: 245,
      },
      {
        x: "boat",
        y: 202,
      },
      {
        x: "train",
        y: 129,
      },
      {
        x: "subway",
        y: 194,
      },
      {
        x: "bus",
        y: 267,
      },
      {
        x: "car",
        y: 173,
      },
      {
        x: "moto",
        y: 6,
      },
      {
        x: "bicycle",
        y: 30,
      },
      {
        x: "horse",
        y: 52,
      },
      {
        x: "skateboard",
        y: 276,
      },
      {
        x: "others",
        y: 187,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(174, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 12,
      },
      {
        x: "helicopter",
        y: 188,
      },
      {
        x: "boat",
        y: 6,
      },
      {
        x: "train",
        y: 189,
      },
      {
        x: "subway",
        y: 127,
      },
      {
        x: "bus",
        y: 126,
      },
      {
        x: "car",
        y: 139,
      },
      {
        x: "moto",
        y: 171,
      },
      {
        x: "bicycle",
        y: 240,
      },
      {
        x: "horse",
        y: 94,
      },
      {
        x: "skateboard",
        y: 41,
      },
      {
        x: "others",
        y: 46,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(360, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 66,
      },
      {
        x: "helicopter",
        y: 280,
      },
      {
        x: "boat",
        y: 122,
      },
      {
        x: "train",
        y: 46,
      },
      {
        x: "subway",
        y: 122,
      },
      {
        x: "bus",
        y: 110,
      },
      {
        x: "car",
        y: 230,
      },
      {
        x: "moto",
        y: 90,
      },
      {
        x: "bicycle",
        y: 42,
      },
      {
        x: "horse",
        y: 158,
      },
      {
        x: "skateboard",
        y: 198,
      },
      {
        x: "others",
        y: 10,
      },
    ],
  },
];

function Line({isDashboard = false}) {
  let theme = useTheme();

  return (
    <Box sx={{ height: isDashboard ? "350px" : "70vh"}}>
      <ResponsiveLine
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
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: true,
              reverse: false
          }}
          yFormat=" >-.2f"
          curve="catmullRom"
          axisTop={null}
          axisRight={null}
          axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: isDashboard ? '' : 'transportation',
              legendOffset: 36,
              legendPosition: 'middle'
          }}
          axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: isDashboard ? '' : 'count',
              legendOffset: -45,
              legendPosition: 'middle'
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
              {
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 100,
                  translateY: 50,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemBackground: 'rgba(0, 0, 0, .03)',
                              itemOpacity: 1
                          }
                      }
                  ]
              }
          ]}
    />
    </Box>
  );
}

export default Line;
