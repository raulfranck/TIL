const Employee = require('./employes')
const Util = require('./util')

class Manager extends Employee {
    #bonuses = 2000

    get bonuses() {
        return Util.formatCurrency(this.#bonuses)
    }
    
}

module.exports = Manager