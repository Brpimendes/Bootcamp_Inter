window.addEventListener("load", function () {
  const btnPlay = document.querySelector("#play");
  btnPlay.addEventListener("click", playVideo);
});

function playVideo() {
  const filmePrincipal = document.querySelector(".filme-principal");

  const modalPlayer = document.createElement("div");
  modalPlayer.classList.add("modal-player");

  const player = document.createElement("video");
  player.classList.add("player");
  player.setAttribute("src", "https://youtu.be/I-t4PJKrb3A");

  const btnClose = document.createElement("span");
  btnClose.append(document.createTextNode("X"));

  player.appendChild(btnClose);
  modalPlayer.appendChild(player);

  filmePrincipal.appendChild(modalPlayer);
}
