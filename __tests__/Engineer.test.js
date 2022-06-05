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
 test('set Engineer email by constructor', () => {
    const email = "fakeemail@yahoo.com"
     const e = new Engineer('Daniel', 1, email)
     expect(e.email).toBe(email)
 })
 test('can retrieve name with method getName()', () => {
    const name = 'Daniel'
    const e = new Engineer(name, 1, "fakeemail@yahoo.com")
    const getName = e.getname()
    expect(getName).toBe(name)
})
test('can retrieve id with method getid()', () => {
    const id = 1
    const e = new Engineer('Daniel', id, "fakeemail@yahoo.com")
    const getid = e.getid()
    expect(getid).toBe(id)
})
test('can retrieve email with method getemail()', () => {
    const email = "fakeemail@yahoo.com"
    const e = new Engineer('Daniel', 1, email )
    const getemail = e.getemail()
    expect(getemail).toBe(email)
})
test('can retrieve role with method getrole()', () => {
    const role = 'Engineer'
    const e = new Engineer('Daniel', 1, "fakeemail@yahoo.com" )
    const getrole = e.getrole()
    expect(getrole).toBe(role)
})
test('can retrieve github with method getgithub()', () => {
    const github = 'github name'
    const e = new Engineer('Daniel', 1, "fakeemail@yahoo.com" )
    const getgithub = e.getgithub()
    expect(getgithub).toBe(getgithub)
})