const { makeManyKebabs, makeManyVariousKebabs, getWithoutGluten } = require("./03.js")

test('makeManyKebabs should return a list', () => {
    expect(Array.isArray(makeManyKebabs())).toBe(true)
})

test('makeManyKebabs should return a list of 10 kebabs', () => {
    expect(makeManyKebabs()).toHaveLength(10)
})

test('makeManyKebabs should return a list of 10 valid kebabs', () => {
    makeManyKebabs().map(k => {
        expect(k).toBe("pain salade tomate oignon gluten")
    })
})

test('makeManyVariousKebabs add two new kebabs', () => {
    const kebabs = makeManyVariousKebabs();

    let nbWithGluten = 0;
    let nbWithoutGluten = 0;
    for (k of kebabs) {
        if (k.includes('sans-gluten')) {
            nbWithoutGluten++;
        } else if (k.includes('gluten')) {
            nbWithGluten++;
        }
    }

    expect(nbWithGluten).toBe(10);
    expect(nbWithoutGluten).toBe(3)
})

test('getWithoutGluten should return all kebabs without gluten', () => {
    const kebabs = makeManyVariousKebabs()
    const kebabsWithoutGluten = getWithoutGluten(kebabs)

    let nbSg = 0
    for (k of kebabsWithoutGluten) {
        if (k.includes('sans-gluten')) {
            nbSg++
        }
    }

    expect(nbSg).toBe(3)
})