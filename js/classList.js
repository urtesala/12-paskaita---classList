"use strict";
console.log("classList.js");

// classList    API

// element.classList.add - prideti
// element.classList.remove - pasalinti
// element.classList.toggle - toglinti
// element.classList.contains - grazina ar yra tokia klase

const htmlEls = {
  main: document.querySelector("main"),
  ul: document.querySelector("ul"),
  h1: document.querySelector("h1"),
};
// 1. uzdeti <main> klase 'container'

htmlEls.main.classList.add("container");

// 2. <ul class="unlisted"> uzdeti klase 'card'

htmlEls.ul.classList.add("card");

// 3. uzdeti h1 elementui klase 'mainTitle' aprasyti css faile keleta taisykliu

htmlEls.h1.classList.add("mainTitle");

// 4. paspaudus ant h1 mes ijungiam arba isjungiam 'mainTitle' klase (toggle)

htmlEls.h1.addEventListener("click", () => {
  htmlEls.h1.classList.toggle("mainTitle");
});
// 5. atvaizduoti su alertu ar <ul class="unlisted"> turi klase unlisted (.contains)

const isThereAClass = htmlEls.ul.classList.contains("unlisted");
console.log("isThereAClass ===", isThereAClass);
