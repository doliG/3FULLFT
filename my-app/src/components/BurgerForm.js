import { useState } from "react"
import "./BurgerForm.css"

function BurgerForm(props) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const { onSubmit } = props

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit({ name, price, image })
    setName("")
    setPrice("")
    setImage("")
  }

  return (
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
  )
}
export default BurgerForm
