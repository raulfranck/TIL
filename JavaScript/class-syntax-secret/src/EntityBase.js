class EntityBase {
    // #name permite que eu não acesse essa propriedade de fora. Disponivel no node ˆ14.0.0
    #name
    #age
    #gender
    constructor({name, age, gender}) {
        this.#name = name
        this.#age = age
        this.#gender = gender
    }

    get getName() {
        const prefix = this.#gender === 'male' ? 'Mr.' : 'Mrs.'
        return `${prefix} ${this.#name}`
    }

    get getBirthDate() {
        if(!this.#age) {
            throw new Error('You must pass age to get birthDate')
        }

        return new Date().getFullYear() - this.#age
    }

    set age(value) {
        this.#age = value
    }
    
}
module.exports = EntityBase