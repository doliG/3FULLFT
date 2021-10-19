// Vous pouvez vérifier que votre code fonctionne en le lançant manuellement,
// ou avec la commande `yarn test [--watch]` ou `npm run test [--watch]`.

// Certains clients veulent un kebab sans gluten. D'autres avec.
// La fonction ci-dessous doit retourner 'sans-gluten' ou 'avec-gluten' en fonction
// du choix du client.
// 💡 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
function glutenOrNotGluten(withGluten) {

}

// Dans la fonction, kebab est une chaine de caractère représentant un kebab
// (i.e 'pain salade tomate'), et withGluten un booleen.
// Ex: makeKebab('galette oignons ', true)
//     > 'galette oignons gluten'
//     makeKebab('galette salade ', false)
//     > 'galette oignons sans-gluten'
function makeKebab(kebab, withGluten) {

}

module.exports = { glutenOrNotGluten, makeKebab }