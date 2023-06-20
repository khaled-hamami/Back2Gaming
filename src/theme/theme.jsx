import { createTheme } from "@mui/material"

export const theme = createTheme({
   palette: {
      primary: {
         main: "#c8d6e5",
      },
      secondary: {
         main: "#5f27cd",
      },
   },
   components: {
      MuiCssBaseline: {
         styleOverrides: {
            body: {
               backgroundColor: "transparent",
            },
         },
      },
   },
})
