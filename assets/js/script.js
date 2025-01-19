// console.log("Hola");

// **************************************************************
// SECCIÓN IMAGEN CON BORDE
const imagenPlaneta = document.querySelector(".imagen-planeta");

imagenPlaneta.addEventListener("click", () => {
  imagenPlaneta.style.border = "5px groove #00fff6";
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
  if (sticker1 + sticker2 + sticker3 > 10) {
    stickersTotal.innerHTML +=
      "Llevas " + sticker1 + sticker2 + sticker3 + " stickers";
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
  if (primero === 9) {
  }
  if (segundo === 1) {
  }
  if (tercero === 1) {
    validarPassword.innerHTML = "Password correcto";
  } else {
    validarPassword.innerHtml = "Password incorrecto. Vuelve a intentarlo";
  }
});
