// Concatenação no JavaScript padrão

function fullName(first, second, third) {
  return first + " " + second + " " + third;
}

console.log(fullName("Raul", "Selma", "Larissa"))

// Através de Template Literals:

function fullName2(first, second, third) {
  return `${first} ${second} ${third}`
}

console.log(fullName2("Raul", "Selma", "Larissa"))