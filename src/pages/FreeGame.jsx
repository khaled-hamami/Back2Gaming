import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import FreeGameCard from "../components/FreeGameCard"
import { Typography } from "@mui/material"
// import getFreeGames from "../api/getFreeGames"
import prototype from "../api/prototype"

export default function FreeGame() {
   const [currentGames, setCurrrentGames] = useState([])
   const [upcomingGames, setUpcomingGames] = useState([])

   useEffect(() => {
      prototype().then((games) => {
         setCurrrentGames(games.current)
         setUpcomingGames(games.upcoming)
      })
   }, [])

   return (
      <>
         <Navbar />

         {currentGames.map((game) => {
            return (
               <FreeGameCard
                  key={game.id}
                  title={game.title}
                  statue={game.status}
                  offerType={game.offerType}
                  description={game.description}
                  picture={game.keyImages[0].url}
                  publisher={game.seller.name}
                  originalPrice={game.price.totalPrice.fmtPrice.originalPrice}
               />
            )
         })}
         <Typography variant="h5" p="10px" textAlign="center" color="primary">
            upcoming games
         </Typography>
         {upcomingGames.map((game) => {
            return (
               <FreeGameCard
                  key={game.id}
                  title={game.title}
                  statue={game.status}
                  offerType={game.offerType}
                  description={game.description}
                  picture={game.keyImages[0].url}
                  publisher={game.seller.name}
                  originalPrice={game.price.totalPrice.fmtPrice.originalPrice}
               />
            )
         })}
      </>
   )
}
