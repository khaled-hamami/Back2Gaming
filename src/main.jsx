import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./theme/theme.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
   <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </ThemeProvider>
)
