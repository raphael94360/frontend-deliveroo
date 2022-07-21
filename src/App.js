import "./App.scss"
import Header from "./components/Header"
import axios from "axios"
import { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const response = await axios.get("https://backenddelivero.herokuapp.com/")
    setData(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return isLoading ? (
    <span> En cours de chargement... </span>
  ) : (
    <>
      <header>
        <Header name={data.restaurant.name} description={"Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien propose des ingrédients simples et sains, du bon pain, des fruits et des légumes frais et de saison issus de l’agriculture biologique."} picture={"https://f.roocdn.com/images/menus/17697/header-image.jpg"} />
      </header>
    </>
  )
}

export default App
