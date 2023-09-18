/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/
/************************* Imports ************************* */

import { useState } from "react"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import avatarImage from "/static/images/avatar.jpg"
import {
   Avatar,
   Box,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   CardMedia,
   Collapse,
   Container,
   IconButton,
   Typography,
} from "@mui/material"
import styled from "@emotion/styled"

/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/

export default function FreeGameCard({
   id,
   title,
   statue,
   description,
   picture,
   full_picture,
   publisher,
   originalPrice,
}) {
   // expand button state

   const [expanded, setExpanded] = useState(false)

   // the expand button flip switch

   const handleExpandClick = () => {
      setExpanded(!expanded)
   }

   // the like button

   const [liked, setLiked] = useState(false)

   const handleLikeClick = () => {
      setLiked(!liked)
   }
   // "< ExpandMore />" component adjustment and styling

   const ExpandMore = styled((props) => {
      const { expand, ...other } = props
      return <IconButton {...other} />
   })(({ theme, expand }) => ({
      transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
         duration: theme.transitions.duration.shortest,
      }),
      color: "white",
   }))

   //handleImageLink

   const handleImageLink = () => {
      window.open(full_picture)
   }
   //custom typoghraphy

   const CustomTypo = styled(Typography)(({ theme }) => ({
      color: theme.palette.secondary.main,
      textTransform: "lowercase",
   }))

   // the COMPONENT

   return (
      <Container sx={{ display: "flex", justifyContent: "center", marginY: "10vw" }}>
         <Card className="card2" sx={{ width: "100%", maxWidth: 1500, backgroundColor: "#000", color: "primary.main" }}>
            <CardHeader
               avatar={<Avatar sx={{ bgcolor: "secondary.main" }} aria-label="B2G" src={avatarImage} />}
               action={
                  <IconButton aria-label="settings">
                     <MoreVertIcon />
                  </IconButton>
               }
               title={
                  <Typography variant="h5" sx={{ color: "primary.main" }}>
                     {title}
                  </Typography>
               }
               subheader={<Typography sx={{ color: "primary.main" }}>{originalPrice}</Typography>}
            />
            <CardMedia component="img" height="300" image={picture} alt={`${title}'s image`} />

            <CardActions disableSpacing>
               <IconButton aria-label="add to favorites" color="primary" onClick={handleLikeClick}>
                  <FavoriteIcon color={liked ? "secondary" : ""} />
               </IconButton>
               <IconButton aria-label="share" color="primary">
                  <ShareIcon />
               </IconButton>
               <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
               >
                  <Typography display={expanded ? "none" : "block"}>more information below </Typography>
                  <ExpandMoreIcon />
               </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
               <CardContent>
                  <Typography variant="h6" p=".5rem">
                     status : <CustomTypo variant="span">{statue}</CustomTypo>
                  </Typography>
                  <Typography variant="h6" p=".5rem">
                     publisher : <CustomTypo variant="span">{publisher}</CustomTypo>
                  </Typography>
                  <Typography variant="h6" p=".5rem">
                     original price : <CustomTypo variant="span">{originalPrice}</CustomTypo>
                  </Typography>
                  <Typography
                     variant="a"
                     onClick={handleImageLink}
                     fontSize="meduim"
                     p=".5rem"
                     sx={{
                        cursor: "pointer",
                        width: "15%",
                        textDecoration: "underline",
                        "&:hover": {
                           color: "secondary.main",
                        },
                     }}
                  >
                     full image
                  </Typography>
                  <Typography variant="h6" p=".5rem">
                     additional details ...
                  </Typography>
                  <Typography paragraph>{description}</Typography>
               </CardContent>
            </Collapse>
         </Card>
      </Container>
   )
}
