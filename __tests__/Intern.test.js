const Intern = require('../lib/Intern')

test('set Intern name by constructor', () => {
   const name = "Daniel"
    const e = new Intern(name)
    expect(e.name).toBe(name)
})