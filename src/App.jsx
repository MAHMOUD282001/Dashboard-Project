import {
  ThemeProvider,
  createTheme,
  styled,
  useTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import { getDesignTokens } from "./components/Theme";
import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function App() {
  const [open, setOpen] = useState(false);

  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") || "light"
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <TopBar
            setMode={setMode}
            open={open}
            handleDrawerOpen={handleDrawerOpen}
          />

          <Sidebar open={open} handleDrawerClose={handleDrawerClose} />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Typography paragraph>
              <Outlet />
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}
