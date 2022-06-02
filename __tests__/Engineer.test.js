const Engineer = require('../lib/Engineer')

test('set Engineer name by constructor', () => {
   const name = "Daniel"
    const e = new Engineer(name)
    expect(e.name).toBe(name)
})

test('set Engineer id by constructor', () => {
    const id = 1
     const e = new Engineer('Daniel', id)
     expect(e.id).toBe(id)
 })