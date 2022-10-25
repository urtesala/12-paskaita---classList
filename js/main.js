"use strict";
console.log("main.js");

const sectionTitleEl = document.getElementById("sectionTitle");
const autorEl = document.getElementById("autor");
const textEl = document.getElementById("text");
const artColorInputEl = document.getElementById("artColorInput");
const artHalfBtnEl = document.getElementById("artHalf");
const articleEl = document.getElementById("article");
const hideArtBtnEl = document.getElementById("hideArtBtn");
const specialBtnEl = document.getElementById("specialBtn");

function makeStyleBig(element) {
  element.style.fontWeight = "normal";
  element.style.fontWeight = 400;
  element.style.fontSize = "3rem";
  element.style.marginBottom = "0.3em";
}
makeStyleBig(sectionTitleEl);

//  <h4 id="autor">James Band</h4> pritaikyti makeStyleBig stiliu
makeStyleBig(autorEl);

// nusittaikyti i paragrafa su tekstu, uzdedi linijos auksti 1.5 ir padidinti tarpa tarp raidziu keletu pixeliu, padaryti teksta pasvirusi i desine(italic)
// textEl.style.lineHeight = 1.5;
// textEl.style.letterSpacing = '2px';
// textEl.style.fontStyle = 'italic';

// MAKE SPECIAL
specialBtnEl.addEventListener("click", () => {
  // articleEl.className = 'specialArt'; // perraso esama
  // articleEl.className += ' specialArt'; // nebenaudojamas
  articleEl.classList.toggle("specialArt"); // uzdeti jei nera nuimti jei yra
});

// <input type="text" id="artColorInput" placeholder="Article spalva">
// ivedus spalva ta spalva turi nusidazyti article fonas. be mygtuko
artColorInputEl.addEventListener("input", (event) => {
  console.log("input", event.target.value);
  const colorValueFromInput = event.target.value;
  sectionTitleEl.style.backgroundColor = colorValueFromInput;
});
//  <button>make article 50% width</button> paspaudus sumazina article ploti iki 50%
artHalfBtnEl.addEventListener("click", () => {
  console.log("half");
  articleEl.style.width = "50%";
});

// <button>Hide article</button> kai paspaudziam paslepia article elementa, ir pasikeicia tekstas i 'show article'
hideArtBtnEl.addEventListener("click", toggleArticle);

function toggleArticle() {
  if (articleEl.style.display === "none") {
    // kai straipsnis buvo pasleptas
    articleEl.style.display = "block";
    // hideArtBtnEl.textContent = 'Hide article';
    hideArtBtnEl.textContent = hideArtBtnEl.textContent.replace("Show", "Hide");
  } else {
    // kai staipsnis buvo rodmas
    articleEl.style.display = "none";
    // hideArtBtnEl.textContent = 'Show article';
    hideArtBtnEl.textContent = hideArtBtnEl.textContent.replace("Hide", "Show");
  }
}
// paspaudus dar karta atvirkstinis efektas

/*
jei article yra rodomas 
tai tada paslepti
jei nerodomas 
tai norim parodyt
*/
