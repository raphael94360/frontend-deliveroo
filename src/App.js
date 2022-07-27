import "./App.scss"
import Header from "./components/Header"
import Section from "./components/Section"
import axios from "axios"
import { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [cart, setCart] = useState([])

  const fetchData = async () => {
    const response = await axios.get("https://backend-delivero.herokuapp.com/")
    setData(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const addToCart = meal => {
    const copy = [...cart]
    const existingID = copy.find(element => element.id === meal.id)
    if (existingID) {
      existingID.quantity = existingID.quantity + 1
    } else {
      const newMeal = { ...meal, quantity: 1 }
      copy.push(newMeal)
    }
    setCart(copy)
  }

  const removeToCart = meal => {
    const copy = [...cart]
    const inCart = copy.find(element => element.id === meal.id)
    if (inCart.quantity === 1) {
      const index = copy.indexOf(inCart)
      copy.splice(index, 1)
    } else {
      inCart.quantity = inCart.quantity - 1
    }
    setCart(copy)
  }

  let sousTotal = 0
  let fraisLivraison = 2.5

  return isLoading ? (
    <span> En cours de chargement... </span>
  ) : (
    <>
      <header>
        <Header name={data.restaurant.name} description={"Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien propose des ingrédients simples et sains, du bon pain, des fruits et des légumes frais et de saison issus de l’agriculture biologique."} picture={"https://f.roocdn.com/images/menus/17697/header-image.jpg"} />
      </header>
      <main className="container">
        <div>
          {data.categories.map((categorie, index) => {
            return categorie.meals.length > 0 && <Section categorie={categorie} key={index} addToCart={addToCart} />
          })}
        </div>

        <aside>
          <h2> Valider mon panier </h2>

          {cart.map((meal, index) => {
            sousTotal = sousTotal + meal.quantity * meal.price
            return (
              <div key={index} className="panier">
                <button
                  onClick={() => {
                    removeToCart(meal)
                  }}
                >
                  -
                </button>
                <span>{meal.quantity}</span>
                <button
                  onClick={() => {
                    addToCart(meal)
                  }}
                >
                  +
                </button>
                <h3> {meal.title}</h3>
                <p>{(meal.price * meal.quantity).toFixed(2)} €</p>
              </div>
            )
          })}
          <div className="total">
            <p>
              <span> Sous-total :</span>
              <span>{sousTotal.toFixed(2)} € </span>
            </p>
            <p>
              <span>Frais de livraison :</span>
              <span>{fraisLivraison.toFixed(2)} € </span>
            </p>
            <p>
              <span> Total : </span>
              <span>{(sousTotal + fraisLivraison).toFixed(2)} € </span>
            </p>
          </div>
        </aside>
      </main>
    </>
  )
}

export default App
