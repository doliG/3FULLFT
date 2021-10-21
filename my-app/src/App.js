import { useState } from "react"
import "./App.css"
import fakeData from "./burgers.json"
import BurgerCard from "./BurgerCard"

// Guide penser en react: https://fr.reactjs.org/docs/thinking-in-react.html
// Doc prettier pour bien formatter son code https://prettier.io/

/**
 * Consignes:
 * - Déplacer le menu principal dans un composant Navbar
 * - Déplacer le formulaire de création dans un composant BurgerForm
 */
function App() {
  const [burgers, setBurgers] = useState(fakeData)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  const deleteBurger = name => {
    const newBurgers = burgers.filter(burger => burger.name !== name)
    setBurgers(newBurgers)
  }

  const addBurger = event => {
    event.preventDefault()
    console.log(event)

    const newBurgers = [...burgers, { name, price, image }]
    setBurgers(newBurgers)

    setName("")
    setPrice("")
    setImage("")
  }

  const burgerList = burgers.map(burger => (
    <BurgerCard burger={burger} deleteBurger={deleteBurger} />
  ))

  return (
    <div className="App">
      {/* Composant menu */}
      <nav className="nav">Le bon burger</nav>

      <div className="container">{burgerList}</div>

      {/* Composant form */}
      <form className="add-form" onSubmit={addBurger}>
        <div>
          <label for="name">Nom du votre burger</label>
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nom de votre burger"
          />
        </div>
        <div>
          <label for="price">Prix</label>
          <br />
          <input
            type="text"
            name="price"
            placeholder="Prix"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label for="image">Lien vers votre image</label>
          <br />
          <input
            type="text"
            name="image"
            placeholder="Lien vers votre image"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default App
