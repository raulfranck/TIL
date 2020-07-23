# Spread

Sintax básica de spread:

```
let array = [1, 2, 3, 4, 5, 6]

function addNumberFromSpread(value) {
  array = [...array, value]
  console.log(array);
}

addNumberFromSpread(2)

```

Retorna: 

```
[1, 2, 3, 4, 5, 6, 2]
```