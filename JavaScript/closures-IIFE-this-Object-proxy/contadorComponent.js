const BTN_REINICIAR = 'btnReiniciar'
const ID_CONTADOR = 'contador'
const VALOR_CONTADOR = 100
const PERIODO_INTERVALO = 10

class ContadorComponent {
    constructor() {
        this.inicializar();
    }

    prepararContadorProxy() {
        const handler = {
            set: (currentContext, propertyKey, newValue) => {
                console.log({ currentContext, propertyKey, newValue })
                // Para parar todo o processamento
                if(!currentContext.valor) {
                    currentContext.efetuarParada()
                }
                currentContext[propertyKey] = newValue
                return true
            }
        }

        const contador = new Proxy({
            valor: VALOR_CONTADOR,
            efetuarParada: () => {}
        }, handler)

        return contador
    }

    atualizarTexto = ({ elementoContador, contador }) => (b) => {
        const identificadorTexto = '$$contador!'
        const textoPadrao = `Comecando em <strong>${identificadorTexto}</strong> segundos...`
        elementoContador.innerHTML = textoPadrao.replace(identificadorTexto, contador.valor--)
    }

    // Outra forma de lidar com closure, é usando funcao parcial, nesse caso a primeira vez que chamamos a funcao,
    // passamos o valor do elementoContador e o idIntervalo.
    // Isso evita ter que passar o elementoContador e o idIntervalo em cada chamada

    // Podemos criar a funcao no formato atualizarText ou agendarParadaContador.

    agendarParadaContador({elementoContador, idIntervalo}) {
        return () => {
            clearInterval(idIntervalo)
            elementoContador.innerHTM = ''
            this.desabilitarBotao()
        }
    }

    inicializar() {
        const elementoContador = document.getElementById(ID_CONTADOR);
        const contador = this.prepararContadorProxy();

        const argumentos = {
            elementoContador,
            contador
        }

        const fn = this.atualizarTexto(argumentos)
        const idIntervalo = setInterval(fn, PERIODO_INTERVALO)        

        {
            const argumentos = {
                elementoContador,
                idIntervalo
            }
            const desabilitarBotao = () => console.log('botao desabilitado')
            const pararContadorFn = this.agendarParadaContador.apply({desabilitarBotao}, [argumentos])
            contador.efetuarParada = pararContadorFn
        }
    }
}