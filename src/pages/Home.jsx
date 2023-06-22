import React from "react"
import Navbar from "../components/Navbar"
import { Box, Button, Typography } from "@mui/material"
import { KeyboardDoubleArrowDown, NavigateNextOutlined } from "@mui/icons-material"
import HomeCard from "../components/HomeCard"
import Footer from "../components/Footer"

function Home() {
   return (
      <Box>
         <Navbar />

         <Box
            sx={{
               marginTop: "20vw",
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            {/* -------------------------------------------------------------------------------------------- */}

            <Typography
               variant="h1"
               sx={{
                  fontSize: { xs: "3.5rem", md: "5rem" },
                  color: "secondary.main",
                  fontWeight: { xs: "500", md: "600" },
                  textShadow:
                     "2px 2px 2px rgba(255,255, 255, .5),3px 3px 3px rgba(255,255, 255, .5),4px 4px 4px rgba(255,255, 255, .5)",
                  textAlign: "center",
               }}
            >
               Welcome to the gamers Hub
            </Typography>

            {/* -------------------------------------------------------------------------------------------- */}

            <Typography
               variant="h6"
               align="center"
               color="primary.main"
               sx={{
                  textShadow: "2px 2px 2px rgba(255,255, 255, .5)",
                  fontSize: { xs: "1rem", md: "1.5rem" },
               }}
            >
               Unleash your gaming prowess with our epic application, delivering a weekly feast of free games courtesy
               of Epic Games' Game of the Week. Embark on thrilling adventures and conquer new realms without spending a
               dime. Stay ahead of the game and unlock limitless fun with our exclusive offerings.
            </Typography>

            {/* -------------------------------------------------------------------------------------------- */}

            <Button
               size="large"
               sx={{
                  width: "20vw",
                  fontSize: { xs: ".85rem", md: "1.25rem" },
                  color: "secondary.dark",
                  fontWeight: "500",
                  m: "30px 0",
               }}
               endIcon={<NavigateNextOutlined />}
            >
               Discover Your Game
            </Button>

            {/* -------------------------------------------------------------------------------------------- */}

            <Button
               sx={{
                  color: "secondary.dark",
               }}
               endIcon={<KeyboardDoubleArrowDown sx={{ fontSize: "50px" }} color="secondary.dark" />}
               href="#more"
            >
               Expore more
            </Button>

            {/* -------------------------------------------------------------------------------------------- */}
         </Box>
         <Box
            id="more"
            sx={{
               mt:'2vw',
               display: "flex",
               justifyContent: "space-evenly",
               gap: "15px",
               flexDirection: { xs: "column", md: "row" },
            }}
         >
            <HomeCard
               title="Join Our Newsletter"
               data="By joining our newsletter, you'll receive a weekly email packed with all the exciting news, updates, and highlights from the world of Epic Games. Be the first to know about new game releases, upcoming events, exclusive in-game content, and much more."
               buttonContent="Register now"
            />
            <HomeCard
               title="Join Our Community"
               data="By signing up, you become part of our community where you can connect with other individuals, share your thoughts, and engage in discussions. Unlock exclusive benefits such as early access to new features, and the opportunity to shape the future of our platform"
               buttonContent="Sign up"
            />
         </Box>
         <Footer />
      </Box>
   )
}

export default Home
