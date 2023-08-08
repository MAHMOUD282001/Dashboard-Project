import { Box, useTheme } from "@mui/material";
import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geo } from "./WorldCountries";

let data = [
  {
    id: "AFG",
    value: 815193,
  },
  {
    id: "AGO",
    value: 3064,
  },
  {
    id: "ALB",
    value: 781228,
  },
  {
    id: "ARE",
    value: 584687,
  },
  {
    id: "ARG",
    value: 22905,
  },
  {
    id: "ARM",
    value: 800964,
  },
  {
    id: "ATA",
    value: 157710,
  },
  {
    id: "ATF",
    value: 415175,
  },
  {
    id: "AUT",
    value: 819342,
  },
  {
    id: "AZE",
    value: 289130,
  },
  {
    id: "BDI",
    value: 363178,
  },
  {
    id: "BEL",
    value: 976905,
  },
  {
    id: "BEN",
    value: 700497,
  },
  {
    id: "BFA",
    value: 842816,
  },
  {
    id: "BGD",
    value: 480907,
  },
  {
    id: "BGR",
    value: 393879,
  },
  {
    id: "BHS",
    value: 45286,
  },
  {
    id: "BIH",
    value: 46843,
  },
  {
    id: "BLR",
    value: 455504,
  },
  {
    id: "BLZ",
    value: 830967,
  },
  {
    id: "BOL",
    value: 229764,
  },
  {
    id: "BRN",
    value: 781961,
  },
  {
    id: "BTN",
    value: 59435,
  },
  {
    id: "BWA",
    value: 933145,
  },
  {
    id: "CAF",
    value: 176553,
  },
  {
    id: "CAN",
    value: 10756,
  },
  {
    id: "CHE",
    value: 561059,
  },
  {
    id: "CHL",
    value: 791293,
  },
  {
    id: "CHN",
    value: 146620,
  },
  {
    id: "CIV",
    value: 430652,
  },
  {
    id: "CMR",
    value: 521236,
  },
  {
    id: "COG",
    value: 162472,
  },
  {
    id: "COL",
    value: 923195,
  },
  {
    id: "CRI",
    value: 980366,
  },
  {
    id: "CUB",
    value: 921932,
  },
  {
    id: "-99",
    value: 775214,
  },
  {
    id: "CYP",
    value: 622838,
  },
  {
    id: "CZE",
    value: 853020,
  },
  {
    id: "DEU",
    value: 442891,
  },
  {
    id: "DJI",
    value: 101932,
  },
  {
    id: "DNK",
    value: 311877,
  },
  {
    id: "DOM",
    value: 915512,
  },
  {
    id: "DZA",
    value: 120435,
  },
  {
    id: "ECU",
    value: 163114,
  },
  {
    id: "EGY",
    value: 593669,
  },
  {
    id: "ERI",
    value: 940906,
  },
  {
    id: "ESP",
    value: 381430,
  },
  {
    id: "EST",
    value: 807860,
  },
  {
    id: "ETH",
    value: 448674,
  },
  {
    id: "FIN",
    value: 517194,
  },
  {
    id: "FJI",
    value: 731,
  },
  {
    id: "FLK",
    value: 835415,
  },
  {
    id: "FRA",
    value: 205039,
  },
  {
    id: "GAB",
    value: 650112,
  },
  {
    id: "GBR",
    value: 969489,
  },
  {
    id: "GEO",
    value: 437878,
  },
  {
    id: "GHA",
    value: 674194,
  },
  {
    id: "GIN",
    value: 857736,
  },
  {
    id: "GMB",
    value: 436673,
  },
  {
    id: "GNB",
    value: 950991,
  },
  {
    id: "GNQ",
    value: 257676,
  },
  {
    id: "GRC",
    value: 793805,
  },
  {
    id: "GTM",
    value: 559217,
  },
  {
    id: "GUY",
    value: 876495,
  },
  {
    id: "HND",
    value: 22054,
  },
  {
    id: "HRV",
    value: 846423,
  },
  {
    id: "HTI",
    value: 338074,
  },
  {
    id: "HUN",
    value: 584474,
  },
  {
    id: "IDN",
    value: 910030,
  },
  {
    id: "IND",
    value: 20052,
  },
  {
    id: "IRL",
    value: 228520,
  },
  {
    id: "IRN",
    value: 184464,
  },
  {
    id: "IRQ",
    value: 267703,
  },
  {
    id: "ISL",
    value: 588491,
  },
  {
    id: "ISR",
    value: 189171,
  },
  {
    id: "ITA",
    value: 126621,
  },
  {
    id: "JAM",
    value: 106135,
  },
  {
    id: "JOR",
    value: 129008,
  },
  {
    id: "JPN",
    value: 168499,
  },
  {
    id: "KAZ",
    value: 434690,
  },
  {
    id: "KEN",
    value: 563914,
  },
  {
    id: "KGZ",
    value: 947412,
  },
  {
    id: "KHM",
    value: 264862,
  },
  {
    id: "OSA",
    value: 268099,
  },
  {
    id: "KWT",
    value: 786594,
  },
  {
    id: "LAO",
    value: 850639,
  },
  {
    id: "LBN",
    value: 396873,
  },
  {
    id: "LBR",
    value: 456425,
  },
  {
    id: "LBY",
    value: 373179,
  },
  {
    id: "LKA",
    value: 890728,
  },
  {
    id: "LSO",
    value: 138385,
  },
  {
    id: "LTU",
    value: 260739,
  },
  {
    id: "LUX",
    value: 181734,
  },
  {
    id: "LVA",
    value: 174786,
  },
  {
    id: "MAR",
    value: 613917,
  },
  {
    id: "MDA",
    value: 936200,
  },
  {
    id: "MDG",
    value: 171164,
  },
  {
    id: "MEX",
    value: 667516,
  },
  {
    id: "MKD",
    value: 711443,
  },
  {
    id: "MLI",
    value: 30509,
  },
  {
    id: "MMR",
    value: 708347,
  },
  {
    id: "MNE",
    value: 900570,
  },
  {
    id: "MNG",
    value: 56448,
  },
  {
    id: "MOZ",
    value: 494734,
  },
  {
    id: "MRT",
    value: 528387,
  },
  {
    id: "MWI",
    value: 678999,
  },
  {
    id: "MYS",
    value: 768459,
  },
  {
    id: "NAM",
    value: 844648,
  },
  {
    id: "NCL",
    value: 823305,
  },
  {
    id: "NER",
    value: 588934,
  },
  {
    id: "NGA",
    value: 829767,
  },
  {
    id: "NIC",
    value: 567014,
  },
  {
    id: "NLD",
    value: 829451,
  },
  {
    id: "NOR",
    value: 726021,
  },
  {
    id: "NPL",
    value: 402612,
  },
  {
    id: "NZL",
    value: 120952,
  },
  {
    id: "OMN",
    value: 266279,
  },
  {
    id: "PAK",
    value: 138183,
  },
  {
    id: "PAN",
    value: 106504,
  },
  {
    id: "PER",
    value: 97622,
  },
  {
    id: "PHL",
    value: 764141,
  },
  {
    id: "PNG",
    value: 561164,
  },
  {
    id: "POL",
    value: 766050,
  },
  {
    id: "PRI",
    value: 529477,
  },
  {
    id: "PRT",
    value: 706999,
  },
  {
    id: "PRY",
    value: 800104,
  },
  {
    id: "QAT",
    value: 772945,
  },
  {
    id: "ROU",
    value: 84690,
  },
  {
    id: "RUS",
    value: 287867,
  },
  {
    id: "RWA",
    value: 913813,
  },
  {
    id: "ESH",
    value: 183138,
  },
  {
    id: "SAU",
    value: 903468,
  },
  {
    id: "SDN",
    value: 359257,
  },
  {
    id: "SDS",
    value: 922406,
  },
  {
    id: "SEN",
    value: 778085,
  },
  {
    id: "SLB",
    value: 653744,
  },
  {
    id: "SLE",
    value: 311507,
  },
  {
    id: "SLV",
    value: 116322,
  },
  {
    id: "ABV",
    value: 978494,
  },
  {
    id: "SOM",
    value: 340083,
  },
  {
    id: "SRB",
    value: 891643,
  },
  {
    id: "SUR",
    value: 376410,
  },
  {
    id: "SVK",
    value: 427401,
  },
  {
    id: "SVN",
    value: 384012,
  },
  {
    id: "SWZ",
    value: 213847,
  },
  {
    id: "SYR",
    value: 236020,
  },
  {
    id: "TCD",
    value: 812388,
  },
  {
    id: "TGO",
    value: 855003,
  },
  {
    id: "THA",
    value: 389423,
  },
  {
    id: "TJK",
    value: 887271,
  },
  {
    id: "TKM",
    value: 347710,
  },
  {
    id: "TLS",
    value: 687708,
  },
  {
    id: "TTO",
    value: 175059,
  },
  {
    id: "TUN",
    value: 370279,
  },
  {
    id: "TUR",
    value: 845116,
  },
  {
    id: "TWN",
    value: 97783,
  },
  {
    id: "TZA",
    value: 489178,
  },
  {
    id: "UGA",
    value: 479501,
  },
  {
    id: "UKR",
    value: 8250,
  },
  {
    id: "URY",
    value: 662030,
  },
  {
    id: "USA",
    value: 728205,
  },
  {
    id: "UZB",
    value: 783291,
  },
  {
    id: "VEN",
    value: 74089,
  },
  {
    id: "VNM",
    value: 648246,
  },
  {
    id: "VUT",
    value: 316643,
  },
  {
    id: "PSE",
    value: 695554,
  },
  {
    id: "YEM",
    value: 747747,
  },
  {
    id: "ZAF",
    value: 966675,
  },
  {
    id: "ZMB",
    value: 182825,
  },
  {
    id: "ZWE",
    value: 923650,
  },
  {
    id: "KOR",
    value: 129560,
  },
];

function Geography({ isDashboard = false }) {
  let theme = useTheme();

  return (
    <Box sx={{ height: isDashboard ? "350px" : "70vh"}}>
      <ResponsiveChoropleth
        data={data}
        projectionScale={130}
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
        features={geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="spectral"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
          {
            id: "gradient",
            type: "linearGradient",
            colors: [
              {
                offset: 0,
                color: "#000",
              },
              {
                offset: 100,
                color: "inherit",
              },
            ],
          },
        ]}
        fill={[
          {
            match: {
              id: "CAN",
            },
            id: "dots",
          },
          {
            match: {
              id: "CHN",
            },
            id: "lines",
          },
          {
            match: {
              id: "ATA",
            },
            id: "gradient",
          },
        ]}
        legends={
          isDashboard
            ? []
            : [
                {
                  anchor: "bottom-left",
                  direction: "column",
                  justify: true,
                  translateX: 20,
                  translateY: -100,
                  itemsSpacing: 0,
                  itemWidth: 94,
                  itemHeight: 18,
                  itemDirection: "left-to-right",
                  itemTextColor: theme.palette.text.primary,
                  itemOpacity: 0.85,
                  symbolSize: 18,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#000000",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]
        }
      />
    </Box>
  );
}

export default Geography;
