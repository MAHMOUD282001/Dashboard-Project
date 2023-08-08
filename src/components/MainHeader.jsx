import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

function MainHeader({ title, subTitle }) {
  let theme = useTheme();
  return (
    <Box sx={{ mb: 5 }}>
      <Typography
        variant="h5"
        fontWeight={"bold"}
        color={theme.palette.info.light}
      >
        {title}
      </Typography>
      <Typography variant="body1">{subTitle}</Typography>
    </Box>
  );
}

export default MainHeader;
