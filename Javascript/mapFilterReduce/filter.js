function filtraPares(arr) {
  return arr.filter(callback);
}

function callback(item) {
  return item % 2 === 0;
}

const meuArray = [1, 23, 55, 8, 12, 30, 85];

console.log(filtraPares(meuArray));
