const { TestWatcher } = require('jest')
const { glutenOrNotGluten, makeKebab } = require('./01')

test('return gluten if withGluten is true', () => {
    expect(glutenOrNotGluten(true)).toBe('gluten')
})

test('return gluten if withGluten is false', () => {
    expect(glutenOrNotGluten(false)).toBe('sans-gluten')
})


test('return kebab with gluten if withGluten is true', () => {
    expect(makeKebab('galette oignons ', true)).toBe('galette oignons gluten')
})

test('return kebab without gluten if withGluten is false', () => {
    expect(makeKebab('galette oignons ', false)).toBe('galette oignons sans-gluten')
})