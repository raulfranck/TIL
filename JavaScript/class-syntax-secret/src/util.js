class Util {
    static #defaultFormat = Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency'
    })

    static formatCurrency(value) {
        return this.#defaultFormat.format(value)
    }

    static unFormatCurrency(value) {
        const values = Number(value.replace(/\D/g, '')) / 100
        return values
    }
    
}

module.exports = Util