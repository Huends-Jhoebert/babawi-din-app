const BTN1 = document.querySelector(".__btn-1");
const BTN2 = document.querySelector(".__btn-2");
const BTN3 = document.querySelector(".__btn-3");
const BTN4 = document.querySelector(".__btn-4");
const BTN5 = document.querySelector(".__btn-5");
const BTN6 = document.querySelector(".__btn-6");
const BTN7 = document.querySelector(".__btn-7");

BTN1.addEventListener("mouseover", () => {
   BTN1.style.display = "none";
   BTN2.style.display = "inline";
});

BTN2.addEventListener("mouseover", () => {
   BTN2.style.display = "none";
   BTN3.style.display = "inline";
});

BTN3.addEventListener("mouseover", () => {
   BTN3.style.display = "none";
   BTN4.style.display = "inline";
});

BTN4.addEventListener("mouseover", () => {
   BTN4.style.display = "none";
   BTN5.style.display = "inline";
});

BTN5.addEventListener("mouseover", () => {
   BTN5.style.display = "none";
   BTN6.style.display = "inline";
});

BTN6.addEventListener("mouseover", () => {
   BTN6.style.display = "none";
   BTN7.style.display = "inline";
});

BTN7.addEventListener("mouseover", () => {
   BTN7.style.display = "none";
   BTN1.style.display = "inline";
});
