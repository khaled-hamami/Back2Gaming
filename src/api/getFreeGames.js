import data from "./data.json"
require('dotenv').config()
// const url = "https://free-epic-games.p.rapidapi.co/free"
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": process.env.API_KEY,
//     "X-RapidAPI-Host": "free-epic-games.p.rapidapi.com",
//   },
// }
//let data
export default async function getFreeGames() {
   //   try {
   //    const  response = await fetch(url, options)
   //      data = await response.text()
   //     console.log(data)
   //   } catch (error) {
   //     console.error(error)
   //   }
}
getFreeGames()

export const currentGames = data.freeGames.current

export const upcomingGames = data.freeGames.upcoming
