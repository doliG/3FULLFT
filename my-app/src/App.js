import { useState } from "react"
import "./App.css"
import fakeData from "./burgers.json"
import BurgerCard from "./components/BurgerCard"
import BurgerForm from "./components/BurgerForm"
import Navbar from "./components/Navbar"

// Guide penser en react: https://fr.reactjs.org/docs/thinking-in-react.html
// Doc prettier pour bien formatter son code https://prettier.io/

/**
 * Consignes:
 * - Déplacer le menu principal dans un composant Navbar
 * - Déplacer le formulaire de création dans un composant BurgerForm
 */
function App() {
  const [burgers, setBurgers] = useState(fakeData)

  const deleteBurger = name => {
    const newBurgers = burgers.filter(burger => burger.name !== name)
    setBurgers(newBurgers)
  }

  const addBurger = burger => {
    const newBurgers = [...burgers, burger]
    setBurgers(newBurgers)
  }

  const burgerList = burgers.map(burger => (
    <BurgerCard burger={burger} deleteBurger={deleteBurger} />
  ))

  return (
    <div className="App">
      <Navbar />

      <div className="container">{burgerList}</div>

      {/* Composant form */}
      <BurgerForm onSubmit={addBurger} />
    </div>
  )
}

export default App
