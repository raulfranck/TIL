const handler = {
    get: (target, key) => {
        console.log('target: ', target) // target:  { name: 'Xuxa da Silva', age: 30 }
        console.log('key: ', key) // Retorna a key passada. Exemplo: proxy.name retorna name.

        if(target[key]) {
            return target[key] // Retorna o valor da propriedade se existir essa key
        }

        return 'Não existe esta propriedade.' 
    },

    set: (target, key, value) => {
        target[key] = value
    }
}

const object = {
    name: 'Xuxa da Silva',
    age: 30
}

const proxy = new Proxy(object, handler)

console.log(proxy.name = 'teste')
console.log(proxy.name)