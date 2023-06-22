import { Box, Button, Typography } from "@mui/material"
import "../styles/card.css"
import Tilt from "react-parallax-tilt"

function HomeCard({ title, data, buttonContent }) {
   const user = {
      signedIn: false,
   }
   return (
      <Box
         className="card"
         sx={{
            maxWidth: "md",
            width: "100%",
            mt: "5vw",
            color: "white",
            textShadow: "2px 2px 4px black",
            border: "1px solid rgba(255, 255, 255,.5)",
            borderRadius: "30px",
            padding: "15px 20px",
         }}
      >
         <Typography variant="h2" sx={{ padding: "10px 0px", fontSize: { xs: "2rem", md: "3rem" } }}>
            {title}
         </Typography>
         <Typography variant="h5" sx={{ padding: "10px 0px", fontSize: { xs: "1rem", md: "1.5rem" } }}>
            {data}
         </Typography>
         <Box width="100%" sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Tilt>
               <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  // to check if that the disabled is only appiled only when is used by
                  // the correct component because we are calling this component more than 1 time */
                  disabled={buttonContent === "Sign up" && user.signedIn}
                  // note  the user.signedIn is a placeholder prototype to simulate a signed in user
               >
                  {buttonContent}
               </Button>
            </Tilt>
         </Box>
      </Box>
   )
}

export default HomeCard
