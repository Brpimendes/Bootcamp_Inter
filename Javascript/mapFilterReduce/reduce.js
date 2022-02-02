function somaNumeros(arr) {
  return arr.reduce(function (prev, current) {
    return prev + current;
  });
}

const arr = [1, 2, 8];

console.log(somaNumeros(arr));

const lista = [
  {
    name: "sabao em po",
    preco: 30,
  },
  {
    name: "cereal",
    preco: 13,
  },
  {
    name: "toalha",
    preco: 26,
  },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function (prev, current) {
    return prev - current.preco;
  }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));
