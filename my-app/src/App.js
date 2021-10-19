import "./App.css"

function App() {
  const burgers = [
    {
      name: "L'instagrammable",
      image:
        "https://ih1.redbubble.net/image.191031762.5461/flat,800x800,070,f.u2.jpg",
      price: "10€90",
    },
    {
      name: "Kawaii Burger",
      image:
        "https://ih1.redbubble.net/image.191031762.5461/flat,800x800,070,f.u2.jpg",
      price: "6€90",
    },
    {
      name: "Kawaii Burger",
      image:
        "https://ih1.redbubble.net/image.191031762.5461/flat,800x800,070,f.u2.jpg",
      price: "6€90",
    },
    {
      name: "Kawaii Burger",
      image:
        "https://ih1.redbubble.net/image.191031762.5461/flat,800x800,070,f.u2.jpg",
      price: "6€90",
    },
    {
      name: "Kawaii Burger",
      image:
        "https://ih1.redbubble.net/image.191031762.5461/flat,800x800,070,f.u2.jpg",
      price: "6€90",
    },
  ]

  const burgerList = burgers.map(burger => (
    <div className="burger-card">
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
