import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import FreeGameCard from "../components/FreeGameCard"
import { Typography } from "@mui/material"
import getFreeGames from "../api/getFreeGames"
import Tilt from "react-parallax-tilt"
import styled from "@emotion/styled"

export default function FreeGame() {
   const [message, setMessage] = useState("loading...")
   const [currentGames, setCurrrentGames] = useState([])
   const [upcomingGames, setUpcomingGames] = useState([])

   useEffect(() => {
      getFreeGames(setMessage).then((games) => {
         setCurrrentGames(games.current)
         setUpcomingGames(games.upcoming)
      })
   }, [])

   const Title = styled(Typography)(({ theme }) => ({
      textAlign: "center",
      fontSize: "3rem",
      fontWeight: "600",
      color: theme.palette.secondary.main,
   }))

   return (
      <>
         <Navbar />
         <Tilt perspective={50000} trackOnWindow={true}>
            <Title>&lt; Current Games /&gt;</Title>
         </Tilt>
         {currentGames.map((game) => {
            return (
               <FreeGameCard
                  key={game.id}
                  title={game.title}
                  statue={game.status}
                  offerType={game.offerType}
                  description={game.description}
                  picture={game.keyImages[0].url}
                  full_picture={game.keyImages[1].url}
                  publisher={game.seller.name}
                  originalPrice={game.price.totalPrice.fmtPrice.originalPrice}
               />
            )
         })}
         (
         <Tilt perspective={50000} trackOnWindow={true}>
            <Title>&lt; Upcoming Games /&gt;</Title>
         </Tilt>
         {upcomingGames.map((game) => {
            return (
               <FreeGameCard
                  key={game.id}
                  title={game.title}
                  statue={game.status}
                  offerType={game.offerType}
                  description={game.description}
                  picture={game.keyImages[0].url}
                  full_picture={game.keyImages[1].url}
                  publisher={game.seller.name}
                  originalPrice={game.price.totalPrice.fmtPrice.originalPrice}
               />
            )
         })}
         <Typography variant="h5" m="25px" color="primary.main" display={message == "loading..." ? 'none' : 'inline'}>
            {message}
            
         </Typography>
      </>
   )
}
