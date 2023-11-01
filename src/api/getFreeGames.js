const API_KEY = import.meta.env.VITE_API_KEY
const url = "https://free-epic-games.p.rapidapi.com/free"
const options = {
   method: "GET",
   headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "free-epic-games.p.rpidapi.com",
   },
}

let result

export default async function getFreeGames(setMessage ) {
   try {
      const response = await fetch(url, options)
      result = await response.json()
      console.log(result)
   } catch (error) {
      setMessage("error fetching game...")
   }
   return result.freeGames
}
