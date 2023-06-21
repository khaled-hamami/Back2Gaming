/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/
/************************* Imports ************************* */

import { useState } from "react"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import {
   Avatar,
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
import { ArrowDownward } from "@mui/icons-material"

/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/

export default function FreeGameCard({ id, title, statue, offerType, description, picture, publisher, originalPrice }) {
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
   }))

   // the COMPONENT

   return (
      <Container sx={{ display: "flex", justifyContent: "center", marginY: "10vw" }}>
         <Card sx={{ width: "100%", maxWidth: 1000 }}>
            <CardHeader
               avatar={
                  <Avatar sx={{ bgcolor: "secondary.main" }} aria-label="B2G">
                     B2G
                  </Avatar>
               }
               action={
                  <IconButton aria-label="settings">
                     <MoreVertIcon />
                  </IconButton>
               }
               title={title}
               subheader={offerType}
            />
            <CardMedia component="img" height="194" image={picture} alt={`${title}'s image`} />

            <CardActions disableSpacing>
               <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
                  <FavoriteIcon color={liked ? "secondary" : ""} />
               </IconButton>
               <IconButton aria-label="share">
                  <ShareIcon />
               </IconButton>
               <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
               >
                  <ExpandMoreIcon />
               </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
               <CardContent>
                  <Typography variant="h6" p=".5rem">
                     status : {statue}
                  </Typography>
                  <Typography variant="h6" p=".5rem">
                     publisher : {publisher}
                  </Typography>
                  <Typography variant="h6" p=".5rem">
                     originalPrice : {originalPrice}
                  </Typography>
                  <Typography variant="h6" p=".5rem">
                     more information below ...
                  </Typography>
                  <Typography paragraph>{description}</Typography>
               </CardContent>
            </Collapse>
         </Card>
      </Container>
   )
}
