const Employee = require('../lib/Employee')

test('set employee name by constructor', () => {
   const name = "Daniel"
    const e = new Employee(name)
    expect(e.name).toBe(name)
})
test('set employee id by constructor', () => {
    const id = 1
     const e = new Employee('Daniel', id)
     expect(e.id).toBe(id)
 })
 test('set employee email by constructor', () => {
    const email = "fakeemail@yahoo.com"
     const e = new Employee('Daniel', 1, email)
     expect(e.email).toBe(email)
 })
 test('can retrieve name with method getName()', () => {
     const name = 'Daniel'
     const e = new Employee(name, 1, "fakeemail@yahoo.com")
     const getName = e.getname()
     expect(getName).toBe(name)
 })
 test('can retrieve id with method getid()', () => {
    const id = 1
    const e = new Employee('Daniel', id, "fakeemail@yahoo.com")
    const getid = e.getid()
    expect(getid).toBe(id)
})
test('can retrieve email with method getemail()', () => {
    const email = "fakeemail@yahoo.com"
    const e = new Employee('Daniel', 1, email )
    const getemail = e.getemail()
    expect(getemail).toBe(email)
})
test('can retrieve role with method getrole()', () => {
    const role = 'employee'
    const e = new Employee('Daniel', 1, "fakeemail@yahoo.com" )
    const getrole = e.getrole()
    expect(getrole).toBe(role)
})