import "./App.css"
import fakeData from "./burgers.json"

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
