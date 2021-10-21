import { useState } from "react"
import "./App.css"
import fakeData from "./burgers.json"
import BurgerCard from "./BurgerCard"

// Guide penser en react: https://fr.reactjs.org/docs/thinking-in-react.html
// Doc prettier pour bien formatter son code https://prettier.io/
/**
 * Pour ajouter un burger
 */
// - Ajouter un formulaire avec 3 inputs: name, price, image
//   - input https://fr.reactjs.org/docs/forms.html

// - Au submit du form: récupérer les 3 inputs et les passer par un post // Fake post
//   || simplement ajouter une var burger dans la liste burger
//   - hooks pour modifier burgers https://fr.reactjs.org/docs/hooks-intro.html

/**
 * Pour supprimer un burger
 */
// - Ajouter un bouton suppression sur chaque burger
// - au clic, supprimer le burger du tableau (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

function App() {
  const [burgers, setBurgers] = useState(fakeData)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  const deleteBurger = name => {
    const newBurgers = burgers.filter(burger => burger.name !== name)
    setBurgers(newBurgers)
  }

  const handleSubmit = event => {
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
      <form className="add-form" onSubmit={handleSubmit}>
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
