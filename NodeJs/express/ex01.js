const exrpress = require('express')
const server = express()

// CONFIGURANDO E MAPEANDO ROTA

server.get('/', function (req, res) {
  res.send('<h1>index</h1>')
})

server.all('/teste', function (req, res) {
  res.send('<h1>Teste!</h1>')
})

server.get(/api/, function (req, res) {
  res.send('<h1>API!</h1>')
})

server.listen(3000, () => console.log('Executando...'))