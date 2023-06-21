//import reslut from "./data.json"
const API_KEY = import.meta.env.API_KEY

const url = "https://free-epic-games.p.rapidapi.com/free"
const options = {
   method: "GET",
   headers: {
      "X-RapidAPI-Key": "4a23ede8b9mshec360716f0cf02fp15450bjsnadb7ce6798b3",
      "X-RapidAPI-Host": "free-epic-games.p.rapidapi.com",
   },
}

let result

async function getFreeGames() {
   try {
      const response = await fetch(url, options)
      result = await response.text()
      callbackassignmennt()
   } catch (error) {
      document.write(error)
   }
}
