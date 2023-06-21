const API_KEY = import.meta.env.VITE_API_KEY

const url = "https://free-epic-games.p.rapidapi.com/free"
const options = {
   method: "GET",
   headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "free-epic-games.p.rapidapi.com",
   },
}

let result

export default async function getFreeGames() {
   try {
      const response = await fetch(url, options)
      result = await response.json()
   } catch (error) {
      alert(`an error has occurred  , please try again later error: ${error}`)
   }
   return result.freeGames
}
