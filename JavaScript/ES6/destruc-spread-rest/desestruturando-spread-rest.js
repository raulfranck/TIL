// Para esse tutorial será usado o arquivo people.js

window.addEventListener('load', () => {
  doSpread() // Invoca função que exemplifica o spread
  doRest() // infoca a função que exemplifica o rest
})

// desmonstração de exemplo com spread ... (Concatenando 2 objetos [Mr + Ms])
function doSpread() {
  const marriedMen = people.results.filter(person => person.name.title === 'Mr');
  const marriedWomen = people.results.filter(person => person.name.title === 'Ms');

  const marriedPeople = [...marriedMen, ...marriedWomen, { msg: 'Oi' }];

  console.log(marriedPeople);
}

// Demonstração de exemplo com rest
function doRest() {

}