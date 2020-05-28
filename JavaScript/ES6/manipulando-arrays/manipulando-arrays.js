window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

// map ( transformar array em objeto com nome e e-mail)

function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });

  console.log(nameEmailArray);

  return nameEmailArray;
}

// Filter ( Filtrar os maiores de 50 anos)

function doFilter() {
  const olderThen50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });

  console.log(olderThen50);
}

// forEach ( Incluir nova propriedade no objeto )
// Nesse caso específico, optei por pegar o tamanho de cada string do name.

function doForEach() {
  const mappedPeople = doMap();
  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });

  console.log(mappedPeople);
}

// Reduce ( Somar idades )

function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);

  console.log(totalAges);
}

// Find ( Usuários de Minas Gerais )

function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });

  console.log(found);
}

// Some ( verifica se há ou não, retonr true or false )

function doSome() {
  const found = people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });

  console.log(found);
}

// Every ( Certifica se todos atendem a condição, neste caso se nat é igual BR )

function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === 'BR';
  });

  console.log(every);
}

// Sort ( Ordenar por nome e idade ASC e DESC)

function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return person.name.first;
    })
    .filter((person) => {
      return person.startsWith('A');
    })
    .sort((a, b) => {
      return;
    });

  console.log(mappedNames);
}
