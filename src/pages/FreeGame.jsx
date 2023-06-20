import React from "react"
import Navbar from "../components/Navbar"

import { currentGames, upcomingGames } from "../api/getFreeGames"
import FreeGameCard from "../components/FreeGameCard"

export default function FreeGame() {
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
      </>
   )
}
