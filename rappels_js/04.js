// Le chef doit servir le Kebab 1 et 2.
// Retournez simplement les deux premiers kebabs.
// 💡 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

function serveKebabs1And2(kebabs) {
  const [k1, k2] = kebabs
  return [k1, k2]
}

// Décidément, les clients affluent. Le chef vous demande d'être son commis de cuisine.
// Vous allez devoir lui passer les objets au bon moment. Voici une représentation de la cuisine:
const cuisines = {
  champsElysee: {
    toque: 1,
    sauces: ["andalouse", "blanche", "algérienne"],
    rotissoir: {
      heat: 180,
      remainingMeatWeight: 1200,
    },
  },
  rueDeLePaix: {
    toque: 1,
    sauces: ["andalouse", "algérienne", "cavier"],
    rotissoir: {
      heat: 180,
      remainingMeatWeight: 1200,
    },
  },
}

// "Combien de viande reste-il sur le rotissoir 1 ?"
// Recuperer plusieurs valeures
const remainingMeatWeight = ({ rotissoir }) => {
  const { remainingMeatWeight } = rotissoir
  return remainingMeatWeight
}

// Équivaut à
const remainingMeatWeight = cuisine => cuisine.remainingMeatWeight.rotissoir

// Passe moi les sauces !
const getSauces = cuisine => {
  // ...
}

// Passe moi la sauce andalouse !
const getSauceAndalouse = cuisine => {
  // ...
}

// Donne moi la toque et les sauces !
const getToqueAndSauce2 = ({ rueDeLaPaix }) => {
  const { toque, sauces } = rueDeLaPaix
  return {
    toque,
    sauces,
  }
}

const getToqueAndSauce = cuisine => {
  const toque = cuisine.toque
  const sauces = cuisine.sauces

  return {
    toque: toque,
    sauces: sauces,
  }
}
