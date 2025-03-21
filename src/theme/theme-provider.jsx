"use client";

import { usePathname } from "next/navigation";
import CssBaseline from "@mui/material/CssBaseline";
import MuiThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import merge from "lodash/merge";
import useSettings from "hooks/useSettings";
import customThemeOptions from "./theme-options";
export default function ThemeProvider({
  children
}) {
  const pathname = usePathname();
  const {
    settings
  } = useSettings();
  const themeOptions = customThemeOptions(pathname);
  const mergedThemeOptions = merge({}, themeOptions, {
    direction: settings.direction
  });
  const theme = createTheme(mergedThemeOptions);

  
// theme shadows
  theme.shadows[1] = "0px 1px 3px rgba(3, 0, 71, 0.09)";
  theme.shadows[2] = "0px 4px 16px rgba(43, 52, 69, 0.1)";
  theme.shadows[3] = "0px 8px 45px rgba(3, 0, 71, 0.09)";
  theme.shadows[4] = "0px 0px 28px rgba(3, 0, 71, 0.01)";
  theme.shadows[5] = "rgba(43, 52, 69, 0.05) 0px 0px 24px 0px,rgba(43, 52, 69, 0.05) 0px 3px 6px 0px";
  theme.shadows[6] = "#7d879c0d 0px 1px 3px 0px, #7d879c0d 0px 1px 2px 0px";
  theme.shadows[7] = "rgba(43, 52, 69, .07) 1px 1px 1px 0px";
  return <LocalizationProvider dateAdapter={AdapterDateFns}>
      <AppRouterCacheProvider options={{
      key: "css"
    }}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </AppRouterCacheProvider>
    </LocalizationProvider>;
}