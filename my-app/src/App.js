import "./App.css"
import fakeData from "./burgers.json"

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
  const burgers = fakeData

  const burgerList = burgers.map(burger => (
    <div key={burger.name} className="burger-card">
      <img src={burger.image} alt="Kawaii Burger" />
      <p>{burger.name}</p>
      <p>{burger.price}</p>
    </div>
  ))

  return (
    <div className="App">
      <nav className="nav">Le bon burger</nav>

      <div className="container">{burgerList}</div>
    </div>
  )
}

export default App
