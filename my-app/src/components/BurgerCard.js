import "./BurgerCard.css"

function BurgerCard(props) {
  const { burger, deleteBurger } = props

  return (
    <div key={burger.name} className="burger-card">
      <img src={burger.image} alt="Kawaii Burger" />
      <p>{burger.name}</p>
      <p>{burger.price}</p>
      <button onClick={() => deleteBurger(burger.name)}>Supprimer</button>
    </div>
  )
}

export default BurgerCard
