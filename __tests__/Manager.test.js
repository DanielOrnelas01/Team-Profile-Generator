const Manager = require('../lib/Manager')

test('set Manager name by constructor', () => {
   const name = "Daniel"
    const e = new Manager(name)
    expect(e.name).toBe(name)
})
test('set Manager id by constructor', () => {
    const id = 1
     const e = new Manager('Daniel', id)
     expect(e.id).toBe(id)
 })
 test('set Manager email by constructor', () => {
    const email = "fakeemail@yahoo.com"
     const e = new Manager('Daniel', 1, email)
     expect(e.email).toBe(email)
 })
 test('can retrieve name with method getName()', () => {
     const name = 'Daniel'
     const e = new Manager(name, 1, "fakeemail@yahoo.com")
     const getName = e.getname()
     expect(getName).toBe(name)
 })
 test('can retrieve id with method getid()', () => {
    const id = 1
    const e = new Manager('Daniel', id, "fakeemail@yahoo.com")
    const getid = e.getid()
    expect(getid).toBe(id)
})
test('can retrieve email with method getemail()', () => {
    const email = "fakeemail@yahoo.com"
    const e = new Manager('Daniel', 1, email )
    const getemail = e.getemail()
    expect(getemail).toBe(email)
})
test('can retrieve role with method getrole()', () => {
    const role = 'Manager'
    const e = new Manager('Daniel', 1, "fakeemail@yahoo.com" )
    const getrole = e.getrole()
    expect(getrole).toBe(role)
})
test('can retrieve office number with mehod getofficenumber()', () => {
    const officenumber = '555-555-5555'
    const e = new Manager('Daniel', 1, "fakeemail@yahoo.com" )
    const getofficenumber = e.getofficenumber()
    expect(getofficenumber).toBe(getofficenumber)
})