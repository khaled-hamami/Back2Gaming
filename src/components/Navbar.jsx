import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Avatar, IconButton, Stack } from "@mui/material"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import "../styles/App.css"
import Tilt from "react-parallax-tilt"
import { GitHub, LinkedIn, Search } from "@mui/icons-material"
import SearchField from "./SearchField"

function Navbar() {
   //change the typography dynamically
   const [dynamicText, setdynamicText] = useState("Back2Gaming")
   //
   function updateText() {
      if (window.innerWidth <= 600) {
         setdynamicText("B2G")
      } else {
         setdynamicText("Back2Gaming")
      }
   }

   window.addEventListener("resize", updateText)

   //search icon handler
   const [expandSearch, setExpandSearch] = useState(false)

   const handleSearchClick = () => {
      setExpandSearch((prev) => !prev)
   }

   //check when the user scroll to change the navigation bar background color
   const [scrolled, setScrolled] = useState(false)
   //
   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 0) {
            setScrolled(true)
         } else {
            setScrolled(false)
         }
      }
      window.addEventListener("scroll", handleScroll)
      return () => {
         window.removeEventListener("scroll", handleScroll)
      }
   }, [])

   //Custom Link component

   const CustomLink = styled(Link)(() => ({
      fontSize: "1rem",
      textDecoration: "none",
      paddingTop: "30px",
   }))

   //the COMPONENT

   return (
      <Box
         sx={{
            display: "flex",
            bgcolor: scrolled ? "#000000" : "transparent",
            position: "sticky",
            top: "0",
            width: "100%",
            height: { xs: "50px", sm: "65px" },
            alignItems: "center",
            justifyContent: "space-between",
            pl: { xs: "1rem", md: "2rem" },
            transition: "background-color 0.3s ease-in-out",
            boxShadow: scrolled ? "0px 4px 6px rgba(0, 0, 0, .5)" : "0px 0px 0px rgba(0, 0, 0, 0)",
         }}
      >
         <Box sx={{ flex: "1" }}>
            <Tilt perspective={50000} trackOnWindow={true}>
               <Typography
                  sx={{
                     fontSize: { xs: "1.25rem", sm: "1.75rem", md: "2rem" },
                     fontWeight: "600",
                     color: "secondary.main",
                     paddingTop: "30px",
                  }}
               >
                  {dynamicText}
               </Typography>
            </Tilt>
         </Box>
         <Box
            sx={{
               display: {
                  xs: "none",
                  sm: "flex",
               },
               flex: "3",
               height: "100%",
               justifyContent: "space-evenly",
               alignItems: "center",
            }}
         >
            <CustomLink className="underline-animation" style={{ color: "#c8d6e5" }} to="/">
               Home
            </CustomLink>
            <CustomLink className="underline-animation" style={{ color: "#c8d6e5" }} to="/freegame">
               Free Game
            </CustomLink>
            <CustomLink className="underline-animation" style={{ color: "#c8d6e5" }} to="/about">
               About
            </CustomLink>
         </Box>

         <Box
            sx={{
               flex: "2",
               display: "flex",
               justifyContent: "center",
               height: "100%",
               color: "primary.main",
               paddingTop: "30px",
               gap: "15px",
            }}
         >
            {expandSearch && (
               <div style={{ marginBottom: "-5px" }} onBlur={handleSearchClick}>
                  <SearchField />
               </div>
            )}
            {!expandSearch && (
               <IconButton color="primary" onClick={handleSearchClick}>
                  <Search />
               </IconButton>
            )}

            <IconButton color="primary" onClick={() => window.open("https://github.com/khaled-hamami", "_blank")}>
               <GitHub />
            </IconButton>
            <IconButton
               color="primary"
               onClick={() => window.open("https://www.linkedin.com/in/khaled-hammami-949bb8255/", "_blank")}
            >
               <LinkedIn />
            </IconButton>
         </Box>
      </Box>
   )
}

export default Navbar
