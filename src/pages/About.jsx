import React from "react"
import Navbar from "../components/Navbar"
import { Button, Container } from "@mui/material"

function About() {
   return (
      <>
         <Navbar />
         <Container sx={{ display: "flex", justifyContent: "center", alignITems: "center", height: "100%" }}>
            <Button href="https://khaledhm.tn" target="_blank" sx={{ color: "secondary.main" }}>
               KhaledHm.tn
            </Button>
         </Container>
      </>
   )
}

export default About
