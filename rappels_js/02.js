// Transformez ci-dessous les fonctions en fonctions fléchées.
// 💡 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions

const helloKebab = () => "Hello, Kebab !"
const glutenOrNotGluten = withGluten => (withGluten ? "gluten" : "sans-gluten")
const makeKebab = (kebab, withGluten) => kebab + glutenOrNotGluten(withGluten)

// Même symtaxe
// const makeKebab = (kebab, withGluten) =>
//   withGluten ? kebab + "gluten" : kebab + "sans-gluten"

// Quelle différence entre une fonction fléchée et une fonction classique ?
// Bonus: réutilisez les ternaires.

module.exports = { helloKebab, glutenOrNotGluten, makeKebab }
