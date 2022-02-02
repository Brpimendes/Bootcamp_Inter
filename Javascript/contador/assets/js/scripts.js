window.addEventListener("load", function () {
  const btnMenos = document.querySelector(".menos");
  btnMenos.addEventListener("click", function () {
    contarMenos();
  });

  const btnMais = document.querySelector(".mais");
  btnMais.addEventListener("click", function () {
    contarMais();
  });
});

function contarMenos() {
  let spnValor = document.querySelector(".valor");
  let valor = Number(spnValor.innerHTML)

  spnValor.innerHTML = --valor
}

function contarMais() {
  let spnValor = document.querySelector(".valor");
  let valor = Number(spnValor.innerHTML)

  spnValor.innerHTML = ++valor
}
