const Manager = require('../lib/Manager')

test('set Manger name by constructor', () => {
   const name = "Daniel"
    const e = new Manager(name)
    expect(e.name).toBe(name)
})