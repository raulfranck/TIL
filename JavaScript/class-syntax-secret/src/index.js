// const EntityBase = require('./EntityBase')

// const person = new EntityBase({name: 'Raul Franck', age: '30', gender: 'male'})

// person.age = 31

// console.log(person.getName)
// console.log(person.getBirthDate)

const assert = require('assert')
const Employee = require('./employes')
const Util = require('./util')
const Manager = require('./manager')

const GENDER = {
    male: 'male',
    female: 'female'
}


{
    const employee = new Employee({
        name: 'Raul Franck',
        age: 30,
        gender: GENDER.male
    })

    assert.deepStrictEqual(employee.getName, 'Mr. Raul Franck')
    assert.deepStrictEqual(employee.age, undefined) // Deve ser undefined porque age não possui um método get()
    assert.deepStrictEqual(employee.gender, undefined) // Deve ser undefined porque gender não possui um método get()

    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.40))

    assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32))

    assert.deepStrictEqual(employee.getBirthDate, 1994)
}

{
    const employee = new Employee({
        name: 'Xuxa da Silva',
        // age: 30,
        gender: GENDER.female
    })
    assert.throws(() => employee.getBirthDate, {message: 'You must pass age to get birthDate'})
}

{
    const manager = new Manager({
        name: 'Xavier',
        age: 40,
        gender: GENDER.male
    })

    assert.deepStrictEqual(manager.getName, 'Mr. Xavier')
    assert.deepStrictEqual(manager.age, undefined) // Deve ser undefined porque age não possui um método get()
    assert.deepStrictEqual(manager.gender, undefined) // Deve ser undefined porque gender não possui um método get()
    assert.deepStrictEqual(manager.getBirthDate, 1984)
    assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.40))
    assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000))
    // assert.deepStrictEqual(manager.netPay, Util.formatCurrency(2000))

}