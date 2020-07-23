const _ = require('lodash')

const alunos = [{
  nome: 'Raul',
  nota: '9.5'
}, {
  nome: 'Larissa',
  nota: '9.8'
}, {
  nome: 'Selma',
  nota: '9.9'
}]


// media com lodash

const media = _.sumBy(alunos, 'nota') / alunos.length


console.log(media)