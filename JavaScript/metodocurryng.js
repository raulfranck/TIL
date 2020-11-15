// SEM UTILIZAR O MÉTODO CURRYNG

function produto(a, b) {
  return a * b;
}

// Repetimos 4 vezes o primeiro parâmetro da função.
produto(2, 2); // 4
produto(2, 3); // 6
produto(2, 4); // 8
produto(2, 5); // 10


// UTILIZANDO MÉTODO CURRYNG

function produto(a) {
  return function (b) {
    return a * b
  };
}

var dobro = produto(2); // Primeiro parâmetro da primeira função.

dobro(2); // 4
dobro(3); // 6
dobro(4); // 8
dobro(5); // 10