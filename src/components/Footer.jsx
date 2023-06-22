import React from "react"
import styled from "@emotion/styled"
import { GitHub, Share } from "@mui/icons-material"
import { Avatar, Box, Button, Container, Divider, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import copyToClipboard from "../utils/CopyToClipboard"
import avatarImage from "../../public/static/images/avatar.jpg"
const CustomButton = styled(Button)(() => ({
   borderRadius: "25px",
   textDecoration: "underline",
}))

const CustomDivider = styled(Divider)(() => ({
   backgroundColor: "white",
}))

const CustomLink = styled(Link)`
   color: ${(props) => props.theme.palette.primary.main};
`

function Footer() {
   return (
      <Container maxWidth="xl" sx={{ mt: { xs: "150px", md: "250px", lg: "450px" }, height: "500px" }}>
         <Stack
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
            justifyContent="space-evenly"
            height="100%"
            color="primary.main"
         >
            <Stack color="secondary.main" alignItems="center" mt="60px">
               <Typography pb="25px" variant="h3" fontWeight="bold" textAlign="center">
                  Back2Gaming
               </Typography>
               <Typography pb="25px">Simple Fast Direct</Typography>
               <Box display="flex" gap="15px" flexDirection="row" justifyContent="center">
                  <Avatar sx={{ width: "50px", height: "50px" }} src={avatarImage} />
                  <CustomDivider variant="middle" />
                  <Avatar sx={{ width: "50px", height: "50px" }} src={avatarImage} />
                  <CustomDivider variant="middle" />
                  <Avatar sx={{ width: "50px", height: "50px" }} src={avatarImage} />
               </Box>
            </Stack>

            <Stack justifyContent="space-evenly">
               <Typography variant="h6" fontWeight="bold" sx={{ textAlign: { xs: "left", sm: "center" } }}>
                  About
               </Typography>
               <CustomLink
                  style={{
                     textAlign: "center",
                     fontFamily: "Roboto,Helvetica,Arial",
                     fontSize: "14px",
                     padding: "6px 8px",
                  }}
                  to="/about"
               >
                  ABOUT
               </CustomLink>
               <CustomDivider variant="middle" />
               <CustomButton href="https://github.com/khaled-hamami/Back2Gaming" target="_blank">
                  Source code
               </CustomButton>
               <CustomDivider variant="middle" />
               <CustomButton>About</CustomButton>
            </Stack>

            <Stack justifyContent="space-evenly">
               <Typography variant="h6" fontWeight="bold" sx={{ textAlign: { xs: "left", sm: "center" } }}>
                  Support
               </Typography>
               <CustomButton startIcon={<GitHub />}>Github</CustomButton>
               <CustomDivider variant="middle" />
               <CustomButton onClick={copyToClipboard} startIcon={<Share />}>
                  Share
               </CustomButton>
               <CustomDivider variant="middle" />

               <CustomButton></CustomButton>
            </Stack>
         </Stack>
      </Container>
   )
}

export default Footer
