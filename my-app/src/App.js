import "./App.css"
import fakeData from "./burgers.json"
import BurgerCard from "./components/BurgerCard"
import BurgerForm from "./components/BurgerForm"
import Navbar from "./components/Navbar"
import React from "react"

// Guide penser en react: https://fr.reactjs.org/docs/thinking-in-react.html
// Doc prettier pour bien formatter son code https://prettier.io/

/**
 * Consignes:
 * - Déplacer le menu principal dans un composant Navbar
 * - Déplacer le formulaire de création dans un composant BurgerForm
 */

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      burgers: fakeData,
    }
  }

  deleteBurger = name => {
    const { burgers } = this.state
    const newBurgers = burgers.filter(burger => burger.name !== name)
    this.setState({ burgers: newBurgers })
  }

  addBurger = burger => {
    const { burgers } = this.state
    const newBurgers = [...burgers, burger]
    this.setState({ burgers: newBurgers })
  }

  render() {
    const { burgers } = this.state
    const burgerList = burgers.map(burger => (
      <BurgerCard burger={burger} deleteBurger={this.deleteBurger} />
    ))

    return (
      <div className="App">
        <Navbar />

        <div className="container">{burgerList}</div>

        {/* Composant form */}
        <BurgerForm onSubmit={this.addBurger} />
      </div>
    )
  }
}

export default App
