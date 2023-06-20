import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import FreeGame from "./pages/FreeGame"
import About from "./pages/About"
function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" Component={Home} />
            <Route path="/freegame" Component={FreeGame} />

            <Route path="/about" Component={About} />
         </Routes>
      </Router>
   )
}

export default App
