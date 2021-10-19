// Transformez ci-dessous les fonctions en fonctions fléchées.
// 💡 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function helloKebab() {
    return 'Hello, Kebab !'
}

function glutenOrNotGluten(withGluten) {
    if (withGluten) {
        return 'gluten'
    } else {
        return 'sans-gluten'
    }
}

function makeKebab(kebab, withGluten) {
    if (withGluten) {
        return kebab + 'gluten'
    } else {
        return kebab + 'sans-gluten'
    }
}

// Quelle différence entre une fonction fléchée et une fonction classique ?
// Bonus: réutilisez les ternaires.

module.exports = { helloKebab, glutenOrNotGluten, makeKebab }