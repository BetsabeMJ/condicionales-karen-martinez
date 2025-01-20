// console.log("Hola");
// **************************************************************
// SECCIÓN IMAGEN CON BORDE
const imagenPlaneta = document.querySelector(".imagen-planeta");

imagenPlaneta.addEventListener("click", () => {
  const imagenPlanetaBorder = (imagenPlaneta.style.border = "2px groove red");
  if (imagenPlaneta === imagenPlaneta) {
    imagenPlanetaBorder;
  } else {
    imagenPlaneta;
  }
  //NO SUPE CÓMO HACER PARA QUITAR EL BORDE.
});
// **************************************************************
// SECCIÓN STICKERS
const stickers = document.querySelector(".stickers");
const sticker1 = document.querySelector(".sticker1");
const sticker2 = document.querySelector(".sticker2");
const sticker3 = document.querySelector(".sticker3");
const stickersTotal = document.querySelector(".stickers-total");
const stickerButton = document.querySelector(".sticker-button");

stickerButton.addEventListener("click", () => {
  const total =
    Number(sticker1.value) + Number(sticker2.value) + Number(sticker3.value);
  if (total <= 10) {
    stickersTotal.innerHTML = "Llevas " + total + " stickers";
  } else {
    stickersTotal.innerHTML = "Llevas demaciados stickers";
  }
});
// **************************************************************
// SECCIÓN PASSWORD
const primero = document.querySelector("#primero");
const segundo = document.querySelector("#segundo");
const tercero = document.querySelector("#tercero");
const passwordButton = document.querySelector(".password-button");
const validarPassword = document.querySelector(".validar-password");

passwordButton.addEventListener("click", () => {
  const tresSelect = primero.value + segundo.value + tercero.value;
  if (tresSelect === "911") {
    validarPassword.innerHTML = "Password 1 correcto";
  } else if (tresSelect === "914") {
    validarPassword.innerHTML = "Password 2 correcto";
  } else {
    validarPassword.innerHTML = "Password incorrecto. Vuelve a intentarlo";
  }
});
